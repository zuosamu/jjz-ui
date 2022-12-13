---
title: Avatar
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/avatar
  title: Avatar
---

# Avatar

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { Avatar } from '@jjz-ui/mobile';
import Icon from 'public/img/boy.png';
export default () => {
  return (
    <div>
      <Divider contentPosition="left">普通用法</Divider>
      <Avatar src={Icon}>男孩</Avatar>
      <Divider contentPosition="left">扩展描述</Divider>
      <Avatar src={Icon}>
        <div>
          男孩
          <br />
          大陆未来守护者
        </div>
      </Avatar>
      <Divider contentPosition="left">横向排列</Divider>
      <Avatar src={Icon} spaceProps={{ direction: 'horizontal', block: true }}>
        <div>
          男孩
          <br />
          大陆未来守护者
        </div>
      </Avatar>
      <Divider contentPosition="left">横向排列</Divider>
      <Avatar src={Icon} spaceProps={{ direction: 'horizontal', block: true, justify: 'between' }}>
        <div>
          男孩
          <br />
          大陆未来守护者
        </div>
      </Avatar>
    </div>
  );
};
```

<API></API>

## 如果你想魔改,源码拿去吧！

<code src="./index.tsx" />
