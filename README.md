# 文件结构

- 大写字母开头
- 驼峰命名
- 允许[a-Z0-9]

## 目录结构

```md
|-- Button |-- index.tsx |-- index.less |-- index.md
```

## vscode 配置

安装 koroFileHeader 扩展，并且配置如下 setting,之后重启 vscode

```json
....
  "fileheader.customMade": {
    "Author": "左**",
    "Date": "Do not edit", // 文件创建时间(不变)
    "LastEditors": "左**", // 文件最后编辑者
    "LastEditTime": "Do not edit", // 文件最后编辑时间
    "FilePath": "Do not edit" // 文件在项目中的相对路径 自动更新
  }, // 头部注释
  "fileheader.cursorMode": {
    "description": "",
    "default": ""
  },
  "fileheader.configObj": {
    "prohibitAutoAdd": ["json", "md"] // 禁止.json .md文件，自动添加头部注释
  },
```

## js 部分

- 引用的文件置顶
- 引入文件的顺序，先 js 文件,在 css 文件
- 拒绝**使用路径**引入其他组件，如果需要使用，请使用 npm link 方式（dumi 会自动帮你 link 的）
- type 在组件之前
- 组件代码作为 default 导出，type 作为 export 导出
- css 文件统一使用 index.less 文件导入
- 组件 root 用单个 dom 包裹一般使用 div 标签
- type 编写请参照
- **一定要写默认值** 例如：

```tsx
/*
 * @Author: 左**
 * @Date: 2021-11-16 19:37:09
 * @LastEditors: 左**
 * @LastEditTime: 2021-12-23 12:26:53
 * @FilePath: /dm-ui/packages/jjz-ui/src/CollapseList/index.tsx
 */
import React, { useState, FC } from 'react';
import Icon from '@jjz-ui/icon';
import './index.less';

export interface CollapseListProps {
    ...
}

const CollapseList: FC<CollapseListProps> = () => {
  return (
    <div className="collapse-list">
       ...
    </div>
  );
};
export default CollapseList;
```

### type 规范

- 导出 interface

```tsx
export interface CollapseListProps {
    ...
     /**
   * @description 折叠时候展示的数量
   * @default 1
   */
     size: number;
}
```

一定要写注释，和默认值

## css 部分

- 统一使用 less
- 使用统一的类前缀
- 类名统一使用中横线,如：coll-button
- 使用单个类名作为根类名
- 使用&代替父类名例如：

```less
.dm-title {
  ... &-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ...;
}
```

## md 部分

要保函 3 部分，当然你想写点其他的也可以

- md 的配置头，你要归类为哪一个项目
- 示例代码
- 源码
- api（直接使用导出的 type 生成的，所以一定要写好 type）
- 自己 diy 风格（看个人喜好）

````md
---
title: Avatar
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/avatar
  title: Avatar
---

# Avatar

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { Avatar } from '@jjz-ui/mobile';
import Icon from 'public/img/boy.png';
export default () => {
  return (
    <div>
      <Divider contentPosition="left">普通用法</Divider>
      <Avatar src={Icon}>男孩</Avatar>
      <Divider contentPosition="left">扩展描述</Divider>
      <Avatar src={Icon}>
        <div>
          男孩
          <br />
          大陆未来守护者
        </div>
      </Avatar>
      <Divider contentPosition="left">横向排列</Divider>
      <Avatar src={Icon} spaceProps={{ direction: 'horizontal', block: true }}>
        <div>
          男孩
          <br />
          大陆未来守护者
        </div>
      </Avatar>
      <Divider contentPosition="left">横向排列</Divider>
      <Avatar src={Icon} spaceProps={{ direction: 'horizontal', block: true, justify: 'between' }}>
        <div>
          男孩
          <br />
          大陆未来守护者
        </div>
      </Avatar>
    </div>
  );
};
// 通过导出的type直接生成的
<API></API>

## 如果你想魔改,源码拿去吧！
<code src="./index.tsx" />
```
````

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Run test,

```bash
$ npm test
```

Build library via `father-build`,

```bash
$ npm run build
```
