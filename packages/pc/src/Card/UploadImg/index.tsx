/*
 * @Author: 刘晓容
 * @Date: 2022-02-11 14:41:42
 * @LastEditTime: 2022-03-10 11:27:40
 * @LastEditors: 刘晓容
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\UploadImg\index.tsx
 */
import React, { useEffect, useState } from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

interface UploadImgProps {
  onChange: Function;
  /** 图片地址 */
  value?: string;

  disabled?: boolean;

  /** 必填项，文件上传链接 */
  actionURL: string;
}
const UploadImg: React.FC<UploadImgProps> = (props) => {
  console.log('UploadImg------------->', props);

  const [files, setFiles] = useState<any[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (!props.value) {
      setFiles([]);
    } else {
      setFiles([{ url: props.value }]);
    }
  }, [props.value]);

  const onChange = ({ file, fileList }: { file: any; fileList: any }) => {
    if (file.status === 'done') {
      const [{ response }] = fileList;
      props.onChange(response?.data?.fileUrl);
      setIsUploading(false);
    } else if (file.status === 'removed') {
      setIsUploading(false);
      props.onChange('');
    } else {
      setIsUploading(true);
      setFiles([file]);
    }
  };

  return (
    <div>
      <Upload
        name="file"
        fileList={files}
        disabled={props.disabled}
        // showUploadList={{ showPreviewIcon: false }}
        listType="picture-card"
        accept="image/*"
        className="antd-update"
        action={props.actionURL}
        onChange={onChange}
      >
        {props.value ? null : isUploading ? null : <PlusOutlined />}
        {/* {props.value ? null : <PlusOutlined />} */}
      </Upload>
    </div>
  );
};

UploadImg.defaultProps = {
  onChange: () => {},
  value: '',
  disabled: false,
  actionURL: 'http://huiju.insclouds.com/workpc/api/portal/counselor/company/upload',
};
export default UploadImg;
