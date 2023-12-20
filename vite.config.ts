import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Layouts from 'vite-plugin-vue-layouts'
import VueDevTools from 'vite-plugin-vue-devtools'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueDevTools(),
    vue(),
    vueJsx(),
    Pages({
      dirs: [
        {
          filePatern: '**/page.*',
          dir: 'src/app',
          baseRoute: '',
          filePattern: '**/page.vue'
        }
      ],
      exclude: ['**/components/**'],
      importMode: 'async',
      extensions: ['vue', 'tsx'],
      onRoutesGenerated(routes) {
        return routes.map((item) => {
          return {
            ...item,
            path: item.path.replace(/\/page$/, '')
          }
        })
      }
    }),
    Components({ resolvers: [NaiveUiResolver(), IconsResolver()] }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: ['vue', 'vue-router', 'vue-i18n', 'vue/macros', '@vueuse/head', '@vueuse/core', 
      {
        from: "luxon",
        imports: ['DateTime']
      }],
      dirs: ['src/composables/**/*', 'src/store', 'src/core', 'src/plugins'],
      vueTemplate: true,
      eslintrc: {
        enabled: true
      }
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'default.layout'
    }),
    Icons({
      // experimental
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
