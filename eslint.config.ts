// @ts-check
import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import angular from 'angular-eslint'
import * as format from 'eslint-plugin-format'
import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'

export default defineConfig(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    plugins: {
      format,
    },
    rules: {
      'format/prettier': [
        'error',
        { parser: 'typescript', tabWidth: 2, singleQuote: true, semi: false },
      ],
    },
    processor: angular.processInlineTemplates,
  },
  {
    files: ['**/*.html'],
    // Exclude inline templates from the standalone HTML formatting
    // to avoid conflicts with the TS formatter which already handles them.
    ignores: ['**/*.ts/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    plugins: {
      format,
    },
    rules: {
      'format/prettier': ['error', { parser: 'angular', tabWidth: 2 }],
    },
  },
  {
    files: ['**/*.css'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/prettier': ['error', { parser: 'css', tabWidth: 2 }],
    },
  },
  {
    files: ['**/*.toml'],
    languageOptions: {
      parser: format.parserPlain,
    },
    plugins: {
      format,
    },
    rules: {
      'format/dprint': [
        'error',
        { language: 'toml', languageOptions: { indentWidth: 2 } },
      ],
    },
  },
  {
    plugins: {
      'better-tailwindcss': eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs['recommended-warn'].rules,
      ...eslintPluginBetterTailwindcss.configs['recommended-error'].rules,
      'better-tailwindcss/enforce-consistent-line-wrapping': [
        'warn',
        { printWidth: 100 },
      ],
    },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/styles.css',
      },
    },
  },
)
