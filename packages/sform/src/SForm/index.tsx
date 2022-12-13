import type { FC, ReactNode } from 'react';
import React, { useMemo } from 'react';
import {
  ArrayBase,
  ArrayCards,
  ArrayCollapse,
  ArrayItems,
  ArrayTable,
  ArrayTabs,
  BaseItem,
  Cascader,
  Checkbox,
  DatePicker,
  Editable,
  Form,
  FormButtonGroup,
  FormCollapse,
  FormGrid,
  FormItem,
  FormLayout,
  FormStep,
  FormTab,
  GridColumn,
  Input,
  NumberPicker,
  Password,
  PreviewText,
  Radio,
  Reset,
  Select,
  SelectTable,
  Space,
  Submit,
  Switch,
  TimePicker,
  Transfer,
  TreeSelect,
  Upload,
} from '@formily/antd';
import type { IFormProps } from '@formily/core';
import { createForm } from '@formily/core';
import type { ISchema } from '@formily/react';
import { FormProvider, createSchemaField } from '@formily/react';

export interface SFormProps {
  schema: ISchema;
  formOption?: IFormProps;
  children?: ReactNode;
}
const SchemaField = createSchemaField({
  components: {
    ArrayBase,
    ArrayCards,
    ArrayCollapse,
    ArrayItems,
    ArrayTable,
    ArrayTabs,
    BaseItem,
    Cascader,
    Checkbox,
    DatePicker,
    Editable,
    Form,
    FormButtonGroup,
    FormCollapse,
    FormGrid,
    FormItem,
    FormLayout,
    FormStep,
    FormTab,
    GridColumn,
    Input,
    NumberPicker,
    Password,
    PreviewText,
    Radio,
    Reset,
    Select,
    SelectTable,
    Space,
    Submit,
    Switch,
    TimePicker,
    Transfer,
    TreeSelect,
    Upload,
  },
});

export const SForm: FC<SFormProps> = ({ schema = {}, formOption = {}, children }) => {
  const form = useMemo(() => createForm(formOption), []);
  return (
    <FormProvider form={form}>
      <SchemaField schema={schema} />
      {children}
    </FormProvider>
  );
};

export default SForm;
