/*
 * @Author: 左森君
 * @Date: 2022-02-11 15:30:35
 * @LastEditors: 左森君
 * @LastEditTime: 2022-02-17 15:39:44
 * @FilePath: /jjzui/packages/hxuan-ui/src/Form/SelectInput/index.tsx
 */
import type { FC } from 'react';
import { useState, useEffect } from 'react';
import type { SelectProps, InputProps } from 'antd';
import { Input, Select } from 'antd';
import React from 'react';
export interface SelectInputProps {
  /**
   * @description: 前面的<Selct/> 的属性值，完全继承antd
   * @default: --
   */
  selectProps: SelectProps;
  /**
   * @description: 前面的<Input/> 的属性值，完全继承antd，addonBefore已被占用，请勿使用
   * @default: --
   */
  inputProps: InputProps;
  [key: string]: any;
}

const SelectInput: FC<SelectInputProps> = ({ onChange, selectProps, inputProps }) => {
  const [selectValue, setSelectValue] = useState(selectProps?.defaultValue);
  const [inputValue, setInputValue] = useState(inputProps?.defaultValue);
  useEffect(() => {
    onChange({
      selectValue,
      inputValue,
    });
  }, [inputValue, selectValue, onChange]);
  return (
    <Input
      addonBefore={<Select style={{ width: '150px' }} {...selectProps} onChange={setSelectValue} />}
      {...inputProps}
      onChange={(e) => setInputValue(e.target.value)}
    />
  );
};
SelectInput.defaultProps = {
  onChange: () => {},
};

export default SelectInput;
