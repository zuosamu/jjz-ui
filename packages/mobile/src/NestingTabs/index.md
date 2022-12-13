---
title: NestingTabs
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/NestingTabs
  title: NestingTabs
mobile: false
---

# NestingTabs

```tsx
import React from 'react';
import { NestingTabs } from '@jjz-ui/mobile';
export default () => {
  const tabsData = [
    {
      content: '全部',
      value: 0,
      nesting: [
        { name: '全部', value: '' },
        { name: '服务费激励', value: 0 },
      ],
    },
    {
      content: '推广激励',
      value: 1,
      nesting: [
        { name: '全部', value: '' },
        { name: '服务费激励', value: 0 },
        { name: '推广有奖', value: 1 },
      ],
    },
    {
      content: '客户激励',
      value: 2,
      nesting: [
        { name: '全部', value: '' },
        { name: '预约有礼', value: 10 },
        { name: '晒单有礼', value: 15 },
      ],
    },
  ];
  const tabsCH = (ind: string) => {
    console.log('index---', ind);
  };
  const secondCH = (val: string) => {
    console.log('val---', val);
  };
  return (
    <div>
      <NestingTabs tabsData={tabsData} tabsChange={tabsCH} NestingChange={secondCH} />
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
