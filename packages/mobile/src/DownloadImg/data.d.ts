/*
 * @Author: 起德红
 * @Date: 2022-02-15 11:16:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-15 14:35:02
 * @FilePath: \jjz\packages\jjz-ui\src\DownloadImg\data.d.ts
 */

export interface IDownloadImg {
  /**
   * @description 图片显示的地址
   * @default ''
   */
  src: string;
  /**
   * @description 下载按钮文字
   * @default download
   */
  txt: string;
  /**
   * @description 下载图片资源名称
   * @default 测试
   */
  sourceName: string;
  /**
   * @description 下载图片格式
   * @default image/png
   */
  mimeType: string;
}
