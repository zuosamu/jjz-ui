/*
 * @Author: 左森君
 * @Date: 2021-11-15 16:27:06
 * @LastEditors: 左森君
 * @LastEditTime: 2021-12-06 15:53:17
 * @FilePath: /dm-ui/src/Title/index.tsx
 */
import React, { FC, ReactNode } from 'react';
import './index.less';

export interface TitleProps {
  /**
   * @description 前置icon
   * @default --
   */
  prefix?: ReactNode | String | undefined;
  /**
   * @description title主体
   * @default --
   */
  title: ReactNode | String;
  /**
   * @description 后缀
   * @default --
   */
  rightContent?: ReactNode | String | undefined;
}

const Title: FC<TitleProps> = ({ title, prefix, rightContent }) => {
  return (
    <div className="dm-title">
      <div className="dm-title-block">
        <div className="dm-title-main">
          {typeof prefix === 'string' ? <img src={prefix} /> : prefix}
          {typeof title === 'string' ? (
            <h2 className="dm-title-content ellipsis">{title}</h2>
          ) : (
            title
          )}
        </div>
        {rightContent}
      </div>
    </div>
  );
};
export default Title;
