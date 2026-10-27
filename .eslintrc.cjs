module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  // ✅ IMPORTANT: TypeScript parser
  parser: '@typescript-eslint/parser',

  extends: [
    'eslint:recommended',

    // ✅ TypeScript rules
    'plugin:@typescript-eslint/recommended',

    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],

  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'vite.config.js'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  plugins: [
    'react',
    'react-refresh',
    'react-hooks',
    'prettier',

    // ✅ TypeScript plugin
    '@typescript-eslint',
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    // React Refresh
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // ❌ Disable JS rule
    'no-unused-vars': 'off',

    // ✅ Use TS version instead
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    'no-console': 'warn',
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',

    // React Rules
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',

    // React Hooks Rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
