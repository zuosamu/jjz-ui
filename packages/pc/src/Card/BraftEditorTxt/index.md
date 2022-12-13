---
title: BraftEditorTxt
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/card
  title: BraftEditorTxt
mobile: false
---

# Demo

```tsx
import React from 'react';
import { useForm } from 'antd/lib/form/Form';
import { Form } from 'antd';
import { BraftEditorTxt } from '@jjz-ui/pc';
import './index.less';

export default () => {
  const [form] = useForm();

  return (
    <div>
      <Form style={{ background: '#fff' }} onFinish={onsubmit} form={form}>
        <Form.Item labelCol={{ span: 4 }} label="文本内容" name={'content'}>
          <BraftEditorTxt />
        </Form.Item>
      </Form>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
