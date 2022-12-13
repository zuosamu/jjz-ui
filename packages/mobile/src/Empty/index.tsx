/*
 * @Author: 笙笙漫-陈伟
 * @Date: 2022-02-17 09:48:15
 * @LastEditors: 笙笙漫-陈伟
 * @LastEditTime: 2022-02-17 17:59:49
 * @FilePath: \HuizeTeamd:\huize\web\jjz\packages\jjz-ui\src\Empty\index.tsx
 */
///<reference path="../index.d.ts" />
import React, { FC, ReactNode, useEffect, useState } from 'react';
import defaultImg from 'public/img/empty/empty-image-default.png';
import errorImg from 'public/img/empty/empty-image-error.png';
import searchImg from 'public/img/empty/empty-image-search.png';
import './index.less';

export interface EmptyProps {
  /**
   * @description 自定义类名
   * @default --
   */
  className?: string;
  /**
   * @description 图片类型，可选值为 error search，支持传入图片 URL
   * @default default
   */
  image?: string;
  /**
   * @description 图片大小，默认单位为 px
   * @default 160px
   */
  imageSize?: string;
  /**
   * @description 图片下方的描述文字
   * @default 暂无数据
   */
  description?: string;
  /**
   * @description 字体颜色
   * @default #969799
   */
  textColor?: string;
  children?: ReactNode;
}
const defaultImgsObj: any = {
  default: defaultImg,
  error: errorImg,
  search: searchImg,
};
const Empty: FC<EmptyProps> = ({
  className,
  image,
  imageSize,
  description,
  textColor,
  children,
}) => {
  const [url, setUrl] = useState('');
  const [style, setStyle] = useState<any>({});
  useEffect(() => {
    if (image) {
      if (defaultImgsObj[image]) {
        setUrl(defaultImgsObj[image]);
      } else {
        setUrl(image);
      }
    }
    setStyle({
      '--imageSize': imageSize ? imageSize : '160px',
      '--textColor': textColor ? textColor : '#969799',
    });
  }, []);
  return (
    <div className={'dm-empty ' + (className ? className : '')} style={style}>
      {url ? (
        <div className="dm-empty-image">
          <img src={url} />
        </div>
      ) : null}
      {description ? <div className="dm-empty-description">{description}</div> : null}
      {children ? <div className="dm-empty-bottom">{children}</div> : null}
    </div>
  );
};
Empty.defaultProps = {
  image: 'default',
  description: '暂无数据',
  imageSize: '160px',
  textColor: '#969799',
};
export default Empty;
