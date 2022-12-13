---
title: Insurance
nav:
  path: /hxuan-ui
  title: Card
  order: 1
group:
  path: /hxuan-ui/card
  title: Insurance
---

# Demo

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { Insurance } from '@jjz-ui/pc';

const data = {
  baseCategoryParentId: 1,
  categoryMasterName: '意外保障',
  categoryMasterParentName: '儿童保险测试',
  commission: null,
  companyName: '平安财险',
  defaultPrice: 89,
  desc: null,
  inside: '18-65周岁',
  masterCategoryId: 2042,
  masterCategoryParentId: 2041,
  onClick: 'https://m.huize.com/apps/cps/index/product/detail?prodId=1002464&planId=1004964',
  planId: 1004964,
  productId: 1002464,
  productName: '蔡丽繁商品部测试--慧骑行-骑行无忧（勿动）',
  selected: 0,
  src: null,
  taps: [],
};

const convertGoods = ({
  defaultPrice,
  desc,
  inside,
  onClick,
  productId,
  productName,
  productType,
  productTypeId,
  src,
  taps,
  list,
  selected,
  commission,
  planId,
}) => {
  return {
    title: productName,
    selected,
    des: desc,
    tips: taps,
    inside: inside,
    price: defaultPrice,
    src: src,
    commission,
    planId,
  };
};

export default () => {
  return (
    <div>
      <Divider contentPosition="left">普通用法</Divider>
      <Insurance {...convertGoods(data)} />
      <Divider contentPosition="left">添加网红图表</Divider>
      <Insurance {...convertGoods(data)} fire={true} />
      <Divider contentPosition="left">自定义标题</Divider>
      <Divider contentPosition="left">扩展用法</Divider>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
