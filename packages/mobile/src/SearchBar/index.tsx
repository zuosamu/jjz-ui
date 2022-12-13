/*
 * @Author: 陈立
 * @Date: 2022-02-25 17:58:46
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-01 14:33:39
 * @FilePath: \jjz\packages\jjz-ui\src\SearchBar\index.tsx
 */

import React, { FC } from 'react';
import './index.less';
import searchIcon from 'public/img/search/search.png';
import clearIcon from 'public/img/search/clear.png';

export interface SearchBarProps {
  /** 是否显示右侧清空和取消按钮。 */
  showClear?: boolean;
  /** 是否显示左侧搜索图标。 */
  showSearchIcon?: boolean;
  /**
   * 仅当variant为with-cancel有对应元素。
   * 点击清除图标的事件handeler。
   */
  onClear?: React.MouseEventHandler<HTMLImageElement>;
  /**
   * 仅当variant为with-cancel有对应元素。
   * 点击取消的事件handeler。
   */
  onCancel?: React.MouseEventHandler<HTMLImageElement>;
  /**
   * 直接传递给input元素的属性，如value、onChange等。
   */
  inputProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  /**
   * 自定义元素，渲染为searchbar的最后一个子元素。
   * 因为外部div是flex布局，你可以用order来控制自定义元素的渲染位置。
   */
  children?: React.ReactNode;
}

const SearchBar: FC<SearchBarProps> = (props) => {
  return (
    <div className="jjz-search-bar">
      {props.showSearchIcon && <img className="search-icon" src={searchIcon} alt="search" />}
      <input {...props.inputProps} />
      {props.showClear && (
        <div className="cancel-container">
          <img className="clear-icon" src={clearIcon} alt="clear" onClick={props.onClear} />
          <hr />
          <span className="cancel-text" onClick={props.onCancel}>
            取消
          </span>
        </div>
      )}
      {props.children}
    </div>
  );
};

SearchBar.defaultProps = {
  showSearchIcon: true,
  showClear: false,
};

export default SearchBar;
