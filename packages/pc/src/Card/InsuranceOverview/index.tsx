/*
 * @Author: 陈立
 * @Date: 2022-03-02 14:28:29
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-04 16:34:36
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\InsuranceOverview\index.tsx
 */

import React, { FC } from 'react';
import { HXZB } from '../../../typing';
import { hanldeDataValue } from '../../utils';
import './index.less';

export interface InsuranceOverviewProps extends HXZB.DataRenderProps {
  /**
   * 指定卡片样式变体。
   */
  variant?: 'A' | 'B';
  /** 显示在header的标题文本 */
  title: string;
  /** 若variant为B，可传入副标题。 */
  subtitle?: string;
  /**  */
  banner: string;
  /** 自定义footer元素 */
  footer?: React.ReactNode;
}

const InsuranceOverview: FC<InsuranceOverviewProps> = (props) => {
  const dataValueHandler = props.dataValueHandler || hanldeDataValue;

  return (
    <div className="jjz-insurance-overview-card">
      {props.variant === 'A' ? (
        <div className="header-A">
          <span className="title blod">{props.title}</span>
        </div>
      ) : (
        <div className="header-B">
          <span className="title blod">{props.title}</span>
          {props.subtitle && <span className="subtitle">{props.subtitle}</span>}
          {props.banner && <div className="banner">{props.banner}</div>}
        </div>
      )}
      <div className={`main variant-${props.variant}`}>
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
      {props.footer && <div className="footer">{props.footer}</div>}
    </div>
  );
};

InsuranceOverview.defaultProps = {
  variant: 'A',
  overflowEllipsis: false,
};

export default InsuranceOverview;
