/*
 * @Author: hz21076980
 * @Date: 2022-02-16 10:03:40
 * @LastEditors: hz21076980
 * @LastEditTime: 2022-03-14 17:04:56
 * @FilePath: \jjz\packages\jjz-ui\src\ExpandList\index.tsx
 */
import React, { FC, useEffect, useState } from 'react';
import { Table } from 'antd';
import './index.less';

export interface IExpandList {
  /**
   * @description 初始化父列表数据
   * @default --
   */
  dataSource: object[];
  /**
   * @description 点击某行展开数据，返回该行字列表数据
   * @default --
   */
  childrenSource: object[];
  /**
   * @description 列表表头
   * @default --
   */
  columnsConf: object[];
}

const ExpandList: FC<IExpandList> = ({ dataSource, childrenSource, columnsConf }) => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<number[]>([]);
  const [columns, setColumns] = useState<any[]>([]);
  const onExpandClick = (expanded: any, record: any) => {
    if (expanded) {
      dataSource.map((item: any) => {
        if (record.id === item.id) {
          item.children = [...childrenSource];
        }
      });
      setExpandedRowKeys([...expandedRowKeys, record.id]);
    } else {
      if (expandedRowKeys?.length) {
        let arr = expandedRowKeys;
        arr = arr.filter((key) => {
          return key != record.id;
        });
        setExpandedRowKeys(arr);
      }
    }
  };
  useEffect(() => {
    let newColumns: any[] = [
      {
        title: '序号',
        key: 'index',
        dataIndex: 'index',
        render: (text: any, record: any, index: any) => (!record?.isChildren ? index + 1 : ''),
      },
      {
        title: '操作',
        key: 'option',
        render: (text: any, record: any, index: any) =>
          !record?.isChildren && (
            <a
              onClick={() => {
                onExpandClick(!expandedRowKeys.includes(record.id) ? true : false, record);
              }}
            >
              {!expandedRowKeys.includes(record.id) ? '展开' : '收起'}
            </a>
          ),
      },
    ];
    columnsConf?.map((item: any) => {
      newColumns.splice(1, 0, {
        title: item.title,
        key: item.key,
        dataIndex: item.key,
      });
    });
    setColumns(newColumns);
  }, [columnsConf]);

  return (
    <div>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        expandable={{
          onExpand(expanded, record) {
            onExpandClick(expanded, record);
          },
          showExpandColumn: false,
          expandedRowKeys: expandedRowKeys,
          defaultExpandAllRows: false,
        }}
        pagination={false}
      />
    </div>
  );
};
export default ExpandList;
