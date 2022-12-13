import type { FC } from 'react';
import React from 'react';
import type { ProTableProps } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { merge } from 'lodash';

export type ColumnsType = Record<string, any>;

export type ParamsType = Record<string, any>;

export type ValueType = 'input';

export const BasicProTable: FC<ProTableProps<ColumnsType, ParamsType, ValueType>> = (props) => {
  const defaultPorps = {
    search: { defaultCollapsed: false, collapseRender: false, labelWidth: 'auto', span: 6 },
    options: false,
    rowKey: 'id',
    tableAlertRender: false,
    pagination: {
      defaultPageSize: 10,
      size: 'default',
      showQuickJumper: true,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
      showTotal: () => null,
    },
    scroll: { x: 100 },
  };
  return (
    <ProTable
      {...merge(defaultPorps, props)}
      columns={props?.columns?.map((i) => ({
        minWidth: 100,
        align: 'center',
        hideInSearch: !i.valueType,
        ellipsis: true,
        ...i,
      }))}
    />
  );
};

export default BasicProTable;
