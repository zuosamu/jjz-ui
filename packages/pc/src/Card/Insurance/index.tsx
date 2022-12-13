/*
 * @Author: 左森君
 * @Date: 2021-12-08 16:14:11
 * @LastEditors: 左森君
 * @LastEditTime: 2021-12-24 16:54:55
 * @FilePath: /hxys-share-h5/src/components/Goods/index.tsx
 */
import React, { FC } from 'react';
import { Image } from 'antd-mobile';
import Highlighter from 'react-highlight-words';
import './index.less';

export interface InsuranceProps {
  title: string;
  des: string;
  tips: string[];
  inside: string;
  price: string | number;
  commission: string;
  src: string;
  onClick: () => void;
  highLight: (string | RegExp)[];
  fire: Boolean;
}

const Insurance: FC<InsuranceProps> = ({
  title,
  des,
  tips,
  inside,
  price,
  commission,
  src,
  onClick,
  highLight,
  fire,
}) => {
  return (
    <div className="hx-goods" onClick={onClick}>
      <div className="hx-goods-display">
        <h2 className={`ellipsis ${fire ? 'dm-goods-fire' : ''}`}>
          <Highlighter
            highlightClassName="high-light"
            searchWords={highLight || []}
            autoEscape={true}
            textToHighlight={title || ''}
          />
        </h2>
        <div className="des ellipsis">
          <Highlighter
            highlightClassName="high-light"
            searchWords={highLight || []}
            autoEscape={true}
            textToHighlight={des || ''}
          />
        </div>
        {tips?.length ? (
          <div className="tips ellipsis">
            {tips?.map((i) => (
              <span key={i} className="tip">
                {i}
              </span>
            ))}
          </div>
        ) : null}
        <div className="inside">
          <span style={{ color: '#C5C5C5' }}>投保年龄</span> {inside}
        </div>
        <div className="price">
          ￥<span className="num">{price}</span>起{commission ? '/ 佣金率' + commission : ''}
        </div>
      </div>
      <div className="hx-goods-logo">
        <Image src={src} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Insurance;
