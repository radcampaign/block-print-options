/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { Fragment }	from '@wordpress/element';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { ToggleControl } from '@wordpress/components';

const HIDE_FROM_PRINT = 'hide-from-print';
const SHOW_ONLY_ON_PRINT = 'show-only-on-print';

const hasClass = ( className, classToFind ) => {
	if ( typeof className === 'undefined' || ! className ) {
		return false;
	}
	return new RegExp( `(?<!\\S)${ classToFind }(?!\\S)` ).test( className );
};

const addClass = ( className, classToAdd ) => {
	if ( typeof className === 'undefined' || ! className ) {
		return classToAdd;
	}
	if ( hasClass( className, classToAdd ) ) {
		return className;
	}
	return `${ className } ${ classToAdd }`.trim();
};

const removeClass = ( className, classToRemove ) => {
	if ( typeof className === 'undefined' || ! className ) {
		return className;
	}
	return className
		.replace( new RegExp( `\\s*${ classToRemove }\\b`, 'g' ), '' )
		.replace( /\s+/g, ' ' )
		.trim();
};

/**
 * Add print options to advanced block settings.
 */
const addBlockControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const {
			attributes,
			setAttributes,
			isSelected,
		} = props;

		const {
			className,
		} = attributes;

		const isHiddenFromPrint = hasClass( className, HIDE_FROM_PRINT );
		const isShowOnlyOnPrint = hasClass( className, SHOW_ONLY_ON_PRINT );

		const toggleHideFromPrint = () => {
			let nextClassName = className;
			if ( isHiddenFromPrint ) {
				nextClassName = removeClass( nextClassName, HIDE_FROM_PRINT );
			} else {
				nextClassName = removeClass( nextClassName, SHOW_ONLY_ON_PRINT );
				nextClassName = addClass( nextClassName, HIDE_FROM_PRINT );
			}
			setAttributes( { className: nextClassName || undefined } );
		};

		const toggleShowOnlyOnPrint = () => {
			let nextClassName = className;
			if ( isShowOnlyOnPrint ) {
				nextClassName = removeClass( nextClassName, SHOW_ONLY_ON_PRINT );
			} else {
				nextClassName = removeClass( nextClassName, HIDE_FROM_PRINT );
				nextClassName = addClass( nextClassName, SHOW_ONLY_ON_PRINT );
			}
			setAttributes( { className: nextClassName || undefined } );
		};

		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected &&
					<InspectorAdvancedControls>
						<ToggleControl
							label={ __( 'Hide from print' ) }
							checked={ isHiddenFromPrint }
							onChange={ toggleHideFromPrint }
							help={ isHiddenFromPrint ? __( 'Hidden when printing.' ) : __( 'Visible when printing.' ) }
						/>
						<ToggleControl
							label={ __( 'Show only on print' ) }
							checked={ isShowOnlyOnPrint }
							onChange={ toggleShowOnlyOnPrint }
							help={ isShowOnlyOnPrint ? __( 'Hidden on screen; visible when printing.' ) : __( 'Visible on screen.' ) }
						/>
					</InspectorAdvancedControls>
				}
			</Fragment>
		);
	};
}, 'addBlockControls');

addFilter(
	'editor.BlockEdit',
	'block-print-options/add-block-controls',
	addBlockControls
);
