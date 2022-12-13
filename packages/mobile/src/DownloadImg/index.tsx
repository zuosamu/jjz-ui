/*
 * @Author: 起德红
 * @Date: 2022-02-15 11:11:13
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-15 15:39:59
 * @FilePath: \jjz\packages\jjz-ui\src\DownloadImg\index.tsx
 */
/*
    浏览器下载图片
*/
import React, { useRef } from 'react';
import { IDownloadImg } from './data';
import './index.less';

const DownloadImg: React.FC<IDownloadImg> = (props) => {
  const { src = '', txt = 'download', sourceName = '测试', mimeType = 'image/png' } = props;
  const refImg = useRef<any>(null);
  //点击下载图片
  const downloadImg = () => {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      //使用canvas进行图片资源绘制及toDataUrl转化为资源地址
      const canvas = document.createElement('canvas');
      canvas.getContext('2d')?.drawImage(img, 0, 0, refImg?.current.width, refImg?.current.height);
      const imgUrl = canvas.toDataURL(mimeType);
      const dlLink = document.createElement('a');
      // 如果浏览器支持msSaveOrOpenBlob方法（也就是使用IE浏览器的时候），那么调用该方法去下载图片
      if ((window.navigator as any)?.msSaveOrOpenBlob) {
        let bstr = atob(imgUrl.split(',')[1]);
        let n = bstr.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        let blob = new Blob([u8arr]);
        (window.navigator as any)?.msSaveOrOpenBlob(blob, sourceName);
      } else {
        dlLink.download = sourceName;
        dlLink.href = imgUrl;
        dlLink.dataset.downloadurl = [mimeType, dlLink.download, dlLink.href].join(':');
        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
      }
    };
  };
  return (
    <div className="download-box">
      <img src={src} ref={refImg} className="download-img" id="img" />
      {/* 没有图片地址需要兼容 */}
      {src && (
        <div className="download-backg">
          <span className="download-txt" onClick={downloadImg}>
            {txt}
          </span>
        </div>
      )}
    </div>
  );
};

export default DownloadImg;
