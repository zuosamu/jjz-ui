/*
 * @Author: hz21076980
 * @Date: 2022-02-22 14:56:28
 * @LastEditors: hz21076980
 * @LastEditTime: 2022-02-23 10:18:23
 * @FilePath: \jjz\packages\jjz-ui\src\Ellipsis\index.tsx
 */
import React, { FC, useState } from 'react';
import './index.less';

export interface EllipsisProps {
  /**
   * @description 展示文字长度(string类型需要带单位或者百分比'12%')
   * @default 100%
   */
  width: number | string;
  /**
   * @description 展示文字行数
   * @default 1
   */
  lines: number;
  /**
   * @description 文字内容
   * @default --
   */
  children: string | React.ReactNode;
}

const Ellipsis: FC<EllipsisProps> = ({ width = '100%', lines = 1, children }) => {
  const [line, setLine] = useState<number | string>(lines);
  const [show, setShow] = useState<boolean>(false);
  const showAll = () => {
    setShow(!show);
    setLine(show ? 'inherit' : lines);
  };
  return (
    <div
      className="ellipsis-text"
      style={{
        WebkitLineClamp: line,
        width: `${typeof width === 'string' ? width : `${width}px`}`,
      }}
      onClick={showAll}
    >
      {children}
    </div>
  );
};
export default Ellipsis;
