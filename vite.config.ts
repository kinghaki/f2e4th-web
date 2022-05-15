/* 當以命令行方式運行 vite 時，
Vite 會自動解析 項目根目錄 下名為 vite.config.js 的文件。 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
