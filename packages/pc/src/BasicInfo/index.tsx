import {
  DownOutlined,
  EnvironmentOutlined,
  ManOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  StarTwoTone,
  WomanOutlined,
} from '@ant-design/icons';
import { RouteContext } from '@ant-design/pro-layout';
import { Button, Card, Col, Divider, Dropdown, Menu, message, Row, Space, Tooltip } from 'antd';
import React, { FC, useContext } from 'react';
// import CopyToClipboard from 'react-copy-to-clipboard';
import copy from 'copy-to-clipboard';
import { useRouteMatch } from 'umi';
import Labels, { LabelsProps } from '../Labels';
import { useRequest } from 'ahooks';
export interface BasicInfoProps extends LabelsProps {
  getCustomerBrieflyById: (customerId: string) => Promise<any>;
  getwjPath: (params: object) => Promise<string>;
  updateCustomerStarTarget: (customerId: string) => void;
}
export const BasicInfo: FC<BasicInfoProps> = ({
  getCustomerBrieflyById,
  getwjPath,
  updateCustomerStarTarget,
  getCustomerDetailTagList,
  postTagList,
  getTagList,
}) => {
  const { params }: { params: any } = useRouteMatch();
  const { currentMenu } = useContext(RouteContext);
  const entryType = currentMenu?.routeProps.entryType;
  const { data: info, refresh } = useRequest(getCustomerBrieflyById, {
    defaultParams: [params?.customerId],
  });
  return (
    <Card hoverable={true}>
      <Row align="middle" gutter={[10, 24]}>
        <Col>
          <Space>
            <span style={{ fontSize: '18px' }}>{info?.customerName}</span>
            {info?.sex % 2 ? (
              <ManOutlined style={{ color: '#1890ff' }} />
            ) : (
              <WomanOutlined style={{ color: '#fd6953' }} />
            )}
            {info?.age ?? '--'}岁
          </Space>
        </Col>
        <Divider type="vertical" />
        <Col>ID: {info?.id}</Col>
        <Divider type="vertical" />
        <Col>
          {info?.mobilePhoneList?.length > 1 ? (
            <Dropdown
              overlay={
                <Menu
                  items={info?.mobilePhoneList
                    ?.filter((i: any) => i != info?.mobilePhone)
                    .map((i: string) => {
                      return {
                        key: i,
                        label: i?.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'),
                      };
                    })}
                />
              }
            >
              <Space>
                <PhoneOutlined style={{ color: '#aaa' }} />
                {info?.mobilePhone?.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}
                <DownOutlined />
              </Space>
            </Dropdown>
          ) : (
            <Space>
              <PhoneOutlined style={{ color: '#aaa' }} />
              {info?.mobilePhone?.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}
            </Space>
          )}
        </Col>
        <Divider type="vertical" />
        <Col>
          <EnvironmentOutlined style={{ color: '#aaa', marginRight: '5px' }} />
          {info?.provinceName}
          {info?.cityName}
          {info?.areaName}
          {info?.provinceName || info?.cityName || info?.areaName ? '' : '--'}
        </Col>
        {entryType !== 3 ? (
          <>
            <Divider type="vertical" />
            <StarTwoTone
              onClick={async () => {
                await updateCustomerStarTarget(params?.customerId);
                await refresh();
                await message.success(!info?.isStarTarget ? '客户标星成功' : '取消客户标星');
              }}
              twoToneColor={info?.isStarTarget === 0 ? '#aaa' : '#1890ff'}
            />
            <Col>星标客户</Col>
            <Col>
              <Tooltip title="复制">
                <Button
                  size="small"
                  onClick={async () => {
                    const url = await getwjPath(params);
                    await copy(url);
                    message.success('复制成功');
                  }}
                  type="primary"
                  ghost
                  icon={<QuestionCircleOutlined />}
                >
                  发问卷
                </Button>
              </Tooltip>
            </Col>
          </>
        ) : null}
        <Col span={24} style={{ pointerEvents: entryType !== 3 ? 'auto' : 'none' }}>
          <Space align="start">
            <span style={{ whiteSpace: 'nowrap' }}>标签：</span>
            <Labels {...{ getCustomerDetailTagList, postTagList, getTagList }} />
          </Space>
        </Col>
      </Row>
    </Card>
  );
};
export default BasicInfo;
