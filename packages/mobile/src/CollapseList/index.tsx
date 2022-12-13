/*
 * @Author: 左森君
 * @Date: 2021-11-16 19:37:09
 * @LastEditors: 左森君
 * @LastEditTime: 2021-12-23 12:26:53
 * @FilePath: /dm-ui/packages/jjz-ui/src/CollapseList/index.tsx
 */
import Icon from '@jjz-ui/icon';
import React, { FC, useState } from 'react';
import './index.less';
const Button: FC<{ isCollapse: boolean; onClick(): void }> = ({ isCollapse, onClick }) => {
  return (
    <div className="coll-button">
      <div onClick={onClick}>{isCollapse ? '查看' : '收起'}更多保单</div>
      <Icon type={isCollapse ? 'icon-huize-arrow-down-filling' : 'icon-huize-arrow-up-filling'} />
    </div>
  );
};

export interface CollapseListProps {
  /**
   * @description 折叠时候展示的数量
   * @default 1
   */
  size: number;
  /**
   * @description 传入的按钮
   * @default ({ isCollapse, onClick }) => {
  return (
    <div className="coll-button">
      <div {...rest}>{isCollapse ? '查看' : '收起'}更多保单</div>
      <img className={isCollapse ? 'true' : 'false'} src={CollImg} />
    </div>
  );
};
   */
  switchBtn: FC<{ isCollapse: boolean; onClick(): void }>;
  /**
   * @description 传入的数组
   * @default --
   */
  children: React.ReactNode | React.ReactNode[];
}

const CollapseList: FC<CollapseListProps> = ({
  size = 1,
  switchBtn = ({ isCollapse, onClick }) => {
    return (
      <div className="coll-button">
        <div onClick={onClick}>{isCollapse ? '查看' : '收起'}更多保单</div>
        <Icon type={isCollapse ? 'icon-huize-arrow-down-filling' : 'icon-huize-arrow-up-filling'} />
      </div>
    );
  },
  children,
}) => {
  const [isCollapse, setIsCollapse] = useState(true);
  if (!children) null;
  const convertChildren = React.Children.map(children, (i) => i);
  const renders = isCollapse ? convertChildren?.slice(0, size) : children;
  return (
    <div className="collapse-list">
      <div>{renders}</div>
      {React.Children.count(convertChildren) > size
        ? switchBtn({ isCollapse, onClick: () => setIsCollapse((state) => !state) })
        : null}
    </div>
  );
};
export default CollapseList;
