/*
 * @Author: 左森君
 * @Date: 2022-02-16 11:06:18
 * @LastEditors: 左森君
 * @LastEditTime: 2022-02-21 12:04:51
 * @FilePath: /jjzui/packages/hxuan-ui/src/Form/SearchForm/index.tsx
 */
import React, { useContext, useState, useMemo, useRef } from 'react';
import ProProvider from '@ant-design/pro-provider';
import type { ProFormInstance } from '@ant-design/pro-form';
import type { FC } from 'react';
import ProTable from '@ant-design/pro-table';
import { merge } from 'lodash';
import DatesPicker, { DatesPickerProps } from '../DatesPicker';
import SelectInput, { SelectInputProps } from '../SelectInput';
import { DatePickerProps } from 'antd';
const valueTypeMap = {
  datesPicker: {
    renderFormItem: (
      text: any,
      props: {
        fieldProps: JSX.IntrinsicAttributes &
          React.PropsWithChildren<DatesPickerProps & DatePickerProps>;
      },
    ) => {
      return <DatesPicker {...props.fieldProps} />;
    },
  },
  selectInput: {
    renderFormItem: (
      text: any,
      props: {
        fieldProps: JSX.IntrinsicAttributes & SelectInputProps & { children?: React.ReactNode };
      },
    ) => {
      return <SelectInput {...props.fieldProps} />;
    },
  },
};

const SearchForm: FC<any> = ({
  valueTypeMap: valueMap,
  children,
  columns,
  columnsAll,
  tabs,
  tabsKey,
  ...rest
}) => {
  console.log(tabs);
  const values = useContext(ProProvider);
  const [activeKey, setActiveKey] = useState<string>(tabs?.[0]?.key);
  const ref = useRef<ProFormInstance>();
  const col = useMemo(() => {
    return columns?.map((i: any) => {
      return { ...columnsAll, search: !!i.valueType, hideInTable: !(i.dataIndex || i.key), ...i };
    });
  }, [columns, columnsAll]);
  return (
    <ProProvider.Provider
      value={{
        ...values,
        valueTypeMap: merge(valueTypeMap, valueMap),
      }}
    >
      <ProTable
        toolbar={
          tabs?.length
            ? {
                menu: {
                  type: 'tab',
                  activeKey,
                  onChange: (key) => {
                    setActiveKey(key as string);
                    ref.current?.setFieldsValue({
                      [tabsKey]: activeKey,
                    });
                    ref.current?.submit();
                  },
                  items: tabs,
                },
              }
            : undefined
        }
        {...rest}
        columns={col}
        formRef={ref}
      />
    </ProProvider.Provider>
  );
};
SearchForm.defaultProps = {
  columnsAll: {},
  columns: [],
  valueTypeMap: {},
  tabs: [],
  tabsKey: 'tabsKey',
};
export default SearchForm;
