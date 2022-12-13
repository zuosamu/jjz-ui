---
title: CustomerCard
nav:
  path: /hxuan-ui
  title: Card
  order: 1
group:
  path: /hxuan-ui/Customer
  title: Customer
---

## DEMO

慧选智保用户卡片。

```tsx
import React from 'react';
import { CustomerCard } from '@jjz-ui/pc';

export default () => {
  return (
    <div>
      <CustomerCard name="用户名" />
      <hr />
      <CustomerCard name="用户名" tags={['AB', '测试', '达尔文']} />
      <hr />
      <CustomerCard
        name="用户名"
        sex="male"
        age={26}
        tags={['AB', '测试', '达尔文', 'CCCCCC', '溢出隐藏']}
      />
      <hr />
      <CustomerCard
        name="用户名"
        tags={['AB', '测试', '达尔文']}
        onClick={() => alert('点击上部')}
        guestSource={{
          time: '2022-2-20 14:20',
          title: '我的名片',
          onClick: () => alert('跳转我的名片'),
        }}
      />
      <hr />
      <CustomerCard
        name="长字段省略长字段省略长字段省略长字段省略长字段省略"
        sex="male"
        age={26}
        tags={['AB', '测试', '达尔文']}
        onClick={() => alert('点击上部')}
        guestSource={{
          time: '2022-2-20 14:20',
          title: '崔女士家庭组合计划',
        }}
      />
      <hr />
      <CustomerCard
        name="长字段省略长字段省略长字段省略长字段省略长字段省略"
        customCardTop={<div>自定义上部渲染</div>}
        customCardBottom={<div>自定义下部渲染</div>}
        customAvatar={<img alt="自定义头像" />}
      >
        <div>子元素渲染</div>
      </CustomerCard>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" defaultShowCode="true" />
