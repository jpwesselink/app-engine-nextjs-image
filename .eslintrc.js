module.exports = {
  extends: ['prettier/@typescript-eslint', 'airbnb-typescript-prettier'],
  plugins: ['import', 'unused-imports'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js']
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    }
  },
  rules: {
    camelcase: 'warn',
    // // camelcase: [
    // //   'error',
    // //   {
    // //     allow: [
    // //       '_',
    // //       '_gt',
    // //       '_lt',
    // //       '_eq',
    // //       '_neq',
    // //       '_not',
    // //       '_in',
    // //       '_contains',
    // //       '_with',
    // //       '_every',
    // //       '_none',
    // //       '_some',
    // //       '_Insert',
    // //       '_On',
    // //       'user_',
    // //       'delete_',
    // //       '_uuid',
    // //       'has_',
    // //       'update_',
    // //       'insert_',
    // //       'organisation_',
    // //       'email_verified',
    // //       'verify_email',
    // //       'user_id',
    // //       'phone_number',
    // //       'phone_verified',
    // //       'given_name',
    // //       'family_name',
    // //       'user_metadata',
    // //       'app_metadata',
    // //       'site_name',
    // //       'icon_emoji',
    // //       'unfurl_links',
    // //       'link_names',
    // //       'organisation_admin',
    // //       'otis_admin',
    // //       'otis_user',
    // //       'questionnaire_admin',
    // //       'questionnaire_user'
    // //     ]
    // //   }
    // ],
    'no-shadow': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    'import/no-unresolved': 'error',
    'consistent-return': 'off',
    'import/no-cycle': 'warn',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index'
        ]
      }
    ],
    'no-underscore-dangle': ['error', { allow: ['_apolloClient', '_store'] }],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'unused-imports/no-unused-imports-ts': 'error',
    'unused-imports/no-unused-vars-ts': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: false,
        singleQuote: true,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        trailingComma: 'none',
        arrowParens: 'avoid'
      }
    ],
    'react/jsx-sort-props': 'error',
    'react/sort-prop-types': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/sort-comp': 'error',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state', 'draft', 'res'] }
    ]
  }
};
