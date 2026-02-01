import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: globals.node, // ✅ Node.js globals
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettier, // ✅ ESLint + Prettier conflict fix
    ],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-console': 'war', 
      'no-console': 'warn',
      'no-unused-expressions': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',// backend এ console.log OK
    },
  }
);
