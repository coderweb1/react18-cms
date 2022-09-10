module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/self-closing-comp': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'global-require': 'off',
		'prettier/prettier': 'off',
		'no-unused-vars': 'off',
		'import/order': 'off',
		'import/prefer-default-export': 'off',
		'import/newline-after-import': 'off',
		'react/button-has-type': 'off',
		'no-console': 'off',
		'class-methods-use-this': 'off',
		'consistent-return': 'off'
	}
};
