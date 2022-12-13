---
title: ToolCard
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/toolCard
  title: ToolCard
mobile: false
---

# ToolCard

```tsx
import React from 'react';
import { ToolCard } from '@jjz-ui/mobile';
export default () => {
  const defaultData = [
    {
      title: '重疾险',
      description: '选择疾病快捷查询疾病介绍与核保建议,预先核保无需担心保险公司留底',
    },
    {
      title: '重疾险',
      description: '选择疾病快捷查询疾病介绍与核保建议,预先核保无需担心保险公司留底',
      showBtn: true,
      btns: [
        {
          title: '查看详情',
          func: () => {
            alert('hello!world');
          },
        },
        {
          title: '你好呀',
          func: () => {
            alert('hello! world 123');
          },
        },
      ],
    },
  ];
  return (
    <div>
      {defaultData.map((item) => {
        return <ToolCard {...item} />;
      })}
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
