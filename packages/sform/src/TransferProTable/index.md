---
title: TransferProTable
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
          layout: {
            type: 'void',
            'x-component': 'FormLayout',
            'x-component-props': {
              labelCol: 6,
              wrapperCol: 10,
            },
            properties: {
              transferProTable: {
                type: 'array',
                'x-decorator': 'FormItem',
                'x-component': 'TransferProTable',
                'x-component-props': {
                  locale: { itemUnit: '项', itemsUnit: '项' },
                  titles: ['违规项-源列表', '违规项-目标列表'],
                  columns: [
                    {
                      title: '序号',
                      valueType: 'index',
                      width: 60,
                    },
                    {
                      title: '质检类别',
                      dataIndex: 'categoryName',
                    },
                    {
                      title: '质检项',
                      valueType: 'select',
                      dataIndex: 'itemName',
                    },
                    {
                      title: '风险等级',
                      dataIndex: 'riskLevel',
                      valueType: 'select',
                    },
                  ],
                },
              },
            },
          },
        },
      }}
    />
  </FormProvider>
);
```

> 所有的 formily 组件都默认注入了，使用时，直接使用就行

## 所有默认添加了对的 antd 组件库(antd)[https://ant.design/components/transfer-cn#render-props]

<API></API>

```js

```

## 源码

<code src="./index.tsx" />
