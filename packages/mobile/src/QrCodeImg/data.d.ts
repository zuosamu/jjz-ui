/*
 * @Author: 起德红
 * @Date: 2022-02-16 14:00:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-16 16:40:33
 * @FilePath: \jjz\packages\jjz-ui\src\QrCodeImg\data.d.ts
 */

export interface IQrCodeImg {
  /**
   * @description 需要转成二维码的地址
   * @default ''
   */
  url: string;
  /**
   * @description 背景颜色
   * @default #FFFFFF
   */
  bgColor?: string;
  /**
   * @description 二维码颜色
   * @default #000000
   */
  fgColor?: string;
  /**
   * @description 是否有边框
   * @default false
   */
  includeMargin?: boolean;
  /**
   * @description 是否下载
   * @default true
   */
  downBool?: boolean;
  /**
   * @description 大小
   * @default 128
   */
  size?: number;
  /**
   * @description 下载文件名称
   * @default 当前时间戳
   */
  fileName: string;
}
