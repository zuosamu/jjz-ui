---
title: TagList
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/TagList
  title: TagList
---

# TagList

```tsx
import React, { useState } from 'react';
import { Divider } from 'antd-mobile';
import { TagList } from '@jjz-ui/mobile';
export default () => {
  const tagList = [
    { id: 1, name: '肾类' },
    { id: 2, name: '甲状腺类' },
    { id: 3, name: '家庭单' },
    { id: 4, name: '单身' },
    { id: 5, name: '已婚未育' },
    { id: 6, name: '有房贷' },
    { id: 7, name: '有车贷' },
    { id: 8, name: '18-25' },
    { id: 9, name: '51-55' },
    { id: 10, name: '2月' },
    { id: 11, name: '9月' },
    { id: 12, name: '成交短险' },
    { id: 13, name: '成交定寿' },
    { id: 14, name: '配偶' },
    { id: 15, name: '政府机关/事业单位' },
    { id: 16, name: '医疗险' },
    { id: 17, name: '消费型' },
  ];
  const add = () => {
    alert('添加');
  };
  const del = (id) => {
    console.log(id);
    tagList.forEach((el, i) => {
      if (el.id === id) {
        tagList.splice(i, 1);
      }
    });
    console.log(tagList);
  };
  return (
    <>
      <Divider contentPosition="left">默认使用</Divider>
      <TagList tagList={tagList} />
      <Divider contentPosition="left">修改标签样式</Divider>
      <TagList tagList={tagList} tagProps={{ plain: true, round: true }} />
      <Divider contentPosition="left">隐藏显示1行</Divider>
      <TagList tagList={tagList} lines={1} />
      <Divider contentPosition="left">隐藏显示2行数</Divider>
      <TagList tagList={tagList} lines={2} />
      <Divider contentPosition="left">隐藏显示3行数</Divider>
      <TagList tagList={tagList} lines={3} />
      <Divider contentPosition="left">显示添加按钮</Divider>
      <TagList tagList={tagList} lines={2} showAdd addText="标签库" addFun={add} />
      <Divider contentPosition="left">显示删除按钮，在lines为0的时候生效</Divider>
      <TagList tagList={tagList} showAdd addText="标签库" addFun={add} showDel delFun={del} />
    </>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
