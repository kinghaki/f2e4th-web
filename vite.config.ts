/* 當以命令行方式運行 vite 時，
Vite 會自動解析 項目根目錄 下名為 vite.config.js 的文件。 */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// 如果编辑器提示 path 模块找不到，则可以安装一下 @types/node -> npm i @types/node -D
import { resolve } from 'path';

// https://vitejs.dev/config/
// 因為Vite 本身附帶Typescript 類型，所以你可以通過IDE 和jsdoc 的配合來實現智能提示：
// 另外你可以使用 defineConfig 工具函數，這樣不用jsdoc 註解也可以獲取類型提示：
export default ({ mode }) => {
  // console.log(mode);
  const env = loadEnv(mode, process.cwd(), ''); // 設置第三個參數為 ''，加載所有環境變量，而不管是否有 VITE_ 前綴
  // console.log(env);

  return defineConfig({
    plugins: [vue()],
    assetsInclude: ['**/*.png'],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },

    server: {
      port: 9453,
      open: true, // 自動打開瀏覽器
      hmr: true // 當頁面更改會自動刷新，預設為true
    // proxy
    }
  });
};
