<?php
/**
 * Plugin Name:     Block Print Options
 * Plugin URI:      https://github.com/radcampaign/block-print-options
 * Description:     Provides the option to hide blocks from printing.
 * Author:          Rad Campaign
 * Author URI:      https://radcampaign.com/
 * Text Domain:     block-print-options
 * Domain Path:     /languages
 * Version:         1.0.0
 *
 * @package         Block_Print_Options
 */

function block_print_options_editor_enqueue() {
	wp_enqueue_script(
		'block-print-options',
		plugins_url( 'dist/js/block-print-options.js', __FILE__ ),
		[],
		'1.0.0'
	);
}

add_action( 'enqueue_block_editor_assets', 'block_print_options_editor_enqueue' );

function block_print_options_frontend_enqueue() {
	wp_enqueue_style(
		'block-print-options',
		plugins_url( 'dist/css/block-print-options.css', __FILE__ ),
		[],
		'1.0.0'
	);
}

add_action( 'wp_enqueue_scripts', 'block_print_options_frontend_enqueue' );
