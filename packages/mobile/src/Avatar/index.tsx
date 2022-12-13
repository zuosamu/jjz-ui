/*
 * @Author: 左森君
 * @Date: 2021-12-06 17:02:50
 * @LastEditors: 苍狗-左森君 zuosenjun@huize.com
 * @LastEditTime: 2022-06-15 17:05:03
 * @FilePath: /dm-ui/src/Avatar/index.tsx
 */
import { Image, Space } from 'antd-mobile';
import { SpaceProps } from 'antd-mobile/es/components/space/';
import React, { FC, ReactEventHandler, ReactNode } from 'react';
import './index.less';
export interface AvatarProps {
  /**
   * @description 头像的图片或者地址
   * @default
   */
  src: ReactNode | String;
  /**
   * @description 图片之外的秒速文案
   * @default undefined
   */
  children: ReactNode;
  /**
   * @description 最外层的点击事件
   * @default undefined
   */
  onClick?: ReactEventHandler;
  /**
   * @description 图片和描述的位置
   * @default { direction: 'vertical', align: 'center', style: { '--gap-vertical': '0' } }
   */
  spaceProps?: SpaceProps;
}
export const Avatar: FC<AvatarProps> = ({ src, children, onClick, spaceProps }) => {
  const currentSpaceProps: SpaceProps = {
    ...{ direction: 'vertical', align: 'center', style: { '--gap-vertical': '0' } },
    ...spaceProps,
  };
  return (
    <div className="jjz-avatar" onClick={onClick}>
      <Space {...currentSpaceProps}>
        <div className="jjz-avatar-img">
          {typeof src === 'string' ? <Image src={src} fit="contain" /> : src}
        </div>
        <div className="jjz-avatar-content">{children}</div>
      </Space>
    </div>
  );
};
export default Avatar;
