---
title: Ellipsis
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/ellipsis
  title: Ellipsis
mobile: false
---

# Ellipsis

```tsx
import React from 'react';
import { Divider } from 'antd';
import { Ellipsis } from '@jjz-ui/mobile';

const article = (
  <p>
    There were injuries alleged in three{' '}
    <a href="#cover" style={{ color: 'red' }}>
      cases in 2015
    </a>
    , and a fourth incident in September, according to the safety recall report. After meeting with US
    regulators in October, the firm decided to issue a voluntary recall.
  </p>
);
const longText =
  'There were injuries alleged in three cases in 2015, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.1111';

export default () => {
  return (
    <div>
      <Divider orientation="left" plain>
        按照文本行数省略，点击展开/收起
      </Divider>
      <div style={{ width: '600px' }}>
        <Ellipsis lines={2}>{article}</Ellipsis>
      </div>
      <Divider orientation="left" plain>
        按照文本宽度省略，点击展开/收起
      </Divider>
      <Ellipsis width={500}>{longText}</Ellipsis>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" defaultShowCode="true" />
