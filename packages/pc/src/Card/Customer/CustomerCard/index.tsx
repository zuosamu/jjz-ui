/*
 * @Author: 陈立
 * @Date: 2022-02-21 16:50:27
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-01 14:34:21
 * @FilePath: \jjz\packages\hxuan-ui\src\Customer\CustomerCard\index.tsx
 */

import React, { FC } from 'react';
import CustomerAvatar from '../CustomerAvatar';
import './index.less';

export interface CustomerCard {
  /** 用户名称 */
  name?: string;
  /** 性别 */
  sex?: 'male' | 'female';
  /** 用户的tag列表 */
  tags?: string[];
  /** 年龄 */
  age?: number;
  /** 头像图片的src，如不指定则依照性别渲染。 */
  avatarSrc?: string;
  /** 整个卡片的点击事件handler。 */
  onClick?: (ev: React.MouseEvent) => void;
  /**
   * 如果传入此项，将渲染该客户/访客在何时查看了什么内容。
   * onClick是点击对应标题内容的事件handler。
   */
  guestSource?: {
    time: string;
    title: string;
    onClick?: (ev: React.MouseEvent) => void;
  };
  /**
   * 自定义头像元素。取代原本的头像渲染。
   */
  customAvatar: React.ReactNode;
  /** 自定义卡片上部元素，取代原本名字和元信息。 */
  customCardTop: React.ReactNode;
  /** 自定义卡片下部元素，取代标签的位置。 */
  customCardBottom: React.ReactNode;
  /**
   * 渲染为外层div的最后一个子元素。
   */
  children: React.ReactNode;
}

const CustomerCard: FC<CustomerCard> = (props) => {
  return (
    <>
      <div className="jjz-customer-card">
        <div
          className="card-main"
          onClick={props.onClick}
          style={{ cursor: props.onClick ? 'pointer' : 'default' }}
        >
          {props.customAvatar ? props.customAvatar : <CustomerAvatar sex={props.sex} />}
          <div className="info-box">
            {props.customCardTop ? (
              props.customCardTop
            ) : (
              <div className="card-top">
                <span className="name">{props.name}</span>
                {props.sex && (
                  <span className="metainfo-box">{props.sex === 'male' ? '男' : '女'}</span>
                )}
                {props.age && <span className="metainfo-box">{`${props.age}岁`}</span>}
              </div>
            )}
            {props.customCardBottom ? (
              props.customCardBottom
            ) : (
              <div className="card-bottom">
                {props.tags?.map((tag, index) => (
                  <span className="tag" key={index}>
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {props.guestSource && (
          <div className="guest-visit">
            <span className="guest-visit-time">{props.guestSource.time}</span>
            访问你分享的
            <span
              className="guest-visit-title"
              style={{ cursor: props.guestSource.onClick ? 'pointer' : 'inherit' }}
            >{`《${props.guestSource.title}》`}</span>
          </div>
        )}

        {props.children}
      </div>
    </>
  );
};

CustomerCard.defaultProps = {
  name: '',
};

export default CustomerCard;
