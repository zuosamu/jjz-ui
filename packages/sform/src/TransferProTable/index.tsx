import { connect, mapProps } from '@formily/react';
import { Transfer } from 'antd';
import { BasicProTable } from '@jjz-ui/pc';
import React from 'react';
export const TransferProTable = connect(
  ({ locale, dataSource, onChange, value, columns, titles }) => {
    return (
      <Transfer
        locale={locale}
        titles={titles}
        dataSource={dataSource}
        targetKeys={value}
        onChange={onChange}
      >
        {(props) => {
          const getTableData = (params: { [s: string]: unknown }) =>
            props?.filteredItems?.filter((i: Record<string, unknown>) => {
              const arr = Object.entries(params).filter(([key]) => !key.startsWith('_'));
              return !arr?.length || arr?.find(([key, value]) => i?.[key] === value);
            });

          return (
            <BasicProTable
              rowSelection={{
                selections: false,
                selectedRowKeys: props.selectedKeys,
                onSelectAll(selected: boolean, selectedRows: any[]) {
                  props.onItemSelectAll(selectedRows.map((i) => i.key) as string[], selected);
                },
                onSelect({ key }: any, selected: boolean) {
                  props.onItemSelect(key as string, selected);
                },
              }}
              params={{ _refresh: props.filteredItems.length }}
              request={async (params: { [s: string]: unknown }) => {
                const len = getTableData(params);
                return {
                  success: true,
                  data: len,
                  // 从数据中获取总数,totalRows为总数字段
                  total: len?.length,
                };
              }}
              search={{
                defaultCollapsed: false,
                collapseRender: false,
                labelWidth: 'auto',
                span: 8,
              }}
              size="small"
              pagination={false}
              scroll={{ y: 400 }}
              columns={columns}
            />
          );
        }}
      </Transfer>
    );
  },
  mapProps({ loading: true }, (props, field: any) => {
    return { ...props, dataSource: field?.dataSource, targetKeys: field?.targetKeys };
  }),
);
export default TransferProTable;
