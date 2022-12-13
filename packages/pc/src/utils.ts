/*
 * @Author: 陈立
 * @Date: 2022-02-24 10:49:38
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-14 13:51:43
 * @FilePath: \jjz\packages\hxuan-ui\src\utils.ts
 */

export const hanldeDataValue = (value: any, placeholder: string): string => {
  if (value === null || Number.isNaN(value)) return placeholder;
  if (Array.isArray(value) && value.length === 0) return placeholder;
  if (typeof value.toString === 'function') return value.toString();
  switch (typeof value) {
    case 'string':
      return value;
    case 'undefined':
      return placeholder;
    case 'number':
    case 'bigint':
    case 'symbol':
    case 'function':
    case 'boolean':
      return value.toString();
    case 'object':
      return JSON.stringify(value);
  }
};
