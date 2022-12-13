/*
 * @Author: 刘晓容
 * @Date: 2022-02-15 17:11:18
 * @LastEditTime: 2022-03-10 11:26:04
 * @LastEditors: 刘晓容
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\BraftEditorTxt\index.tsx
 */
import React, { ReactNode } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
// import { Select, Upload, Button } from 'antd';
import './index.less';

interface BraftEditorTxtProps {
  onChange: Function;
  value: string | ReactNode;
  /** 文件是上传服务器地址 */
  serverUrl: string;
  readOnly?: boolean;
}
/**该组件在这里仅支持图片上传和基本的文本功能 */
const BraftEditorTxt: React.FC<BraftEditorTxtProps> = (props) => {
  const { readOnly, serverUrl } = props;

  const upload = (param: any) => {
    const serverURL = serverUrl;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    const successFn = () => {
      // 上传成功后调用param.success并传入上传后的文件地址
      const url = JSON.parse(xhr.responseText).data;
      param.success({
        url: url.fileUrl,
      });
    };
    const progressFn = (event: any) => {
      // 上传进度发生变化时调用param.progress
      param.progress((event.loaded / event.total) * 100);
    };
    const errorFn = () => {
      // 上传发生错误时调用param.error
      param.error({
        msg: '上传失败！',
      });
    };
    xhr.upload.addEventListener('progress', progressFn, false);
    xhr.addEventListener('load', successFn, false);
    xhr.addEventListener('error', errorFn, false);
    xhr.addEventListener('abort', errorFn, false);
    fd.append('file', param.file);
    xhr.open('POST', serverURL, true);
    xhr.send(fd);
    console.log(fd, param);
  };

  return (
    <div>
      <BraftEditor
        onChange={(val) => {
          props.onChange(val);
        }}
        className="my-editor"
        readOnly={readOnly}
        placeholder="请输入正文内容"
        value={props.value}
        style={{ border: '1px solid #ccc', width: '100%' }}
        media={{
          accepts: {
            image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
            video: false,
            audio: false,
          },
          uploadFn: upload,
        }}
        controls={[
          'undo',
          'redo',
          'separator',
          'font-size',
          'line-height',
          'letter-spacing',
          'separator',
          'text-color',
          'bold',
          'italic',
          'underline',
          'strike-through',
          'separator',
          'superscript',
          'subscript',
          'remove-styles',
          'emoji',
          'separator',
          'text-indent',
          'text-align',
          'separator',
          'headings',
          'list-ul',
          'list-ol',
          'blockquote',
          'code',
          'separator',
          'link',
          'separator',
          'hr',
          'separator',
          'media',
          'separator',
          'fullscreen',
          // 'table',
          'clear',
        ]}
      />
    </div>
  );
};

BraftEditorTxt.defaultProps = {
  onChange: () => {},
  value: 'male',
  serverUrl: 'http://huiju.insclouds.com/workpc/api/portal/counselor/remind/upload',
  readOnly: false,
};
export default BraftEditorTxt;
