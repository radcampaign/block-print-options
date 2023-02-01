/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { Fragment }	from '@wordpress/element';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import { ToggleControl } from '@wordpress/components';

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

		const toggleClassName = () => {
			const newClassName = () => {
				if (typeof className === 'undefined') {
					return 'hide-from-print';
				} else if (! hasPrintClass()) {
					return className ? className + ' hide-from-print' : 'hide-from-print';
				} else {
					return className.replace(' hide-from-print', '').replace('hide-from-print ', '').replace('hide-from-print', '');
				}
			}
			setAttributes( { className: newClassName() } );
		}

		const hasPrintClass = () => {
			if (typeof className === 'undefined') {
				return false;
			}
			return className.match(/(?<!\S)hide-from-print(?!\S)/);
		}

		return (
			<Fragment>
				<BlockEdit {...props} />
				{ isSelected &&
					<InspectorAdvancedControls>
						<ToggleControl
							label={ __( 'Hide from print' ) }
							checked={ hasPrintClass() }
							onChange={ () => toggleClassName() }
							help={ hasPrintClass() ? __( 'Hidden from print.' ) : __( 'Visible from print.' ) }
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
