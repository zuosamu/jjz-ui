/*
 * @Author: 左森君
 * @Date: 2022-01-05 15:48:42
 * @LastEditors: 左森君
 * @LastEditTime: 2022-01-05 17:45:29
 * @FilePath: /jjzui/.umirc.ts
 */
import { defineConfig } from 'dumi';
import { resolve } from 'path';
export default defineConfig({
  title: 'jjz-ui',
  alias: {
    public: resolve(__dirname, './public'),
  },
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  // more config: https://d.umijs.org/config
});