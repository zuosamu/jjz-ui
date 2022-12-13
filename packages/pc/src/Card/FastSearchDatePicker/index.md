---
title: FastSearchDatePicker
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/card
  title: FastSearchDatePicker
mobile: false
---

# Demo

```tsx
import React from 'react';
import { FastSearchDatePicker } from '@jjz-ui/pc';

export default () => {
  const changeDatePicker = (obj) => {
    console.log(obj);
  };

  return (
    <div>
      <FastSearchDatePicker changeDatePicker={changeDatePicker}> </FastSearchDatePicker>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
