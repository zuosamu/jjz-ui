/*
 * @Author: hz21076980
 * @Date: 2022-02-16 15:24:59
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-14 14:34:02
 * @FilePath: \jjz\packages\jjz-ui\src\Label\index.tsx
 */
import React, { FC, useState, useEffect } from 'react';
import { Tag } from 'antd';
import './index.less';

export interface LabelProps {
  labelList: object[];
}
export interface labelListProps {
  id: string | number;
  content: string;
  [key: string]: any;
}

const Label: FC<LabelProps> = ({ labelList }) => {
  const [showMoreTag, setShowDetail] = useState<boolean>(false);
  const [openTextVis, setOpenTextVis] = useState<boolean>(false);

  const handleClose = (id: string | number) => {
    console.log(id);
  };
  useEffect(() => {
    const item = document.getElementById('Labels');
    if (item) {
      if (item.scrollWidth > item.offsetWidth) {
        setOpenTextVis(true);
      } else {
        setOpenTextVis(false);
        setShowDetail(false);
      }
    }
  }, [labelList]);

  return (
    <div className="jjz-label" style={{ position: 'relative' }}>
      <div id="Labels" className="content">
        <span style={{ fontWeight: 500, color: 'rgba(0, 0, 0, 0.85)', marginRight: '8px' }}>
          标签:
        </span>
        {(labelList || []).map((item: any) => {
          const { id, content } = item;
          return (
            <span
              key={`tag ${id}`}
              className={['tag', item.markSource && 'more-padding'].join(' ')}
            >
              <Tag key={id} closable onClose={() => handleClose(id)}>
                {item?.markSource && <div className="AI-word">AI</div>}
                {content}
              </Tag>
            </span>
          );
        })}
        {showMoreTag && (
          <div className="show-more-content" onMouseLeave={() => setShowDetail(false)}>
            {(labelList || []).map((item: any) => {
              const { id, content } = item;
              return (
                <span
                  key={`tag_${id}`}
                  className={['tag', item?.markSource && 'more-padding'].join(' ')}
                >
                  <Tag key={id} closable onClose={() => handleClose(id)}>
                    {item?.markSource && <div className="AI-word">AI</div>}
                    {content}
                  </Tag>
                </span>
              );
            })}
          </div>
        )}
      </div>
      {openTextVis && (
        <span className="show-more" onMouseEnter={() => setShowDetail(true)}>
          ...
        </span>
      )}
    </div>
  );
};
export default Label;
