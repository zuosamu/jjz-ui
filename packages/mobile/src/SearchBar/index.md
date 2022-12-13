---
title: SearchBar
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/SearchBar
  title: SearchBar
mobile: false
---

## DEMO

慧选智保移动端 UI 设计风的搜索框。

```tsx
import React from 'react';
import { SearchBar } from '@jjz-ui/mobile';

export default () => {
  return (
    <>
      <SearchBar showSearchIcon={false} inputProps={{ placeholder: '不显示搜索按钮' }} />
      <hr />
      <SearchBar inputProps={{ placeholder: '默认样式' }} />
      <hr />
      <SearchBar
        showClear
        inputProps={{ placeholder: '带清除按钮' }}
        onClear={() => alert('clear')}
        onCancel={() => alert('cancel')}
      />
      <hr />
      <SearchBar inputProps={{ placeholder: '自定义子元素' }}>
        <div>自定义元素</div>
      </SearchBar>
    </>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
