import React, { FC, useEffect } from 'react';
import Empty from '../Empty';
import './index.less';

export interface EBookProps {
  /**
   * @description 自定义类名
   * @default --
   */
  className?: string;
  /**
   * @description 图片数组  [{image_url: ''}]
   * @default []
   */
  imgArr: Array<any>;
}

const EBook: FC<EBookProps> = ({ className, imgArr }) => {
  useEffect(() => {
    if (imgArr.length) {
      localStorage.setItem('hz_ebook', JSON.stringify(imgArr));
    }
  }, [imgArr]);
  return (
    <div className={'dm-ebook ' + (className ? className : '')}>
      {imgArr.length ? (
        <iframe src={'/ebook/index.html?time=' + new Date().getTime()}></iframe>
      ) : (
        <Empty description="暂无图片" />
      )}
    </div>
  );
};
EBook.defaultProps = {
  imgArr: [],
};
export default EBook;
