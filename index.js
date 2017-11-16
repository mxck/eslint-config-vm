module.exports = {
    extends: ['airbnb', 'prettier', 'prettier/react'],
    rules: {
        'arrow-body-style': [0, 'as-needed'],
        'class-methods-use-this': 'off',
        'default-case': 'off',
        indent: [
            2,
            4,
            {
                SwitchCase: 1,
            },
        ],
        'no-continue': 'off',
        'no-plusplus': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': ['error', { variables: false }],
        'react/forbid-prop-types': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'react/no-typos': 'off', // Disabled until fixed https://github.com/yannickcr/eslint-plugin-react/issues/1389
        'react/require-default-props': 'off',
    },
};
