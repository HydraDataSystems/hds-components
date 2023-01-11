import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';
import * as packageJSON from './package.json';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ 'jsxRuntime': 'classic' }), tsConfigPaths(), dts({ include:['src/**/*']})],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      name: 'HdsComponents',
      entry: resolve('src', 'index.ts'),
      formats: ['es', 'umd'],
      fileName: (ext) => `index.${ext}.js`,
      // name: 'GlobalName' <-- for UMD 
    },
    rollupOptions: {
      external: [...Object.keys(packageJSON.peerDependencies), ...Object.keys(packageJSON.dependencies)]
    },
    //target: 'esnext',
    sourcemap: true
  }
})
