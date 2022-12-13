---
title: TabBar
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/TabBar
  title: TabBar
---

# TabBar

```tsx
import React, { useState } from 'react';
import { Divider } from 'antd-mobile';
import { TabBar } from '@jjz-ui/mobile';
export default () => {
  const [data, setData] = useState('');
  const [data2, setData2] = useState('');
  const [data3, setData3] = useState('');
  const tabsList = [
    {
      id: 1,
      name: 'tab1',
    },
    {
      id: 2,
      name: 'tab2',
    },
    {
      id: 3,
      name: 'tab3',
    },
    {
      id: 4,
      name: 'tab4',
    },
  ];
  const tabsList2 = [
    {
      key: 1,
      label: '1111',
    },
    {
      key: 2,
      label: '2222',
    },
    {
      key: 3,
      label: '3333',
    },
    {
      key: 4,
      label: '4444',
    },
  ];
  const tabsList3 = [
    {
      id: 1,
      name: (
        <div>
          总计 <span>0</span>
        </div>
      ),
    },
    {
      id: 2,
      name: 'tab2',
    },
    {
      id: 3,
      name: 'tab3',
    },
    {
      id: 4,
      name: 'tab4',
    },
  ];

  const tabChange = (id, data) => {
    setData(data.name);
  };
  const tabChange2 = (id, data) => {
    setData2(data.label);
  };
  const tabChange3 = (id, data) => {
    setData3(data.name);
  };
  return (
    <>
      <Divider contentPosition="left">默认展示</Divider>
      <TabBar tabsList={tabsList} tabChange={tabChange} />
      <div>{data}</div>
      <Divider contentPosition="left">更换keyName和labelName展示</Divider>
      <TabBar tabsList={tabsList2} keyName="key" labelName="label" tabChange={tabChange2} />
      <div>{data2}</div>
      <Divider contentPosition="left">更改颜色</Divider>
      <TabBar tabsList={tabsList} tabChange={tabChange3} color="red" defaultColor="blue" />
      <div>{data3}</div>
      <Divider contentPosition="left">更改border颜色</Divider>
      <TabBar tabsList={tabsList} borderColor="red" />
      <div>不显示border请设置透明色</div>
      <Divider contentPosition="left">更改下滑块宽度和颜色和字体大小</Divider>
      <TabBar tabsList={tabsList3} moveBarColor="red" moveBarWidth="30%" fontSize="20px" />
      <div>不显示请设置透明色或宽度0</div>
    </>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx"  />
