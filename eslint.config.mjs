import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'
import testingLibrary from 'eslint-plugin-testing-library'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    name: 'site/rules',
    rules: {
      // Unused code is a review smell, not a runtime problem - keep it out of the tree.
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      // `verbatimModuleSyntax` is on in tsconfig, so type-only imports must be explicit.
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      // Diagnostics belong in tooling, not in shipped bundles.
      'no-console': ['error', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'smart'],
      'prefer-const': 'error',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'framer-motion',
              message: "Use 'motion/react' - see .agents/05-animation-system.md.",
            },
            {
              name: 'gsap',
              message: 'Load GSAP through loadGsap() from @/lib/motion/gsap - see ADR-0005.',
            },
          ],
          patterns: [
            {
              group: ['../../*'],
              message: "Reach across folders with the '@/*' alias instead of deep relative paths.",
            },
          ],
        },
      ],
    },
  },

  {
    // The one module allowed to import GSAP: it owns the dynamic import and the
    // plugin registration, which is exactly what the rule above protects.
    name: 'site/gsap-loader',
    files: ['src/lib/motion/gsap.ts'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },

  {
    name: 'site/tests',
    files: ['**/*.{test,spec}.{ts,tsx}'],
    ...testingLibrary.configs['flat/react'],
    rules: {
      ...testingLibrary.configs['flat/react'].rules,
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  {
    // Node CLI tools for asset preparation. Printing to stdout is their whole purpose,
    // and they never ship to the browser.
    name: 'site/scripts',
    files: ['scripts/**/*.mjs'],
    rules: {
      'no-console': 'off',
    },
  },

  prettier,

  globalIgnores(['.next/**', 'out/**', 'build/**', 'coverage/**', 'next-env.d.ts']),
])

export default eslintConfig
