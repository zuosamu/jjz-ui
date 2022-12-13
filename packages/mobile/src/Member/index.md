---
title: Member
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/member
  title: Member
---

# Member

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { Avatar, Member } from '@jjz-ui/mobile';
import Icon from 'public/img/boy.png';
export default () => {
  return (
    <div>
      <Divider contentPosition="left">普通用法</Divider>
      <Member prefix="一行字" suffix="另一行字">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Avatar src={Icon}>男孩</Avatar>
        ))}
      </Member>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
