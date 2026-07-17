// @ts-check

import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
	rules: {
		"no-console": "warn",
		"no-debugger": "warn",
		eqeqeq: ["error", "always"],
		curly: ["error", "all"],
		"no-unused-vars": "off",
	},
});
