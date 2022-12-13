---
title: IphonePreview
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/card
  title: IphonePreview
mobile: false
---

# Demo

```tsx
import React from 'react';
import { IphonePreview } from '@jjz-ui/pc';

const HsearchData = [
  {
    id: 1,
    title: '日本选手平野步梦获得单板滑雪男子U型场地技巧冠军',
  },
  {
    id: 2,
    title: '德国队获得雪橇团体接力冠军',
  },
  {
    id: 3,
    title: '单板滑雪男子障碍追逐：“新老之争”落下帷幕 奥地利名将黑默勒收获金牌',
  },
  {
    id: 4,
    title: '荷兰选手伊雷妮·斯豪滕获得速度滑冰女子5000米冠军',
  },
  {
    id: 5,
    title: '美国队获得自由式滑雪空中技巧混合团体冠军',
  },
];
export default () => {
  return (
    <div>
      <IphonePreview width={287}>
        <div style={{ position: 'relative', padding: '10px 24px' }}>
          <div style={{ 'font-weight': 'bold', 'line-height': '24px', margin: '10px 0' }}>
            热搜推荐
          </div>
        </div>
      </IphonePreview>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
