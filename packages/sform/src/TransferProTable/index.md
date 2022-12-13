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
        'x-component': 'FormLayout',
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
