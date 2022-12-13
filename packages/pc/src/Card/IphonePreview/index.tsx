/*
 * @Author: 刘晓容
 * @Date: 2022-02-15 17:11:18
 * @LastEditTime: 2022-03-10 11:26:52
 * @LastEditors: 刘晓容
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\IphonePreview\index.tsx
 */
import React, { ReactNode } from 'react';
import './index.less';

interface IphonePreviewProps {
  /** 自定义展示内容区域 */
  iChildren?: string | ReactNode;
  width?: number | string;
}
const IphonePreview: React.FC<IphonePreviewProps> = (props) => {
  const { width, iChildren } = props;
  return (
    <div
      className="hj-preview-wrap"
      style={{ width: typeof width === 'number' ? `${width}px` : width }}
    >
      <div className="hj-preview-content">
        <div className="front-camera"></div>
        <div className="front-content">{iChildren}</div>
      </div>
    </div>
  );
};

IphonePreview.defaultProps = {
  width: 307,
  iChildren: (
    <div style={{ padding: '0 18px' }}>
      <div>俄乌战争</div>
      <div>俄罗斯乌克兰冲突</div>
    </div>
  ),
};
export default IphonePreview;
