---
title: EBook
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/EBook
  title: EBook
mobile: false
---

# EBook 图片电子书

```tsx
import React, { useState } from 'react';
import { Divider } from 'antd-mobile';
import { EBook } from '@jjz-ui/mobile';
export default () => {
  const imgs = [
    {
      image_url: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
      image_url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    },
    {
      image_url: 'https://img.yzcdn.cn/vant/sand.jpg',
    },
    {
      image_url: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
      image_url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    },
    {
      image_url: 'https://img.yzcdn.cn/vant/sand.jpg',
    },
    {
      image_url: 'https://img.yzcdn.cn/vant/cat.jpeg',
    },
    {
      image_url: 'https://img.yzcdn.cn/vant/leaf.jpg',
    },
    {
      image_url: 'https://img.yzcdn.cn/vant/sand.jpg',
    },
  ];
  return (
    <>
      <div
        style={{ width: '800px', height: '600px', border: '1px solid #ccc', position: 'relative' }}
      >
        <EBook imgArr={imgs} />
      </div>
      <Divider contentPosition="left">移动端使用</Divider>
      <div
        style={{ width: '375px', height: '600px', border: '1px solid #ccc', position: 'relative' }}
      >
        <EBook imgArr={imgs} />
      </div>
    </>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx"  defaultShowCode="true" />
