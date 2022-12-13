---
title: TreeList
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/treeList
  title: TreeList
mobile: false
---

# TreeList

```tsx
import React from 'react';
import { TreeList } from '@jjz-ui/mobile';

const dataList = [
  {
    key: 111,
    title: '四川',
    children: [
      {
        key: 112,
        title: '成都',
        state: '未开通',
      },
      {
        key: 113,
        title: '绵阳',
        state: '已开通',
      },
    ],
  },
  {
    key: 221,
    title: '陕西',
    children: [
      {
        key: 222,
        title: '西安',
        state: '未开通',
      },
      {
        key: 155,
        title: '成都',
        state: '未开通',
      },
    ],
  },
];

export default () => {
  return <TreeList treeData={dataList} defaultExpandAll={true} />;
};
```

<API></API>

## 源码

<code src="./index.tsx" defaultShowCode="true" />
