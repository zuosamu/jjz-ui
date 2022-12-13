/*
 * @Author: 陈立
 * @Date: 2022-02-17 15:57:36
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-01 14:34:05
 * @FilePath: \jjz\packages\hxuan-ui\src\Customer\FamilyMemberAvatar\index.tsx
 */
import React from 'react';
import { FC } from 'react';
import './index.less';
import boy from 'public/img/customer/boy.png';
import girl from 'public/img/customer/girl.png';
import man from 'public/img/customer/man.png';
import woman from 'public/img/customer/woman.png';
import oldwoman from 'public/img/customer/oldwoman.png';
import oldman from 'public/img/customer/oldman.png';
import family from 'public/img/customer/family.png';
import other from 'public/img/customer/other.png';

const AvatarTypeMap = {
  boy,
  girl,
  man,
  woman,
  oldwoman,
  oldman,
  family,
  other,
} as const;

export interface FamilyMemberAvatarProps {
  /**
   * 传入自定义的图片src作为头像。优先级高于avatarType。
   */
  src?: string;
  /**
   * 渲染指定的对应预置头像。
   */
  avatarType?: 'boy' | 'girl' | 'man' | 'woman' | 'oldwoman' | 'oldman' | 'family' | 'other';
  /** 头像的大小，直接传递给头像的宽高。 */
  size?: string;
  /**
   * 该成员是否被选中。
   * 当为true，元素的classname中会带有seleted字段。
   * 默认情况下会把成员背景显示为蓝色。
   */
  isSelected?: boolean;
  /** 头像的点击事件。 */
  onClick?: (ev: React.MouseEvent) => void;
  /**
   * 该组件渲染单个img元素，可直接将style传入到该元素上。
   * 该传入的inline样式可以覆盖size属性指定的值。
   */
  style?: React.CSSProperties;
}

const FamilyMemberAvatar: FC<FamilyMemberAvatarProps> = (props) => {
  return (
    <img
      onClick={props.onClick}
      style={{
        width: props.size,
        height: props.size,
        cursor: props.onClick ? 'pointer' : 'inherit',
        ...props.style,
      }}
      className={`jjz-family-member-avatar ${props.isSelected ? 'seleted' : ''}`}
      src={props.src || AvatarTypeMap[props.avatarType || 'man']}
      alt="avatar"
    />
  );
};

FamilyMemberAvatar.defaultProps = {
  avatarType: 'man',
  isSelected: false,
  size: '60px',
};

export default FamilyMemberAvatar;
