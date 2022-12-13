---
title: Tag
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/Tag
  title: Tag
---

# Tag

```tsx
import React, { useState } from 'react';
import { Divider } from 'antd-mobile';
import { Tag } from '@jjz-ui/mobile';
export default () => {
  return (
    <>
      <Divider contentPosition="left">默认</Divider>
      <Tag>标签</Tag>
      <Divider contentPosition="left">空心样式</Divider>
      <Tag plain>标签</Tag>
      <Divider contentPosition="left">圆角样式</Divider>
      <Tag round>标签</Tag>
      <Tag plain round>
        标签
      </Tag>
      <Tag mark>标签</Tag>
      <Tag plain mark>
        标签
      </Tag>
      <Tag radius="4px">标签</Tag>
      <Tag plain radius="4px">
        标签
      </Tag>
      <Divider contentPosition="left">自定义颜色</Divider>
      <Tag color="red">标签</Tag>
      <Tag color="red" plain>
        标签
      </Tag>
      <Tag color="red" textColor="yellow">
        标签
      </Tag>
      <Tag color="red" textColor="yellow" plain>
        标签
      </Tag>
      <Tag color="red" textColor="yellow" borderColor="blue" plain>
        标签
      </Tag>
      <Tag borderColor="red" plain>
        标签
      </Tag>
      <Divider contentPosition="left">阴影颜色</Divider>
      <Tag shadow="red">标签</Tag>
      <Tag shadow="rgba(0,0,0,0.2)" plain>
        标签
      </Tag>
    </>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
