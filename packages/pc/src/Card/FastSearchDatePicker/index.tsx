/*
 * @Author: 刘晓容
 * @Date: 2022-03-10 11:31:37
 * @LastEditors: 刘晓容
 * @LastEditTime: 2022-03-10 11:38:21
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\FastSearchDatePicker\index.tsx
 */
import React, { useState } from 'react';
import { DatePicker, Space, Radio } from 'antd';
import './index.less';
import moment from 'moment';

interface FastSearchDatePickerProps {
  /**目前仅支持以下几类选项，通过key值来进行匹配，key值唯一，label可自定义
   * [  today,
   * seven-day,
   * one-month,
   * three-month,
   * six-month,
   * one-year,
   * customize  ]
   */
  radioList: { key: string; label: string }[];
  defaultRadio: string;
  changeDatePicker: Function;
}

const FastSearchDatePicker: React.FC<FastSearchDatePickerProps> = (props) => {
  const { radioList, defaultRadio } = props;

  const [activeRadio, setActiveRadio] = useState(''); //Radio的值
  const [sobj, setSobj] = useState({ startTime: moment().subtract(7, 'days'), endTime: moment() });

  const changeRadio = (e: any) => {
    setActiveRadio(e.target.value);
    const type = e.target.value;
    switch (type) {
      case 'today':
        sobj.startTime = moment();
        sobj.endTime = moment();
        break;
      case 'seven-day':
        sobj.endTime = moment();
        sobj.startTime = moment().subtract(7, 'days');
        break;
      case 'one-month':
        sobj.endTime = moment();
        sobj.startTime = moment().subtract(1, 'months');
        break;
      case 'three-month':
        sobj.endTime = moment();
        sobj.startTime = moment().subtract(3, 'months');
        break;
      case 'six-month':
        sobj.endTime = moment();
        sobj.startTime = moment().subtract(6, 'months');
        break;
      case 'one-year':
        sobj.endTime = moment();
        sobj.startTime = moment().subtract(1, 'years');
        break;
    }
    setSobj({ ...sobj });
    props.changeDatePicker(sobj);
  };
  const changeStartTime = (startVal: any) => {
    setActiveRadio('customize');
    setSobj({ ...sobj, startTime: startVal });
    props.changeDatePicker(sobj);
  };
  const changeEndTime = (endVal: any) => {
    setActiveRadio('customize');
    setSobj({ ...sobj, endTime: endVal });
    props.changeDatePicker(sobj);
  };

  return (
    <div style={{ margin: '0 0 24px 0' }}>
      <Space>
        <Radio.Group value={activeRadio || defaultRadio} buttonStyle="solid" onChange={changeRadio}>
          {radioList.length &&
            radioList.map((item, index) => {
              return (
                <Radio.Button value={item.key} key={index}>
                  {item.label}
                </Radio.Button>
              );
            })}
        </Radio.Group>
        <div className="date-gap">
          <DatePicker
            placeholder="开始时间"
            allowClear={false}
            value={sobj.startTime}
            onChange={changeStartTime}
          />
          <label className="date-gap-line">—</label>
          <DatePicker
            placeholder="结束时间"
            allowClear={false}
            value={sobj.endTime}
            onChange={changeEndTime}
          />
        </div>
      </Space>
    </div>
  );
};

FastSearchDatePicker.defaultProps = {
  radioList: [
    {
      key: 'today',
      label: '今天',
    },
    {
      key: 'seven-day',
      label: '最近七天',
    },
    {
      key: 'one-month',
      label: '最近一个月',
    },
    {
      key: 'customize',
      label: '自定义',
    },
  ],
  defaultRadio: 'seven-day',
};
export default FastSearchDatePicker;
