import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import federation from '@originjs/vite-plugin-federation'

const root = process.cwd()

function pathResolve(dir) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({    
  base: 'http://spa-layout.test',
  plugins: [
    vue(),
    federation({
        name: 'layout-app',
        filename: 'remoteEntry.js',
        exposes: {
            './permission': './src/permission.js',
            './store': './src/store/index.js',
            './router': './src/router/index.js',
            './Layout': './src/layout/Layout.vue',
            './App': './src/App.vue',
        },
        shared: ['vue', 'element-plus', 'pinia', 'vue-router']
    })
  ],
  build: {
    target: "esnext",
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.less', '.css'],
    alias: [
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
})
