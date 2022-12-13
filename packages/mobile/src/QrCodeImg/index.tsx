/*
 * @Author: 起德红
 * @Date: 2022-02-16 13:57:31
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-02-16 16:43:48
 * @FilePath: \jjz\packages\jjz-ui\src\QrCodeImg\index.tsx
 */

/**
 * 二维码生成
 *
 */

import QRCode from 'qrcode.react';
import React, { useRef } from 'react';
import { IQrCodeImg } from './data';
import './index.less';
const QrCodeImg: React.FC<IQrCodeImg> = (props) => {
  const { url = '', downBool = true, size, fileName } = props;
  const qrRef = useRef<any>(null);
  //下载二维码
  const downloadQrcode = () => {
    let canvasElement: any = document.getElementById('jhsPic');
    const MIME_TYPE = 'image/png';
    const files = fileName || `${new Date().getTime()}`;
    const imgUrl = canvasElement ? canvasElement.toDataURL(MIME_TYPE) : '';
    const dlLink = document.createElement('a');
    dlLink.download = files;
    dlLink.href = imgUrl;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  };
  return (
    <div className="qr">
      <QRCode ref={qrRef} className="qrcode" id="jhsPic" value={url} {...props} />
      {downBool && (
        <div className="download-backg" onClick={downloadQrcode} style={{ width: `${size}px` }}>
          <span className="download-txt">download</span>
        </div>
      )}
    </div>
  );
};
QrCodeImg.defaultProps = {
  bgColor: '#ffffff',
  fgColor: '#000000',
  includeMargin: false,
  // downBool: true,
  size: 128,
};

export default QrCodeImg;
