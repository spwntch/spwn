/// <reference types='vitest' />
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react-swc';
import { join } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/packages/react-ui',
  plugins: [
    react(),
    nxViteTsPaths(),
    libInjectCss(),
    dts({
      entryRoot: 'src',
      tsconfigPath: join(__dirname, 'tsconfig.lib.json'),
      exclude: [
        '**/*.stories.tsx',
        '**/*.specs.ts',
        '**/storybook-decorators.tsx',
      ],
    }),
  ],
  build: {
    outDir: './dist',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    lib: {
      entry: {
        index: 'src/index.ts',
        accordion: 'src/lib/components/ui/accordion/accordion.tsx',
      },
      name: 'react-ui',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        '@radix-ui/react-accordion',
        '@radix-ui/react-avatar',
        '@radix-ui/react-dialog',
        '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-menubar',
        '@radix-ui/react-navigation-menu',
        '@radix-ui/react-slot',
        'class-variance-authority',
        'clsx',
        'embla-carousel-react',
        'lucide-react',
        'react',
        'react-dom',
        'react/jsx-runtime',
        'tailwind-merge',
        'tailwind-animate',
      ],
    },
  },
});
