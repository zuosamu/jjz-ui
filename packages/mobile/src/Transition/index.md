---
title: Transition
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/Transition
  title: Transition
---

# Transition

```tsx
import React, { useState } from 'react';
import { Divider } from 'antd-mobile';
import { Transition } from '@jjz-ui/mobile';
export default () => {
  const [showFade, setShowFade] = useState(false);
  const [showSlideUp, setShowSlideUp] = useState(false);
  const [showSlideDown, setShowSlideDown] = useState(false);
  const [showSlideLeft, setShowSlideLeft] = useState(false);
  const [showSlideRight, setShowSlideRight] = useState(false);
  return (
    <div>
      <Divider contentPosition="left">fade</Divider>
      <button
        onClick={() => {
          setShowFade((show) => !show);
          setTimeout(() => {
            setShowFade((show) => !show);
          }, 1000);
        }}
      >
        点击按钮查看fade效果
      </button>
      <Transition show={showFade}>
        <div
          style={{
            width: '100px',
            height: '100px',
            background: '#66ccff',
            borderRadius: '4px',
            position: 'fixed',
            zIndex: 999,
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-50px',
          }}
        ></div>
      </Transition>

      <Divider contentPosition="left">slide-up</Divider>
      <button
        onClick={() => {
          setShowSlideUp((show) => !show);
          setTimeout(() => {
            setShowSlideUp((show) => !show);
          }, 1000);
        }}
      >
        点击按钮查看slide-up效果
      </button>
      <Transition show={showSlideUp} name="slide-up">
        <div
          style={{
            width: '100px',
            height: '100px',
            background: '#66ccff',
            borderRadius: '4px',
            position: 'fixed',
            zIndex: 999,
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-50px',
          }}
        ></div>
      </Transition>
      <Divider contentPosition="left">slide-down</Divider>
      <button
        onClick={() => {
          setShowSlideDown((show) => !show);
          setTimeout(() => {
            setShowSlideDown((show) => !show);
          }, 1000);
        }}
      >
        点击按钮查看slide-down效果
      </button>
      <Transition show={showSlideDown} name="slide-down">
        <div
          style={{
            width: '100px',
            height: '100px',
            background: '#66ccff',
            borderRadius: '4px',
            position: 'fixed',
            zIndex: 999,
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-50px',
          }}
        ></div>
      </Transition>

      <Divider contentPosition="left">slide-left</Divider>
      <button
        onClick={() => {
          setShowSlideLeft((show) => !show);
          setTimeout(() => {
            setShowSlideLeft((show) => !show);
          }, 1000);
        }}
      >
        点击按钮查看slide-left效果
      </button>
      <Transition show={showSlideLeft} name="slide-left">
        <div
          style={{
            width: '100px',
            height: '100px',
            background: '#66ccff',
            borderRadius: '4px',
            position: 'fixed',
            zIndex: 999,
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-50px',
          }}
        ></div>
      </Transition>

      <Divider contentPosition="left">slide-right</Divider>
      <button
        onClick={() => {
          setShowSlideRight((show) => !show);
          setTimeout(() => {
            setShowSlideRight((show) => !show);
          }, 1000);
        }}
      >
        点击按钮查看slide-right效果
      </button>
      <Transition show={showSlideRight} name="slide-right">
        <div
          style={{
            width: '100px',
            height: '100px',
            background: '#66ccff',
            borderRadius: '4px',
            position: 'fixed',
            zIndex: 999,
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-50px',
          }}
        ></div>
      </Transition>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
