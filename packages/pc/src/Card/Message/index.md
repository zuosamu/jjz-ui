---
title: Message
nav:
  path: /hxuan-ui
  title: Card
group:
  path: /hxuan-ui/Message
  title: Message
---

## DEMO

慧选智保待消息卡片。

```tsx
import React from 'react';
import { Message } from '@jjz-ui/pc';
import exampleImg from 'public/img/example/message-example.png';

export default () => {
  const Footer = () => {
    return (
      <div style={{ display: 'flex' }}>
        <span style={{ marginLeft: 'auto', marginRight: '10px' }}>自定义footer元素</span>
      </div>
    );
  };

  return (
    <div style={{ backgroundColor: '#e9e7e7', padding: '5px' }}>
      <Message
        title="产品消息 复星联合健康《爱无忧意外伤害保险》"
        content="因公司商品策略调整，复星联合健康《爱无忧意外伤害保险》（基础商品ID：101848）自2021年11月12日起保费由43元/10万保额调整为59元/10万保额，已调整完成并已上线，请各位知悉。"
      />
      <hr />
      <Message
        title="产品消息 复星联合健康《爱无忧意外伤害保险》"
        content="因公司商品策略调整，复星联合健康《爱无忧意外伤害保险》（基础商品ID：101848）自2021年11月12日起保费由43元/10万保额调整为59元/10万保额，已调整完成并已上线，请各位知悉。"
        footer={<Footer />}
        imgProps={{ src: exampleImg }}
        showMarker
        showDefaultBackground
        onClick={() => alert('卡片点击事件')}
      />
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
