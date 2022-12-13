---
title: ExpandList
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/expandList
  title: ExpandList
mobile: false
---

# ExpandList

```tsx
import React from 'react';
import { ExpandList } from '@jjz-ui/mobile';

const dataSource = [
  {
    id: 1111,
    name: '李丽',
    children: [],
  },
  {
    id: 2222,
    name: '阿伟',
    children: [],
  },
];

const childrenSource = [
  {
    id: 3333,
    name: '李丽',
    isChildren: 1,
  },
  {
    id: 4444,
    name: '阿伟',
    isChildren: 1,
  },
];

const columnsConf = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: '姓名',
    key: 'name',
  },
];

export default () => {
  return (
    <ExpandList dataSource={dataSource} childrenSource={childrenSource} columnsConf={columnsConf} />
  );
};
```

<API></API>

## 树形数据展开

<code src="./index.tsx" defaultShowCode="true" />
