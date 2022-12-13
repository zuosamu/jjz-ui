---
title: DownloadImg
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/downloadImg
  title: DownloadImg
mobile: false
---

# DownloadImg

```tsx
import React from 'react';
import { DownloadImg } from '@jjz-ui/mobile';
import PUB_PNG from 'public/img/girl.png';
import PUB1_PNG from 'public/img/boy.png';
import PUB2_PNG from 'public/img/fire.png';
export default () => {
  const defaults = [
    { src: PUB_PNG, txt: '下载', sourceName: new Date().getTime() },
    { src: PUB1_PNG, txt: '下载', sourceName: new Date().getTime() },
    { src: PUB2_PNG, txt: '下载', sourceName: new Date().getTime() },
  ];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '700px',
      }}
    >
      {defaults.map((item) => {
        return (
          <div style={{ width: '80px', border: '1px solid #ccc' }}>
            <DownloadImg {...item} />
          </div>
        );
      })}
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
