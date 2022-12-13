/*
 * @Author: 起德红
 * @Date: 2022-02-18 16:18:18
 * @LastEditors: 左森君
 * @LastEditTime: 2022-03-01 11:56:14
 * @FilePath: /jjzui/packages/jjz-ui/src/NestingTabs/index.tsx
 */

/**
 * tabs以及下一层tab
 *
 */
import { Tabs } from 'antd';
import React, { useState } from 'react';
import { INestingTabs } from './data';
import './index.less';
const { TabPane } = Tabs;

const NestingTabs: React.FC<INestingTabs> = (props) => {
  const { defaultActiveTab, tabsChange, NestingChange, tabsData = [] } = props;
  const [selectIndex, setSlelecIndex] = useState<string | number>(0);
  //第一层tabs改变
  const TopChange = (ind: string): void => {
    setSlelecIndex(0);
    tabsChange(tabsData[ind].value);
  };
  //第二层改变
  const secondChange = (k: number, val: string) => () => {
    setSlelecIndex(k);
    NestingChange(val);
  };
  return (
    <div className="tab-style">
      <Tabs onChange={TopChange} defaultActiveKey={defaultActiveTab}>
        {tabsData.length > 0 &&
          tabsData.map((tab, index) => {
            return (
              <TabPane tab={tab.content} key={index}>
                {tab?.nesting ? (
                  <div className="twoDiv">
                    {tab.nesting.map((item, ind: number) => {
                      return (
                        <span
                          className={ind === selectIndex ? 'tabTwo selected' : 'tabTwo'}
                          key={item.value}
                          onClick={secondChange(ind, item.value)}
                        >
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                ) : (
                  <div className="noTab"></div>
                )}
              </TabPane>
            );
          })}
      </Tabs>
    </div>
  );
};
NestingTabs.defaultProps = {
  defaultActiveTab: '0',
};
export default NestingTabs;
