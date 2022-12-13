---
title: Empty
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/Empty
  title: Empty
---

# Empty

```tsx
import React, { useState } from 'react';
import { Divider } from 'antd-mobile';
import { Empty } from '@jjz-ui/mobile';
export default () => {
  return (
    <div>
      <Divider contentPosition="left">默认</Divider>
      <Empty />

      <Divider contentPosition="left">错误</Divider>
      <Empty image="error" />

      <Divider contentPosition="left">搜索</Divider>
      <Empty image="search" />

      <Divider contentPosition="left">不显示文字</Divider>
      <Empty description="" />

      <Divider contentPosition="left">不显示图片</Divider>
      <Empty image="" />

      <Divider contentPosition="left">网络图片</Divider>
      <Empty imageSize="90px" image="https://img.yzcdn.cn/vant/custom-empty-image.png" />

      <Divider contentPosition="left">字体颜色</Divider>
      <Empty textColor="red" description="我是红色" />

      <Divider contentPosition="left">额外内容</Divider>
      <Empty textColor="red" description="点击下方按钮进行操作">
        <button>我是底部按钮</button>
      </Empty>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
