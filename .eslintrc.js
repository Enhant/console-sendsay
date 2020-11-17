module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    rules: {
        'import/newline-after-import': 0,
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-named-as-default': 0,
        'import/no-unresolved': 0,
        'import/no-webpack-loader-syntax': 0,
        'import/prefer-default-export': 0,
        'max-len': 0,
        'newline-per-chained-call': 0,
        'no-console': 1,
        'no-undef': 0,
        'no-unused-vars': 1,
        'no-use-before-define': 0,
        'prefer-template': 2,
        'react/destructuring-assignment': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-closing-tag-location': 0,
        'react/forbid-prop-types': 0,
        'react/jsx-first-prop-new-line': [2, 'multiline'],
        'react/jsx-filename-extension': 0,
        'react/jsx-no-target-blank': 0,
        'react/jsx-uses-vars': 2,
        'react/require-default-props': 0,
        'react/require-extension': 0,
        'react/self-closing-comp': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        'react/no-unescaped-entities': 0,
        'require-yield': 0,
        'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }],
        'react/jsx-handler-names': ['error'],
        'prettier/prettier': 0,
        'no-useless-escape': 0,
        'no-control-regex': 0,
        'no-unused-labels': 1,
        'prefer-const': 1,
    },
};
