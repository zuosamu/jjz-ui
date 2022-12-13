---
title: Label
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/label
  title: Label
mobile: false
---

# Label

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { Label } from '@jjz-ui/mobile';

const labelList = [
  {
    id: 1,
    content: 'lalala',
    markSource: 'ai',
  },
  {
    id: 2,
    content: 'nihao',
  },
  {
    id: 3,
    content: '太阳',
  },
  {
    id: 4,
    content: '阳光',
  },
  {
    id: 5,
    content: 'fafff',
    markSource: 'ai',
  },
  {
    id: 6,
    content: 'nihao',
    markSource: 'ai',
  },
  {
    id: 7,
    content: '太阳',
  },
  {
    id: 8,
    content: '阳光',
  },
  {
    id: 9,
    content: 'fafff',
  },
  {
    id: 10,
    content: 'nihao',
  },
  {
    id: 11,
    content: '太阳',
  },
  {
    id: 12,
    content: '阳光',
  },
  {
    id: 13,
    content: 'fafff',
  },
];

export default () => {
  return (
    <div>
      <Label labelList={labelList} />
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" defaultShowCode="true" />
