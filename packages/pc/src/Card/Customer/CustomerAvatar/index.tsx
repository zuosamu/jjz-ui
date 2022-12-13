/*
 * @Author: 陈立
 * @Date: 2022-02-17 15:58:01
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-01 14:34:30
 * @FilePath: \jjz\packages\hxuan-ui\src\Customer\CustomerAvatar\index.tsx
 */
import React from 'react';
import './index.less';
import closeIcon from 'public/img/customer/close.png';
import maleAvatar from 'public/img/customer/male.png';
import femaleAvatar from 'public/img/customer/female.png';

interface CustomerAvatarProps {
  /** 头像的大小，直接传递给style的width和height属性。 */
  size?: string;
  /** 传递给头像的图片的alt属性。 */
  alt?: string;
  /**
   * 客户性别，用于渲染男、女两种头像。
   * 如果不传入，默认渲染男性头像。
   */
  sex?: 'male' | 'female';
  /**
   * 自定义头像图片的src，优先级高于默认头像。
   */
  src?: string;
  /** 头像的点击事件handler。 */
  onClick?: (ev: React.MouseEvent) => void;
  /**
   * 如为true，头像会带上一个可点击的(-)按钮。
   */
  withCloseIcon?: boolean;
  /** 关闭图标的位置。 */
  closeIconPosition?: 'left-start' | 'left-end' | 'right-start' | 'right-end';
  /**  关闭图标的大小，直接传递给style的width和height属性。 */
  closeIconSize?: string;
  /** 点击close icon时触发的事件handler */
  onCloseClick?: (ev: React.MouseEvent) => void;
}

const CustomerAvatar: React.FC<CustomerAvatarProps> = (props) => {
  const avatarStyle: React.CSSProperties = {
    width: props.size,
    height: props.size,
    cursor: props.onClick ? 'pointer' : 'inherit',
  };
  const closeIconStyle: React.CSSProperties = {
    width: props.closeIconSize,
    height: props.closeIconSize,
    cursor: props.onCloseClick ? 'pointer' : 'inherit',
  };
  return (
    <div className="jjz-customer-avatar-container">
      <img
        className="customer-avatar-image"
        src={props.src || (props.sex === 'male' ? maleAvatar : femaleAvatar)}
        onClick={props.onClick}
        style={avatarStyle}
        alt={props.alt || 'avatar'}
      />
      {props.withCloseIcon && (
        <img
          className={`customer-avatar-close ${props.closeIconPosition}`}
          src={closeIcon}
          alt="close"
          onClick={props.onCloseClick}
          style={closeIconStyle}
        />
      )}
    </div>
  );
};

CustomerAvatar.defaultProps = {
  size: '40px',
  sex: 'male',
  withCloseIcon: false,
  closeIconPosition: 'right-start',
  closeIconSize: '14px',
};

export default CustomerAvatar;
