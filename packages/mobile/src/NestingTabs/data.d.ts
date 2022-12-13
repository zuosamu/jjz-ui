/*
 * @Author: 起德红
 * @Date: 2022-02-18 16:23:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-18 18:24:38
 * @FilePath: \jjz\packages\jjz-ui\src\NestingTabs\data.d.ts
 */

export interface INestingTabs {
  /**
   * @description data
   * @default tabs类型
   */
  tabsData: ITabs[];
  /**
   * @description 第一层activeindex
   * @default 1
   */
  defaultActiveTab: string;
  /**
   * @description 第一层tabs改变
   * @default funtion
   */
  tabsChange: (activeKey: string) => void | undefined;
  /**
   * @description 第二层tabs改变
   * @default funtion
   */
  NestingChange: (val: string) => string | undefined;
}

export interface ITwoTabs {
  name: string;
  value: string;
}
export interface ITabs {
  content: string;
  value: number | string;
  nesting: ITwoTabs[];
  [key: string]: any;
}
