---
title: Avatar
nav:
  path: /mobile
  title: 移动端
group:
  path: /mobile/UserInfo
  title: UserInfo
---

# Avatar

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { UserInfo } from '@jjz-ui/mobile';
import Icon from 'public/img/boy.png';
export default () => {
  return (
    <div>
      <Divider contentPosition="left">普通用法</Divider>
      <UserInfo user={{ avatar: '' }} customerDetail={{ a: 1 }} />
    </div>
  );
};
```

<API></API>

## 如果你想魔改,源码拿去吧！

<code src="./index.tsx" />
