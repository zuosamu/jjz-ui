---
title: AudioPlay
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/card
  title: AudioPlay
mobile: false
---

# Demo

```tsx
import React from 'react';
import { useForm } from 'antd/lib/form/Form';
import { Form } from 'antd';
import { AudioPlay } from '@jjz-ui/pc';

export default () => {
  const [form] = useForm();

  return (
    <div>
      <Form style={{ background: '#fff' }} onFinish={onsubmit} form={form}>
        <Form.Item labelCol={{ span: 4 }} label="音频播放" name={'audio'}>
          <AudioPlay localSoundFileId={1} />
        </Form.Item>
      </Form>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
