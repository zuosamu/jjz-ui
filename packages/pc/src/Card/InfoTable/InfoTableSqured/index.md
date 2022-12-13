---
title: InfoTableSqured
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/InfoTable
  title: InfoTable
---

## DEMO

无圆角的数据展示表格，带分割线。

```tsx
const data = [
  {
    label: '姓名',
    value: '张三',
  },
  {
    label: '年龄',
    value: 20,
  },
  {
    label: '保单数量',
    value: null,
  },
  {
    label: '地址',
    value: '北京市 东城区',
  },
  {
    label: '详细地址',
    value:
      '长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试长文本测试',
  },
  {
    label: '对象字段',
    value: [1, 2, 3],
  },
  {
    label: '函数',
    value: (arg) => console.log(arg),
  },
  {
    label: '自定义渲染',
    value: 233,
    render: (label, value) => (
      <div className="row">
        <span className="label">{label}</span>
        <span className="value" style={{ color: 'red' }}>
          {value * 2}
        </span>
      </div>
    ),
  },
];

import React from 'react';
import { InfoTableSqured } from '@jjz-ui/pc';

export default () => {
  return (
    <>
      <InfoTableSqured data={data} overflowEllipsis />
      <InfoTableSqured
        data={data}
        moreButtonRender={(showMore) => {
          return <div>自定义点击展开更多按钮（点击{showMore ? '收起' : '展开'}）</div>;
        }}
      />
    </>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
