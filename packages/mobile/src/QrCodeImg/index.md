---
title: QrCodeImg
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/QrCodeImg
  title: QrCodeImg
mobile: false
---

# QrCodeImg

```tsx
import React from 'react';
import { QrCodeImg } from '@jjz-ui/mobile';
import './example.less';
export default () => {
  return (
    <div className="example">
      <div style={{ marginTop: '25px' }}>
        <QrCodeImg url="www.baidu.com" />
      </div>
      <div style={{ marginTop: '25px' }}>
        <QrCodeImg url="www.baidu.com" downBool={false} bgColor={'red'} />
      </div>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
