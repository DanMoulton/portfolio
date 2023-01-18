module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    ignorePatterns: ['dist/', 'node_modules/'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error'
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/type-annotation-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'arrow-spacing': 2,
        'camelcase': 2,
        'comma-spacing': 2,
        'constructor-super': 2,
        'for-direction': 2,
        'getter-return': 2,
        'jsdoc/no-undefined-types': 0,
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true
            },
        ],
        'keyword-spacing': [
            'error',
            { 'before': true, 'after': true }
        ],
        'linebreak-style': 2,
        'no-async-promise-executor': 2,
        'no-case-declarations': 2,
        'no-class-assign': 2,
        'no-compare-neg-zero': 2,
        'no-cond-assign': 2,
        'no-const-assign': 2,
        'no-constant-condition': 2,
        'no-constructor-return': 2,
        'no-control-regex': 2,
        'no-debugger': 2,
        'no-delete-var': 2,
        'no-dupe-args': 2,
        'no-dupe-class-members': 2,
        'no-dupe-else-if': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-else-return': 2,
        'no-empty': 2,
        'no-empty-character-class': 2,
        'no-empty-pattern': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-semi': 2,
        'no-fallthrough': 2,
        'no-func-assign': 2,
        'no-global-assign': 2,
        'no-import-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-misleading-character-class': 2,
        'no-mixed-spaces-and-tabs': 2,
        'no-new-symbol': 2,
        'no-obj-calls': 2,
        'no-octal': 2,
        'no-prototype-builtins': 2,
        'no-redeclare': 2,
        'no-regex-spaces': 2,
        'no-self-assign': 2,
        'no-setter-return': 2,
        'no-shadow-restricted-names': 2,
        'no-sparse-arrays': 2,
        'no-this-before-super': 2,
        'no-undef': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 2,
        'no-unused-labels': 2,
        'no-unused-vars': 'off',
        'no-useless-catch': 2,
        'no-useless-escape': 2,
        'no-with': 2,
        'prefer-const': 2,
        'quotes': [
            2,
            'single',
            {
                'avoidEscape': true
            }
        ],
        'require-await': 2,
        'require-yield': 2,
        'semi': 2,
        'sort-imports': [
            2,
            {
                'ignoreCase': true,
                'allowSeparatedGroups': true
            }
        ],
        'space-infix-ops': 2,
        'use-isnan': 2,
        'valid-typeof': 2
    }
};
