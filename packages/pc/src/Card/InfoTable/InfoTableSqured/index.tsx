/*
 * @Author: 陈立
 * @Date: 2022-02-24 16:15:25
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-04 16:28:55
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\InfoTable\InfoTableSqured\index.tsx
 */

import React, { FC, useState } from 'react';
import { hanldeDataValue } from '../../../utils';
import './index.less';
import arrow from 'public/img/up-arrow.png';
import { HXZB } from '../../../../typing';

interface InfoTableSquredProps extends HXZB.DataRenderProps {
  /**
   * 设置默认展示多少行，超出的部分须点击展开按钮查看。
   */
  defaultShowRows: number;
  /**
   * 自定义渲染展开更多按钮的函数。
   * 其中传入的showMore为true时，代表已展开更多。
   */
  moreButtonRender: (showMore: boolean) => React.ReactNode;
}

const DefaultRowRender: FC<{ label: string; displayValue: string; overflowEllipsis: boolean }> = (
  props,
) => {
  return (
    <div className="row">
      <span className={`label ${props.overflowEllipsis ? 'overflow-ellipsis' : ''}`}>
        {props.label}
      </span>
      <span className={`value ${props.overflowEllipsis ? 'overflow-ellipsis' : ''}`}>
        {props.displayValue}
      </span>
    </div>
  );
};

const Divider: FC = () => <hr className="divider" />;

const InfoTableSqured: FC<InfoTableSquredProps> = (props) => {
  const [showMore, setShowMore] = useState<boolean>(false);
  const dataValueHandler = props.dataValueHandler || hanldeDataValue;
  const hasShowMoreBtn = props.defaultShowRows < props.data.length;

  const renderRows = (row: InfoTableSquredProps['data'][number], index: number) => {
    const displayValue = dataValueHandler(row.value, props.placeholder!);
    const rowElement = row.render ? (
      row.render(row.label, row.value, displayValue)
    ) : (
      <DefaultRowRender
        label={row.label}
        displayValue={displayValue}
        overflowEllipsis={props.overflowEllipsis!}
      />
    );
    return (
      <React.Fragment key={index}>
        {rowElement}
        <Divider />
      </React.Fragment>
    );
  };

  return (
    <div className="info-table-squred">
      {props.data?.slice(0, props.defaultShowRows)?.map(renderRows)}
      {hasShowMoreBtn && showMore && props.data.slice(props.defaultShowRows).map(renderRows)}
      <div className="more" onClick={() => setShowMore(!showMore)}>
        {props.moreButtonRender ? (
          props.moreButtonRender(showMore)
        ) : (
          <>
            <span>{`点击${showMore ? '收起' : '查看'}更多`}</span>
            <img
              src={arrow}
              className="arrow"
              style={showMore ? {} : { transform: 'rotate(180deg)' }}
            />
          </>
        )}
      </div>
    </div>
  );
};

InfoTableSqured.defaultProps = {
  placeholder: '-',
  defaultShowRows: 5,
  overflowEllipsis: false,
};

export default InfoTableSqured;
