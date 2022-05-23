import path from 'path';

export default [
  {
    find: '@components',
    replacement: path.resolve(__dirname, '/src/components'),
  },
  {
    find: '@contexts',
    replacement: path.resolve(__dirname, '/src/contexts'),
  },
  {
    find: '@hooks',
    replacement: path.resolve(__dirname, '/src/hooks'),
  },
  {
    find: '@layout',
    replacement: path.resolve(__dirname, '/src/layout'),
  },
  {
    find: '@modules',
    replacement: path.resolve(__dirname, '/src/modules'),
  },
  {
    find: '@routes',
    replacement: path.resolve(__dirname, '/src/routes'),
  },
  {
    find: '@services',
    replacement: path.resolve(__dirname, '/src/services'),
  },
  {
    find: '@styles',
    replacement: path.resolve(__dirname, '/src/styles'),
  },
  {
    find: '@utils',
    replacement: path.resolve(__dirname, '/src/utils'),
  },
  {
    find: '@root',
    replacement: path.resolve(__dirname, '/src'),
  },
]