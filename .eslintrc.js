module.exports = {
    plugins: ["prettier"],
    extends: 'eslint-config-airbnb-base',
    rules: {
        'no-console': 2,
        "import/prefer-default-export": 0,
        'no-restricted-globals': 1,
        'no-param-reassign': 1
    },
    env: {
        browser: true,
        jest: true
    }
};