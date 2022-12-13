/*
 * @Author: 左森君
 * @Date: 2022-01-05 17:35:36
 * @LastEditors: 左森君
 * @LastEditTime: 2022-01-05 17:44:39
 * @FilePath: /jjzui/packages/jjz-ui/typing.d.ts
 */
declare module '*.png' {
  const resource: 'string';
  export default resource;
}
declare module '*.svg' {
  const resource: 'string';
  export default resource;
}
declare module '*.less' {
  const resource: { [key: string]: string };
  export default resource;
}
