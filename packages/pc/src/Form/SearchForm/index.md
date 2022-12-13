---
title: SearchForm
nav:
  path: /hxuan-ui
  title: Card
  order: 1
group:
  path: /hxuan-ui/form
  title: SearchForm
mobile: false
---

# 这里面的组件，全是结合 antd-components 使用的，相当于是自定义 valueType

# Demo

```tsx
import React, { useState } from 'react';
import { SearchForm } from '@jjz-ui/pc';

const valueEnum: any = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: 'AppName',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[Math.floor(Math.random() * 10) % 4],
    createdAt: Date.now() - Math.floor(Math.random() * 100000),
    memo: i % 2 === 1 ? '很长很长很长很长很长很长很长的文字要展示但是要留下尾巴' : '简短备注文案',
  });
}

const columns: any = [
  {
    title: '时间选择器',
    valueType: 'datesPicker',
  },
  {
    title: '下拉文本',
    valueType: 'selectInput',
    fieldProps: {
      selectProps: {
        options: [
          { value: 4, label: '全部' },
          { value: 1, label: '客户ID' },
          { value: 2, label: '客户手机号' },
          { value: 3, label: '客户微信号' },
        ],
      },
    },
  },
  {
    title: '应用名称',
    width: 80,
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '容器数量',
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
];
export default () => {
  return (
    <div className="lol">
      <SearchForm
        columns={columns}
        tabsKey="lol"
        tabs={[
          {
            key: 'tab1',
            tab: '标签一',
          },
          {
            key: 'tab2',
            tab: '标签二',
          },
        ]}
        request={(params, sorter, filter) => {
          // 表单搜索项会从 params 传入，传递给后端接口。
          console.log(params, sorter, filter);
          return Promise.resolve({
            data: tableListDataSource,
            success: true,
            total: 200,
          });
        }}
      />
    </div>
  );
};
```

<API></API>

## 源码

<code  src="./index.tsx" defaultShowCode="true" />
