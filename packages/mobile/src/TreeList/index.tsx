/*
 * @Author: hz21076980
 * @Date: 2022-02-21 11:10:35
 * @LastEditors: hz21076980
 * @LastEditTime: 2022-03-14 16:20:54
 * @FilePath: \jjz\packages\jjz-ui\src\TreeList\index.tsx
 */
import { Input, Tree } from 'antd';
import type { DataNode } from 'antd/es/tree';
import React, { FC, useState } from 'react';
import './index.less';
const { Search } = Input;

export interface TreeListProps {
  /**
   * @description 树形列表数据
   * @default --
   */
  treeData: ITreeData[];
  /**
   * @description 默认是否展开所有列表
   * @default false
   */
  defaultExpandAll: boolean;
}

interface ITreeData {
  key: string | number;
  title: string;
  state: string;
  children?: ITreeData[];
  [key: string]: any;
}
const getParentKey = (key: any, tree: ITreeData[]): any => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some((item) => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};

const TreeList: FC<TreeListProps> = ({ treeData, defaultExpandAll = false }) => {
  const [searchVal, setSearchVal] = useState<string>('');
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>();
  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const dataList: any = [];
  const onChange = (e: any) => {
    const {
      target: { value },
    } = e;
    const expandedKey = dataList
      .map((item: any) => {
        if (item.title.indexOf(value) > -1) return getParentKey(item.key, treeData);
        return null;
      })
      .filter((item: any, index: number, self: any) => item && self.indexOf(item) === index);
    setSearchVal(value);
    console.log('expandedKeyaaa', expandedKey);

    setExpandedKeys(expandedKey);
    setAutoExpandParent(true);
  };
  const onSelect = (keys: React.Key[], info: any) => {
    console.log('onSelect', keys, info);
  };
  const onExpand = (keys: React.Key[]) => {
    setExpandedKeys(keys);
    setAutoExpandParent(false);
  };
  const loop = (data: ITreeData[]): DataNode[] =>
    data?.map((item) => {
      const index = item.title.indexOf(searchVal);
      const isContain = index > -1;
      const beforeStr = item.title.substring(0, index);
      const afterStr = item.title.substring(index + searchVal.length);
      const title = (
        <>
          <span>
            {isContain ? beforeStr : ''}
            <span className={isContain ? 'tree-search-value' : ''}>
              {isContain ? searchVal : item.title}
            </span>
            {isContain ? afterStr : ''}
          </span>
          <span className="tree-state">{item?.state}</span>
        </>
      );
      dataList.push({ key: item.key, title: item.title });
      if (item.children) {
        return { title, key: item.key, children: loop(item.children) };
      }
      return { title, key: item.key };
    });
  const tData = loop(treeData);

  return (
    <div className="treelist">
      <Search placeholder="search" onChange={onChange} allowClear />
      <Tree
        treeData={tData}
        onSelect={onSelect}
        onExpand={onExpand}
        expandedKeys={expandedKeys}
        autoExpandParent={autoExpandParent}
        defaultExpandAll={defaultExpandAll}
        blockNode
      />
    </div>
  );
};
export default TreeList;
