---
title: InfoTableRound
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/InfoTable
  title: InfoTable
---

## DEMO

慧选智保展示信息的表格。通常连用多个，中间隔开。

```tsx
import React from 'react';
import { InfoTableRound } from '@jjz-ui/pc';

const data1 = [
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
];

const data2 = [
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

export default () => {
  return (
    <div style={{ backgroundColor: '#e9e7e7', padding: '10px' }}>
      <InfoTableRound data={data1} />
      <div style={{ height: '10px' }} />
      <InfoTableRound data={data2} />
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
