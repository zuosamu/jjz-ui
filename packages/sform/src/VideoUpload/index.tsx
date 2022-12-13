import React, { FC, useLayoutEffect, useState } from 'react';
import { Button, Upload, UploadFile, UploadProps } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

type VideoUploadPropsValue = [string, string];

export interface VideoUploadProps {
  value: VideoUploadPropsValue;
  onChange: (value: VideoUploadPropsValue) => void;
  textContent?: string;
}

export const VideoUpload: FC<UploadProps & VideoUploadProps> = (props) => {
  const { value, onChange, ...restProps } = props;
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  useLayoutEffect(() => {
    if (value?.length) {
      setFileList([
        {
          uid: '-1',
          name: value?.[1],
          status: 'done',
          url: value?.[0],
        },
      ]);
    }
  }, [value]);

  return (
    <Upload
      name="file"
      // accept="*"
      fileList={fileList}
      {...restProps}
      onChange={(e) => {
        if (e.file.status === 'done') {
          console.log(e?.file?.response?.data);
          onChange([e?.file?.response?.data?.fileUrl, e?.file?.response?.data?.fileName]);
        } else {
          setFileList(e.fileList);
        }
      }}
    >
      <Button loading={fileList?.[0]?.status === 'uploading'}>
        <UploadOutlined />
        {props.textContent}
      </Button>
    </Upload>
  );
};

export default VideoUpload;
