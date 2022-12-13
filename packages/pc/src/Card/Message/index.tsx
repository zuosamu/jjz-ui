/*
 * @Author: 陈立
 * @Date: 2022-03-07 15:26:39
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-14 15:37:20
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\Message\index.tsx
 */

import React, { FC } from 'react';
import './index.less';

export interface MessageProps {
  /** 消息标题 */
  title: string;
  /** 是否在标题后显示一个记号。（可用于标记未读消息。） */
  showMarker?: boolean;
  /**
   * 消息图片，将渲染在content或richText之前。
   * 该字段是透传给img元素的props。
   * 如果不传入图片的src，则不会渲染图片元素。
   */
  imgProps?: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
  /** 消息文本内容。 */
  content?: React.ReactNode;
  /** 点击整个卡片的事件handler。 */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * 自定义底部内容元素。
   * 如果不传入，则不渲染footer。
   */
  footer?: React.ReactNode;
  /** 是否显示默认的渐变色背景。 */
  showDefaultBackground?: boolean;
}

const Message: FC<MessageProps> = (props) => {
  return (
    <div
      className="jjz-message-card"
      onClick={props.onClick}
      style={{ cursor: props.onClick ? 'pointer' : 'default' }}
    >
      <div className={`header ${props.showDefaultBackground ? 'default-bg' : ''}`}>
        <span className={`title blod ${props.showMarker ? 'with-maker' : ''}`}>{props.title}</span>
        {props.showMarker && <span className="marker" />}
      </div>
      <div className="main">
        {props.imgProps?.src && <img {...props.imgProps} />}
        <div className="content">{props.content}</div>
      </div>
      {props.footer}
    </div>
  );
};

Message.defaultProps = {
  showMarker: false,
  showDefaultBackground: false,
};

export default Message;
