module.exports = {
	extends: ["prettier"],
	plugins: ["prettier"],
	rules: {
		"import/prefer-default-export": 0,
		"no-console": 2,
		"no-restricted-globals": 0,
		"no-param-reassign": 0,
	},
	env: {
		browser: true,
	},
};
