/**
 * @param {import('@roots/bud').Bud} bud
 */
export default (bud) => {
	bud
		.entry(['block-print-options.js', 'block-print-options.css'])
		.minimize(bud.isProduction);
  };
