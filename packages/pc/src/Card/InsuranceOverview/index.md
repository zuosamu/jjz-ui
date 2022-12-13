---
title: InsuranceOverview
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/InsuranceOverview
  title: InsuranceOverview
---

```tsx
import React from 'react';
import { InsuranceOverview } from '@jjz-ui/pc';

const data = [
  {
    label: '投保人',
    value: '张三',
  },
  {
    label: '被保人',
    value: '李四',
  },
  {
    label: '基本保额',
    value: '300万',
  },
  {
    label: '保障期限',
    value: '2009-08-22 至 2022-08-22',
  },
  {
    label: '长文本长文本长文本长文本',
    value:
      '长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本长文本',
  },
];

export default () => {
  return (
    <div style={{ backgroundColor: '#e9e7e7', padding: '10px' }}>
      <InsuranceOverview
        variant="B"
        title="投保单号 123456789"
        subtitle="亚太个人综合意外险计划三"
        banner="保障中"
        data={data}
      />
      <hr />
      <InsuranceOverview title="保单号 123456789" data={data} />
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
