---
title: Title
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/title
  title: Title
---

# Title

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { Title } from '@jjz-ui/mobile';
import Icon from '@jjz-ui/icon';
export default () => {
  return (
    <div>
      <Divider contentPosition="left">普通标题</Divider>
      <Title title="普通标题" />
      <Divider contentPosition="left">加长标题</Divider>
      <Title title="加长标题加长标题加长标题加长标题加长标题" />
      <Divider contentPosition="left">自定义标题</Divider>
      <Title title={<i>自定义标题</i>} />
      <Divider contentPosition="left">扩展用法</Divider>
      <Title
        prefix={<Icon type="icon-huize-book" />}
        title={<b>扩展用法扩展用法扩展用法扩展用法扩展用法</b>}
        rightContent={<div style={{ padding: '2px', background: '#999' }}>操作</div>}
      />
    </div>
  );
};
```

- Icon 与 title 之间的距离是默认是 6px

<API></API>

## 源码

<code src="./index.tsx" />
