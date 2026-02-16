//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import prettier from 'eslint-config-prettier'

export default [
  ...tanstackConfig,
  prettier,
  {
    rules: {
      'sort-imports': 'off',
      '@typescript-eslint/array-type': 'off',
      'import/consistent-type-specifier-style': 'off',
    },
  },
]
