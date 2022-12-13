---
title: Contact
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/Contact
  title: Contact
---

## DEMO

联系方式卡片。注意在 UI 设计上，部分字体的 font-family 应设置为粗体，为了可拓展性这里没有设置。使用时可以用 .blod 选择器选择这些应为粗体的内容设置其字体。

```tsx
import React from 'react';
import { Contact } from '@jjz-ui/pc';

const data = [
  {
    label: '姓名',
    value: '张三',
  },
  {
    label: '备注',
    value:
      '常用联系方式常用联系方式常用联系方式常用联系方式常用联系方式常用联系方式常用联系方式常用联系方式常用联系方式常用联系方式常用联系方式',
  },
];

export default () => {
  return (
    <div style={{ backgroundColor: '#e9e7e7', padding: '10px' }}>
      <Contact contactType="phone" contactCode="17546845134" data={data} />
      <hr />
      <Contact
        contactType="QQ"
        contactTypeText="自定义类型文本"
        contactCode="123456789"
        encrypt
        data={data}
      />
      <hr />
      <Contact
        contactType="other"
        contactTypeText="无默认图标，文本不省略"
        contactCode="123456789"
        encrypt
        overflowEllipsis={false}
        data={data}
      />
      <hr />
      <Contact
        contactType="wechat"
        contactCode="qwe12345"
        encrypt
        data={data}
        footer={'自定义footer'}
      />
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
