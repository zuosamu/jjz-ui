/*
 * @Author: 左森君
 * @Date: 2021-11-15 17:38:16
 * @LastEditors: 左森君
 * @LastEditTime: 2021-12-07 19:50:25
 * @FilePath: /dm-ui/src/Member/index.tsx
 */
import React, { ReactNode, FC } from 'react';
import './index.less';

export interface MemberProps {
  children: ReactNode | ReactNode[];
  prefix?: ReactNode | String | undefined;
  suffix?: ReactNode | String | undefined;
}

const Member: FC<MemberProps> = ({ children, prefix, suffix }) => {
  return (
    <div className="dm-member">
      <div className="dm-member-prefix">{prefix}</div>
      <div className="dm-member-content">{React.Children.map(children, (i) => i)}</div>
      <div className="dm-member-suffix">{suffix}</div>
    </div>
  );
};
export default Member;
