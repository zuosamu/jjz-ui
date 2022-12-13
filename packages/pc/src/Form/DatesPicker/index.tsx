/*
 * @Author: 左森君
 * @Date: 2022-02-15 16:56:08
 * @LastEditors: 左森君
 * @LastEditTime: 2022-02-16 11:04:20
 * @FilePath: /jjzui/packages/hxuan-ui/src/Form/DatesPicker/index.tsx
 */
import React, { FC, useState } from 'react';
import { Form, DatePicker, DatePickerProps } from 'antd';
import moment, { Moment } from 'moment';
export interface DatesPickerProps {
  /**
   * @description: 完全继承antd-DatePicker
   * @default: --
   */
  startProps: DatePickerProps;
  /**
   * @description: 完全继承antd-DatePicker,addonBefore已被占用，请勿使用
   * @default: --
   */
  endProps: DatePickerProps;
  [key: string]: any;
}

const DatesPicker: FC<DatesPickerProps> = ({ onChange, value, startProps, endProps, ...props }) => {
  const [startTime, setStartTime] = useState<Moment | null>();
  const [endTime, setEndTime] = useState<Moment | null>();
  const disabledDate = (target: 'start' | 'end') => (date: Moment) => {
    if (target === 'start') {
      return endTime && moment(endTime).isBefore(date);
    } else if (target === 'end') {
      return startTime && moment(startTime).isAfter(date);
    }
  };
  return (
    <div>
      <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
        <DatePicker
          style={{ width: '100%' }}
          value={startTime}
          {...props}
          {...startProps}
          onChange={setStartTime}
          disabledDate={disabledDate('start') as (date: Moment) => boolean}
        />
      </Form.Item>
      <span
        style={{ display: 'inline-block', width: '24px', lineHeight: '32px', textAlign: 'center' }}
      >
        -
      </span>
      <Form.Item style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}>
        <DatePicker
          style={{ width: '100%' }}
          value={endTime}
          {...props}
          {...endProps}
          // onChange={setEndTime}
          disabledDate={disabledDate('end') as (date: Moment) => boolean}
        />
      </Form.Item>
    </div>
  );
};

DatesPicker.defaultProps = {
  onChange: () => {},
  startProps: {},
  endProps: {},
};

export default DatesPicker;
