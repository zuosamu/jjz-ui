/*
 * @Author: 笙笙漫-陈伟
 * @Date: 2022-02-17 17:40:15
 * @LastEditors: 笙笙漫-陈伟
 * @LastEditTime: 2022-02-18 10:07:26
 * @FilePath: \HuizeTeamd:\huize\web\jjz\packages\jjz-ui\src\HandWriting\index.tsx
 */
import React, { useEffect, useRef, FC } from 'react';
import SignaturePad from 'signature_pad';
import './index.less';

export interface HandWritingProps {
  /**
   * @description 笔的颜色
   * @default #333
   */
  penColor?: string;
  /**
   * @description 背景颜色
   * @default 透明
   */
  backgroundColor?: string;
  /**
   * @description 笔的最小宽度
   * @default 0.5
   */
  minWidth?: number;
  /**
   * @description 笔的最大宽度
   * @default 2.5
   */
  maxWidth?: number;
  /**
   * @description 初始化完成后用于获取手写对象
   * @default (signaturePad) => {}  signaturePad手写对象方便操作
   */
  initReady?: Function;
  /**
   * @description 一笔写完的回调
   * @default (data) => {}  data为笔路径坐标数据
   */
  writeEnd?: Function;
}

const HandWriting: FC<HandWritingProps> = ({
  penColor,
  backgroundColor,
  minWidth,
  maxWidth,
  initReady,
  writeEnd,
}) => {
  // data部分
  const handWriting = useRef<any>(null);
  const signaturePad = useRef<any>(null);
  // 相当于mounted
  useEffect(() => {
    signaturePad.current = new SignaturePad(handWriting.current, {
      minWidth: minWidth,
      maxWidth: maxWidth,
      backgroundColor: backgroundColor,
      penColor: penColor,
    });
    signaturePad.current.addEventListener('endStroke', endStroke, { once: true });
    resizeCanvas();
    initReady && initReady(signaturePad.current);
  }, []);
  // methods部分
  const endStroke = () => {
    const data = signaturePad.current.toData();
    console.log(data);
    writeEnd && writeEnd(data);
  };
  const resizeCanvas = () => {
    const canvas = handWriting.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    clearFun();
  };
  const clearFun = () => {
    signaturePad.current.clear();
  };

  const setDataFun = (data: any) => {
    signaturePad.current.fromData(data);
    // 从点组数组中绘制签名图像，而不清除现有图像（如果未提供，则清除默认值为 true）
    // signaturePad.current.fromData(data, { clear: false });
  };

  return (
    <div className="dm-handwriting">
      <canvas id="handWriting" className="dm-handwriting-canvas" ref={handWriting}></canvas>
    </div>
  );
};
HandWriting.defaultProps = {
  penColor: '#333',
  backgroundColor: 'transparent',
  minWidth: 0.5,
  maxWidth: 2.5,
};
export default HandWriting;
