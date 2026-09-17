/**
 * @param {import('@roots/bud').Bud} bud
 */
export default (bud) => {
	bud
		.entry('block-print-options', [
			'block-print-options.js',
			'block-print-options.css',
		])
		.entry('block-print-options-editor', [
			'block-print-options-editor.css',
		])
		.minimize(bud.isProduction);
};
