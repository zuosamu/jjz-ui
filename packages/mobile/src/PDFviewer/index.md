---
title: PDFviewer
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/PDFviewer
  title: PDFviewer
mobile: false
---

# PDFviewer 图片电子书

```tsx
import React, { useState } from 'react';
import { Divider } from 'antd-mobile';
import { PDFviewer } from '@jjz-ui/mobile';
export default () => {
  const pdfUrl = '/pdf/demo/2022企业微信生态研究报告-艾瑞咨询.pdf';
  return (
    <>
      <div
        style={{ width: '800px', height: '600px', border: '1px solid #ccc', position: 'relative' }}
      >
        <PDFviewer pdfUrl={pdfUrl} />
      </div>
      <Divider contentPosition="left">移动端使用</Divider>
      <div
        style={{ width: '375px', height: '600px', border: '1px solid #ccc', position: 'relative' }}
      >
        <PDFviewer pdfUrl={pdfUrl} />
      </div>
    </>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx"  defaultShowCode="true" />
