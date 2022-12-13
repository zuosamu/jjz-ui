import { registerValidateFormats, registerValidateLocale } from '@formily/core';
console.log('注入默认校验');
registerValidateFormats({
  wechat: /^[a-zA-Z][a-zA-Z0-9_-]{5,19}$/,
  p52: /^[1-9]\d{0,4}$/,
  fixedLine: /^[0-9][\d-]{7,19}$/,
  post: /^[1-9]\d{5}(?!\d)$/,
  qq: /^(\+?[1-9]\d{3,13}|0)$/,
  phone: /^1\d{10}$/,
  trim: /^\S*\S$/,
  cnName:
    /^[\u4e00-\u9fa5\uF900-\uFA2D][\u4e00-\u9fa5\uF900-\uFA2D·]*[\u4e00-\u9fa5\uF900-\uFA2D]$/,
  pi: /^[1-9]\d*$/,
  job: /^[a-zA-Z\u4e00-\u9fa5\uF900-\uFA2D]+$/,
});
registerValidateLocale({
  'zh-CN': {
    wechat: '请输入正确微信号',
    p52: '请输入5位正数,最多两位小数',
    fixedLine: '请输入正确固定电话',
    post: '请输入正确邮编',
    trim: '该字段开始或结束不能为空格',
    url: '该字段输入格式不正确',
    cnName: '请输入有效的客户名称',
    pi: '请输入正整数',
    job: '请输入中、英文字符，不能出现数字、特殊字段、空格',
  },
});
export const init = () => {};
