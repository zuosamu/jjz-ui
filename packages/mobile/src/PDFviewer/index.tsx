/*
 * @Author: 笙笙漫-陈伟
 * @Date: 2022-03-07 17:10:39
 * @LastEditors: 笙笙漫-陈伟
 * @LastEditTime: 2022-03-07 17:43:46
 * @FilePath: \HuizeTeamd:\huize\web\jjz\packages\jjz-ui\src\PDFviewer\index.tsx
 */
import React, { FC } from 'react';
import Empty from '../Empty';
import './index.less';

export interface PDFviewerProps {
  /**
   * @description 自定义类名
   * @default --
   */
  className?: string;
  /**
   * @description pdf文件地址
   * @default '''
   */
  pdfUrl: string;
}

const PDFviewer: FC<PDFviewerProps> = ({ className, pdfUrl }) => {
  return (
    <div className={'dm-pdf ' + (className ? className : '')}>
      {pdfUrl ? (
        <iframe
          src={
            '/pdf/web/viewer.html?file=' +
            encodeURIComponent(pdfUrl + '?date=' + new Date().getTime())
          }
        ></iframe>
      ) : (
        <Empty description="暂无内容" />
      )}
    </div>
  );
};
PDFviewer.defaultProps = {
  pdfUrl: '',
};
export default PDFviewer;
