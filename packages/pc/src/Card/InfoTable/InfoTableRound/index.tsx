/*
 * @Author: 陈立
 * @Date: 2022-02-24 10:28:30
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-04 16:25:15
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\InfoTable\InfoTableRound\index.tsx
 */

import React, { FC } from 'react';
import { HXZB } from '../../../../typing';
import { hanldeDataValue } from '../../../utils';
import './index.less';

export interface InfoTableRoundProps extends HXZB.DataRenderProps {}

const InfoTableRound: FC<InfoTableRoundProps> = (props) => {
  const dataValueHandler = props.dataValueHandler || hanldeDataValue;
  return (
    <div className="info-table-round">
      {props.data?.map((row, index) => (
        <React.Fragment key={index}>
          {row.render ? (
            row.render(row.label, row.value, dataValueHandler(row.value, props.placeholder!))
          ) : (
            <div className="row">
              <span className={`label ${props.overflowEllipsis ? 'overflow-ellipsis' : ''}`}>
                {row.label}
              </span>
              <span className={`value ${props.overflowEllipsis ? 'overflow-ellipsis' : ''}`}>
                {dataValueHandler(row.value, props.placeholder!)}
              </span>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

InfoTableRound.defaultProps = {
  placeholder: '-',
  overflowEllipsis: false,
};

export default InfoTableRound;
