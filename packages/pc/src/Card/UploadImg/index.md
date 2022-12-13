---
title: UploadImg
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/card
  title: UploadImg
mobile: false
---

# Demo

```tsx
import React from 'react';
import { useForm } from 'antd/lib/form/Form';
import { Form } from 'antd';
import { UploadImg } from '@jjz-ui/pc';

export default () => {
  const [form] = useForm();

  return (
    <div>
      <Form style={{ background: '#fff' }} onFinish={onsubmit} form={form}>
        <Form.Item labelCol={{ span: 4 }} label="公司logo" name={'logoUrl'}>
          <UploadImg
            action={'http://huiju.insclouds.com/workpc/api/portal/counselor/company/upload'}
          />
        </Form.Item>
      </Form>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
