/*
 * @Author: 起德红
 * @Date: 2022-02-14 17:40:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-15 10:42:56
 * @FilePath: \jjz\packages\jjz-ui\src\ToolCard\data.d.ts
 */

//组件props参数
export interface IToolCard {
  /**
   * @description 展示的图片或者图标
   * @default 1
   */
  src: string;
  /**
   * @description 卡片展示的内容
   * @default *****
   */
  description: string;
  /**
   * @description 卡片展示的标题
   * @default *****
   */
  title: string;
  /**
   * @description 是否显示底部按钮
   * @default false
   */
  showBtn?: boolean;
  /**
   * @description 底部按钮操作,数组类型
   * @default []
   */
  btns: IBottomBtn[];
}

//最下面的操作按钮
export interface IBottomBtn {
  title: string;
  func: Function;
}
