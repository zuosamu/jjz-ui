/*
 * @Author: hz21076980
 * @Date: 2022-02-15 14:24:33
 * @LastEditors: hz21076980
 * @LastEditTime: 2022-03-14 16:12:22
 * @FilePath: \jjz\packages\jjz-ui\src\PlatformInfo\index.tsx
 */
import React, { FC } from 'react';
import { Row, Col } from 'antd';
import './index.less';

export interface PlatformInfoProps {
  /**
   * @description 返回规定顺序的数组列表
   * @default --
   */
  infoList: IList[];
}

interface IList {
  title: string;
  value: string | number;
  nextTitle?: string;
  nextValue?: string | number;
}

const PlatformInfo: FC<PlatformInfoProps> = ({ infoList }) => {
  return (
    <div style={{ width: '100%' }}>
      {infoList?.map((item, index) => {
        return (
          <Row className="rows" key={index + 'title'}>
            {item.nextTitle ? (
              <>
                <Col span={12} className="cols">
                  <Row>
                    <Col span={8} className="labels">
                      {item.title}
                    </Col>
                    <Col span={16} className="values">
                      {item.value || '--'}
                    </Col>
                  </Row>
                </Col>
                <Col span={12} className="cols">
                  <Row>
                    <Col span={8} className="labels">
                      {item.nextTitle}
                    </Col>
                    <Col span={16} className="values">
                      {item.nextValue || '--'}
                    </Col>
                  </Row>
                </Col>
              </>
            ) : (
              <Col span={24} className="cols">
                <Row>
                  <Col span={4} className="labels">
                    {item.title}
                  </Col>
                  <Col span={20} className="values">
                    {item.value || '--'}
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        );
      })}
    </div>
  );
};
export default PlatformInfo;
