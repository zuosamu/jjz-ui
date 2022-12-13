---
title: HandWriting
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/HandWriting
  title: HandWriting
---

# HandWriting

```tsx
import React, { useRef } from 'react';
import { Divider } from 'antd-mobile';
import { HandWriting } from '@jjz-ui/mobile';

export default () => {
  const signaturePad = useRef<any>(null);
  const pointsData = useRef<any>(null);

  // 获取手写对象
  const getSignaturePad = (data) => {
    signaturePad.current = data;
  };
  return (
    <div>
      <Divider contentPosition="left">默认</Divider>
      <div
        style={{
          width: '300px',
          height: '100px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <HandWriting />
      </div>
      <Divider contentPosition="left">笔画颜色-粗细</Divider>
      <div
        style={{
          width: '300px',
          height: '100px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <HandWriting penColor="red" minWidth={1} maxWidth={3} />
      </div>
      <Divider contentPosition="left">初始化获取手写对象</Divider>
      <div
        style={{
          width: '300px',
          height: '100px',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
      >
        <HandWriting initReady={getSignaturePad} />
        <button
          onClick={() => {
            signaturePad.current.clear();
          }}
        >
          清除画布
        </button>
        <button
          onClick={() => {
            let data = signaturePad.current.toData();
            pointsData.current = data;
            alert(JSON.stringify(data));
          }}
        >
          获取数据
        </button>
        <button
          onClick={() => {
            let data = signaturePad.current.toDataURL();
            alert(JSON.stringify(data));
          }}
        >
          获取图片
        </button>
        <button
          onClick={() => {
            if (pointsData.current) {
              signaturePad.current.fromData(pointsData.current);
            } else {
              alert('请先获取数据，然后清除画布');
            }
          }}
        >
          回显数组
        </button>
      </div>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
