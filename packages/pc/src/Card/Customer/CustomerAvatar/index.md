---
title: CustomerAvatar
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/Customer
  title: Customer
mobile: false
---

## DEMO

客户头像，用于客户列表页。

```tsx
import React from 'react';
import { CustomerAvatar } from '@jjz-ui/pc';

export default () => {
  return (
    <div>
      <p>默认男性头像</p>
      <CustomerAvatar />
      <p>女性头像</p>
      <CustomerAvatar sex="female" />
      <p>带不同位置的icon</p>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <CustomerAvatar withCloseIcon={true} closeIconPosition="right-start" />
        <CustomerAvatar withCloseIcon={true} closeIconPosition="left-end" />
        <CustomerAvatar withCloseIcon={true} closeIconPosition="left-start" />
        <CustomerAvatar withCloseIcon={true} closeIconPosition="right-end" />
      </div>
      <br />
      <p>点击事件</p>
      <CustomerAvatar
        withCloseIcon={true}
        closeIconPosition="right-start"
        onAvatarClick={() => alert('点击头像')}
        onCloseClick={() => alert('点击关闭')}
      />
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" defaultShowCode="true" />
