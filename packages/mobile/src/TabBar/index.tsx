/*
 * @Author: 笙笙漫-陈伟
 * @Date: 2022-02-28 14:36:00
 * @LastEditors: 笙笙漫-陈伟
 * @LastEditTime: 2022-03-01 10:37:17
 * @FilePath: \HuizeTeamd:\huize\web\jjz\packages\hxuan-ui\src\TabBar\index.tsx
 */
import React, { FC, useEffect, useState, useRef } from 'react';
import { Tabs } from 'antd';
import './index.less';

export interface TabBarProps {
  /**
   * @description 自定义类名
   * @default --
   */
  className?: string;
  /**
   * @description 默认选中的tab页
   * @default --
   */
  activeKey: string;
  /**
   * @description key的名称
   * @default id
   */
  keyName: string;
  /**
   * @description 值的名称
   * @default name
   */
  labelName: string;
  /**
   * @description tab改变的方法 (activeKey,activeData) => {}
   * @default (activeKey:string,activeData:any) => {}
   */
  tabChange?: Function;
  /**
   * @description tab数据 [{id: '', name: ''}]
   * @default --
   */
  tabsList: Array<any>;
  /**
   * @description 字体大小
   * @default #999
   */
  fontSize: string;

  /**
   * @description 默认字体颜色
   * @default #999
   */
  defaultColor: string;
  /**
   * @description 选中颜色
   * @default #1e77ff
   */
  color: string;
  /**
   * @description 下划线颜色
   * @default #EBF4FF
   */
  borderColor: string;
  /**
   * @description 下划块颜色
   * @default  默认同color
   */
  moveBarColor?: string;
  /**
   * @description 下划块宽度
   * @default 100%
   */
  moveBarWidth?: string;
}

const TabBar: FC<TabBarProps> = ({
  className,
  activeKey,
  keyName,
  labelName,
  tabChange,
  tabsList,
  fontSize,
  defaultColor,
  color,
  borderColor,
  moveBarColor,
  moveBarWidth,
}) => {
  const [style, setStyle] = useState<any>({});
  const [selfList, setSelfList] = useState<any>([]);
  const [selfActiveKey, setSelfActiveKey] = useState(activeKey);
  const isInit = useRef(false);

  useEffect(() => {
    if (tabsList.length) {
      const arr = tabsList.map((item) => {
        item[keyName] = String(item[keyName]);
        return {
          ...item,
        };
      });
      setSelfList(arr);
    }
  }, [tabsList]);

  useEffect(() => {
    if (selfList.length && !isInit.current) {
      tabChange &&
        tabChange(
          selfActiveKey,
          selfList.find((item: any) => item[keyName] === selfActiveKey),
        );
      isInit.current = true;
    }
  }, [selfList]);
  useEffect(() => {
    setStyle({
      '--fontSize': fontSize,
      '--defaultColor': defaultColor,
      '--color': color,
      '--borderColor': borderColor,
      '--moveBarColor': moveBarColor || color,
      '--moveBarWidth': moveBarWidth || '100%',
    });
  }, [color]);
  return (
    <>
      {selfList.length > 1 ? (
        <div className={'dm-tabbar ' + (className ? className : '')} style={style}>
          <Tabs
            activeKey={selfActiveKey}
            onChange={(tab) => {
              setSelfActiveKey(tab);
              const activeTab = selfList.filter((el: any) => el[keyName] === tab);
              tabChange && tabChange(tab, activeTab[0]);
            }}
          >
            {selfList.map((tab: any) => {
              return <Tabs.TabPane tab={tab[labelName]} key={tab[keyName]} />;
            })}
          </Tabs>
        </div>
      ) : null}
    </>
  );
};
TabBar.defaultProps = {
  activeKey: '1',
  keyName: 'id',
  labelName: 'name',
  tabsList: [],
  fontSize: '14px',
  defaultColor: '#999',
  color: '#1e77ff',
  borderColor: '#EBF4FF',
};
export default TabBar;
