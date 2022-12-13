/*
 * @Author: 笙笙漫-陈伟
 * @Date: 2022-02-15 14:30:01
 * @LastEditors: 笙笙漫-陈伟
 * @LastEditTime: 2022-02-16 16:05:44
 * @FilePath: \HuizeTeamd:\huize\web\jjz\packages\jjz-ui\src\ClickActive\index.tsx
 */
import React, { FC, useEffect, useRef, useState } from 'react';
import Transition from '../Transition';
import './index.less';

export interface ClickActiveProps {
  /**
   * @description 颜色
   * @default currentColor
   */
  color?: string;
  /**
   * @description 是否从中间扩散，设为false会从点击处扩散
   * @default false
   */
  centerRipple?: boolean;
  /**
   * @description 波纹透明度
   * @default 0.1
   */
  opacity?: number;
}

export interface CircleRippleProps {
  theData: any;
  end: Function;
}

const CircleRipple: FC<CircleRippleProps> = ({ theData, end }) => {
  const [styles, setStyles] = useState<any>({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    setStyles({
      ...{ color: theData.color, opacity: theData.opacity },
      ...theData.style,
    });
  }, [theData]);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      <Transition
        show={show}
        name="ripple"
        callback={() => {
          setShow(false);
          end && end();
        }}
      >
        <div
          className="dm-circle-ripple"
          style={{
            ...styles,
          }}
        ></div>
      </Transition>
    </>
  );
};
CircleRipple.defaultProps = {
  theData: {
    color: '',
    opacity: 0.1,
    style: {},
  },
  end: () => {},
};

const ClickActive: FC<ClickActiveProps> = ({ color, centerRipple, opacity }) => {
  // 防止既有 touch 又有 mouse点击的情况
  const [ignoreNextMouseDown, setIgnoreNextMouseDown] = useState(false);
  // 记录下一个波纹元素的key值， 相当于uuid，不设置的话会使动画失效
  const nextKey = useRef(0);
  const holder = useRef<any>();
  // 波纹元素参数数组
  const [ripples, setRipples] = useState<any>([]);
  let startTime: any = null;
  let handleMove: any = null;
  let firstTouchY: any = null;
  let firstTouchX: any = null;

  // 组件加载完成
  useEffect(() => {}, []);

  // isRippleTouchGenerated 是否是touch 事件开始的
  const start = (event: any, isRippleTouchGenerated: boolean) => {
    // 开始波纹效果
    // 过滤 touchstart 和 mousedown 同时存在的情况
    if (ignoreNextMouseDown && !isRippleTouchGenerated) {
      setIgnoreNextMouseDown(true);
      return;
    }
    setRipples((arr: any) => {
      return [
        ...arr,
        getRipple({
          key: nextKey.current++,
          color: color,
          opacity: opacity,
          style: centerRipple ? {} : getRippleStyle(event), // 不是从中心扩展的需要计算波纹元素的位置
        }),
      ];
    });
    setIgnoreNextMouseDown(isRippleTouchGenerated);
  };
  const getRipple = (el: any) => {
    return <CircleRipple key={el.key} end={end} theData={el}></CircleRipple>;
  };
  // 结束
  const end = () => {
    // 结束波纹效果
    if (ripples.length === 0) return;
    // 删除一个波纹元素
    setRipples((ripples: any) => {
      return ripples.slice(1);
    });
    stopListeningForScrollAbort(); // 结束 touch 滚动的处理
  };
  const handleMouseDown = (event: any) => {
    // 监听 鼠标单击
    // 只监听鼠标左键的点击
    if (event.button === 0) {
      start(event, false);
    }
  };
  const handleTouchStart = (event: any) => {
    // 监听 touchstart 方法
    event.stopPropagation(); // 防止多个波纹点击组件嵌套
    if (event.touches) {
      startListeningForScrollAbort(event); // 启动 touchmove 触发滚动处理
      startTime = Date.now();
    }
    start(event.touches[0], true);
  };

  // touchmove 结束波纹控制
  const stopListeningForScrollAbort = () => {
    if (!handleMove) handleMove = handleTouchMove.bind(this);
    document.body.removeEventListener('touchmove', handleMove, false);
  };
  const startListeningForScrollAbort = (event: any) => {
    firstTouchY = event.touches[0].clientY;
    firstTouchX = event.touches[0].clientX;
    document.body.addEventListener('touchmove', handleMove, false);
  };
  const handleTouchMove = (event: any) => {
    const timeSinceStart = Math.abs(Date.now() - startTime);
    if (timeSinceStart > 300) {
      stopListeningForScrollAbort();
      return;
    }
    const deltaY = Math.abs(event.touches[0].clientY - firstTouchY);
    const deltaX = Math.abs(event.touches[0].clientX - firstTouchX);
    // 滑动范围在 > 6px 结束波纹点击效果
    if (deltaY > 6 || deltaX > 6) end();
  };

  const getRippleStyle = (event: any) => {
    let holderBox = holder.current;
    //  这个方法返回一个矩形对象，包含四个属性：left、top、right和bottom。分别表示元素各边与页面上边和左边的距离。
    let rect = holderBox.getBoundingClientRect() || {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
    };
    // 获取点击点的位置
    let x = event.offsetX;
    let y;
    if (x !== undefined) {
      y = event.offsetY;
    } else {
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }
    // 获取最大边长
    let max;
    if (rect.width === rect.height) {
      max = rect.width * 1.412;
    } else {
      max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
    }
    const dim = max * 2 + 'px';
    return {
      width: dim,
      height: dim,
      // 通过margin控制波纹中心点和点击点一致
      marginLeft: -max + x + 'px',
      marginTop: -max + y + 'px',
    };
  };

  return (
    <div className="dm-click-active" onMouseDown={handleMouseDown} onTouchStart={handleTouchStart}>
      <div
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: '0',
          left: '0',
          overflow: 'hidden',
        }}
        ref={holder}
      >
        {ripples}
      </div>
    </div>
  );
};
ClickActive.defaultProps = {
  color: '',
  centerRipple: false,
  opacity: 0.1,
};
export default ClickActive;
