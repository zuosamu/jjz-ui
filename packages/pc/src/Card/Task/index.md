---
title: Task
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/Task
  title: Task
---

## DEMO

慧选智保待完成任务卡片。

```tsx
import React from 'react';
import { Task } from '@jjz-ui/pc';

export default () => {
  return (
    <div style={{ backgroundColor: '#e9e7e7', padding: '10px' }}>
      <Task
        title="任务"
        content="待办任务待办任务待办任务待办任务待办任务待办任务待办任务"
        buttons={[{ text: '按钮一' }, { text: '按钮二' }]}
      />
      <hr />
      <Task
        title="任务"
        content="橘色主题"
        buttons={[{ text: '按钮一' }, { text: '按钮二' }]}
        theme="orange"
      />
      <hr />
      <Task
        title="任务"
        buttons={[{ text: '普 通' }, { text: '禁 用', props: { disabled: true } }]}
        content={
          <div className="main" style={{ color: 'red' }}>
            自定义卡片内容渲染
          </div>
        }
      />
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
