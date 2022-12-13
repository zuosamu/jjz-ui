---
title: SelectInput
nav:
  path: /hxuan-ui
  title: Card
  order: 1
group:
  path: /hxuan-ui/form
  title: Form
mobile: false
---

# Demo

```tsx
import React, { useState } from 'react';
import { SelectInput } from '@jjz-ui/pc';

export default () => {
  const [value, change] = useState();
  const selectProps = {
    options: [
      { label: 'http://', value: '1' },
      { label: 'https://', value: '2' },
    ],
  };
  const inputProps = {
    disabled: false,
  };
  return (
    <div>
      <SelectInput selectProps={selectProps} inputProps={inputProps} onChange={change} />
      {JSON.stringify(value)}
    </div>
  );
};
```

<API></API>

## 源码

<code  src="./index.tsx" defaultShowCode="true" />
