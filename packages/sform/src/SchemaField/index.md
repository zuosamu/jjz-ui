---
title: SchemaField
nav:
  path: /pc
  title: pc
group:
  path: /pc/SchemaForm
  title: 公共表单组件
mobile: false
---

# Demo

```tsx
import React from 'react';
import { createForm } from '@formily/core';
import { FormProvider } from '@formily/react';
import { SchemaField } from '@jjz-ui/sform';

const form = createForm();

export default () => (
  <FormProvider form={form}>
    <SchemaField
      schema={{
        type: 'object',
        properties: {
          input: {
            type: 'string',
            'x-component': 'Input',
          },
          select: {
            type: 'string',
            'x-component': 'Select',
            'x-component-props': {
              style: {
                width: 200,
                marginTop: 20,
              },
            },
          },
        },
      }}
    />
  </FormProvider>
);
```

<API></API>

## 所有默认添加了对的 antd 组件库(@formily/antd)[https://antd.formilyjs.org/zh-CN/components/form-button-group]

只是添加了默认配置

```js

```

## 源码

<code src="./index.tsx" />
