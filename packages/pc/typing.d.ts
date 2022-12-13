/*
 * @Author: 左森君
 * @Date: 2022-01-05 17:53:39
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-14 13:53:02
 * @FilePath: \jjz\packages\hxuan-ui\typing.d.ts
 */

export namespace HXZB {
  /**
   * 卡片按行渲染label、value对需要的属性。
   */
  export interface DataRenderProps {
    /**
     * 数组每个元素对应一行，每行由label和value组成。
     * 可选字段render是自定义一行数据方法的渲染函数。
     * 其中，传入给render方法的displayValue字段的是已经处理过的值，无需手动替换为占位符。
     */
    data: Array<{
      label: string;
      value: any;
      render?: (label: string, rawValue: any, displayValue: string) => React.ReactNode;
    }>;
    /**
     * 空数据的占位符。默认为单个横杠"-"。
     * 默认情况下，传入data的value字段中为null、undefined、NaN和空数组的情况，value会显示为占位符。
     * 能直接调用toString的类型，会使用该方法转化为字符串。
     * 对象则使用JSON.stringify进行序列化。
     */
    placeholder?: string;
    /**
     * 可传入自定义函数用于对传入的value进行处理。
     * 该传入的函数会替换组件默认的将数据转化为占位符的行为。
     */
    dataValueHandler?: (value: any, placeholder: string) => string;
    /**
     * 由data渲染的内容超出一行是否显示为省略号。
     */
    overflowEllipsis?: boolean;
  }
}
