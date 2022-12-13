---
title: ClickActive
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/clickactive
  title: ClickActive
---

# ClickActive

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { ClickActive } from '@jjz-ui/mobile';
export default () => {
  return (
    <div>
      <Divider contentPosition="left">点击下方方框体验</Divider>
      <div
        style={{ width: '100px', height: '100px', border: '1px solid #ccc', position: 'relative' }}
      >
        <ClickActive />
      </div>
      <Divider contentPosition="left">改变颜色--点击下方方框体验</Divider>
      <div
        style={{ width: '100px', height: '100px', border: '1px solid #ccc', position: 'relative' }}
      >
        <ClickActive color="red" />
      </div>
      <Divider contentPosition="left">中心--点击下方方框体验</Divider>
      <div
        style={{ width: '100px', height: '100px', border: '1px solid #ccc', position: 'relative' }}
      >
        <ClickActive centerRipple />
      </div>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
