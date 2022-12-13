import type { FC, ReactNode } from 'react';
import React, { useRef, useState } from 'react';
import { Button, Space } from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useSize } from 'ahooks';
export interface UpDownSwitchProps {
  maxHeight?: number;
  children?: ReactNode;
}

export const UpDownSwitch: FC<UpDownSwitchProps> = ({ maxHeight = 30, children }) => {
  const [ellipsis, setEllipsis] = useState(false);
  const ref = useRef(null);
  const size = useSize(ref);
  return (
    <Space align="start">
      <div style={{ maxHeight: !ellipsis ? maxHeight + 'px' : '', overflow: 'hidden' }} ref={ref}>
        {children}
      </div>
      {size && size?.height >= maxHeight ? (
        <Button type="link" onClick={() => setEllipsis((st) => !st)}>
          {ellipsis ? (
            <>
              收起
              <UpOutlined />
            </>
          ) : (
            <>
              展开
              <DownOutlined />
            </>
          )}
        </Button>
      ) : null}
    </Space>
  );
};
export default UpDownSwitch;
