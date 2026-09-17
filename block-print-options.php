<?php
/**
 * Plugin Name:     Block Print Options
 * Plugin URI:      https://github.com/radcampaign/block-print-options
 * Description:     Provides options to hide blocks from print or show them only when printing.
 * Author:          Rad Campaign
 * Author URI:      https://radcampaign.com/
 * Text Domain:     block-print-options
 * Domain Path:     /languages
 * Version:         1.1.0
 *
 * @package         Block_Print_Options
 */

/**
 * Read Bud entrypoints for a given entry name.
 *
 * @param string $entry Entrypoint name.
 * @return array{js?: string[], css?: string[], dependencies?: string[]}
 */
function block_print_options_entry( string $entry ): array {
	static $entrypoints = null;

	if ( $entrypoints === null ) {
		$path = plugin_dir_path( __FILE__ ) . 'dist/entrypoints.json';
		$entrypoints = file_exists( $path )
			? ( json_decode( (string) file_get_contents( $path ), true ) ?: [] )
			: [];
	}

	return $entrypoints[ $entry ] ?? [];
}

function block_print_options_editor_enqueue() {
	$entry = block_print_options_entry( 'block-print-options' );
	$deps  = $entry['dependencies'] ?? [
		'wp-i18n',
		'wp-hooks',
		'wp-element',
		'wp-block-editor',
		'wp-compose',
		'wp-components',
	];

	// Built JSX uses React.createElement; ensure the React global is available.
	if ( ! in_array( 'react', $deps, true ) ) {
		$deps[] = 'react';
	}

	wp_enqueue_script(
		'block-print-options',
		plugins_url( 'dist/js/block-print-options.js', __FILE__ ),
		$deps,
		'1.1.0'
	);

	$editor_css = plugin_dir_path( __FILE__ ) . 'dist/css/block-print-options-editor.css';
	if ( file_exists( $editor_css ) ) {
		wp_enqueue_style(
			'block-print-options-editor',
			plugins_url( 'dist/css/block-print-options-editor.css', __FILE__ ),
			[],
			'1.1.0'
		);
	}
}

add_action( 'enqueue_block_editor_assets', 'block_print_options_editor_enqueue' );

function block_print_options_frontend_enqueue() {
	wp_enqueue_style(
		'block-print-options',
		plugins_url( 'dist/css/block-print-options.css', __FILE__ ),
		[],
		'1.1.0'
	);
}

add_action( 'wp_enqueue_scripts', 'block_print_options_frontend_enqueue' );
