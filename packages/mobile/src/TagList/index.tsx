/*
 * @Author: 笙笙漫-陈伟
 * @Date: 2022-03-02 16:04:24
 * @LastEditors: 笙笙漫-陈伟
 * @LastEditTime: 2022-03-04 11:14:37
 * @FilePath: \HuizeTeamd:\huize\web\jjz\packages\jjz-ui\src\TagList\index.tsx
 */
import { Modal } from 'antd-mobile';
import React, { FC, useEffect, useRef, useState } from 'react';
import Tag from '../Tag';
import './index.less';

export interface TagListProps {
  /**
   * @description 自定义类名
   * @default --
   */
  className?: string;
  /**
   * @description 标签数组  [{label: ''}]
   * @default []
   */
  tagList: Array<any>;
  /**
   * @description 超出几行隐藏
   * @default 0
   */
  lines: number;
  /**
   * @description 显示添加按钮
   * @default false
   */
  showAdd?: boolean;
  /**
   * @description 添加按钮文案
   * @default 添加
   */
  addText?: string;
  /**
   * @description 添加按钮点击方法
   * @default （）=>{}
   */
  addFun?: Function;
  /**
   * @description 显示删除按钮，只能在lines为0时生效
   * @default false
   */
  showDel?: boolean;
  /**
   * @description 点击删除按钮的方法
   * @default (id, item) => {}
   */
  delFun?: Function;
  /**
   * @description 标签的属性，具体看Tag组件
   * @default {}
   */
  /**
   * @description 点击标签方法
   * @default （id, item）=>{}
   */
  tagClick?: Function;
  tagProps: any;
}

const TagList: FC<TagListProps> = (props) => {
  const {
    className,
    tagList,
    lines,
    showAdd,
    addText,
    addFun,
    showDel,
    delFun,
    tagClick,
    tagProps,
  } = props;
  const hideTag = useRef<any>();
  const tagBox = useRef<any>();
  const [selfTagList, setSelfTagList] = useState<any[]>([]);
  const [tagAllList, setTagAllList] = useState<any[]>([]);
  const [showMoreBtn, setShowMoreBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    if (tagList.length) {
      setSelfTagList(tagList);
      setTagAllList(tagList);
    }
  }, []);

  // 处理超出行数的隐藏标签
  useEffect(() => {
    if (lines > 0) {
      let targetHeight = hideTag.current.clientHeight * lines + hideTag.current.clientHeight / 2;
      let nowHeight = tagBox.current.clientHeight;
      if (nowHeight > targetHeight) {
        setShowData(false);
        setShowMoreBtn(true);
        setSelfTagList((tagList) => {
          let arr = tagList.slice(0);
          arr.pop();
          return arr;
        });
      } else {
        setShowData(true);
      }
    }
  }, [selfTagList]);

  //删除标签
  const selfDel = (id: any) => {
    let arr = selfTagList.filter((item) => item.id !== id);
    setSelfTagList(arr);
  };

  return (
    <>
      <div className={'dm-tag-list ' + (className ? className : '')}>
        <div className="hide-tag" ref={hideTag}>
          <Tag {...tagProps}>隐藏元素</Tag>
        </div>
        <div className={'hide-tag-box ' + (showData ? '' : showMoreBtn ? 'hide' : '')} ref={tagBox}>
          {selfTagList.map((el) => (
            <div
              key={el.id}
              className={'tag-box ' + (tagClick ? 'clickable' : '')}
              onClick={() => {
                tagClick && tagClick(el.id, el);
              }}
            >
              <Tag {...tagProps}>{el.name}</Tag>
              {lines === 0 && showDel ? (
                <div
                  className="close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    selfDel(el.id);
                    delFun && delFun(el.id, el);
                  }}
                ></div>
              ) : null}
            </div>
          ))}
          {showMoreBtn ? (
            <div
              className="tag-btn"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Tag {...tagProps}>...</Tag>
            </div>
          ) : null}
          {showAdd ? (
            <div
              className="tag-btn"
              onClick={() => {
                addFun && addFun();
              }}
            >
              <Tag {...tagProps}>
                <span className="icon">+</span>
                <span className="text">{addText || '添加'}</span>
              </Tag>
            </div>
          ) : null}
        </div>
      </div>
      <Modal
        visible={showModal}
        title="全部标签"
        content={
          <div className={'tag-modal-con'}>
            <div className={'all-tag-box'}>
              {tagAllList.map((el) => (
                <div key={el.id} className="tag-box">
                  <Tag {...tagProps}>{el.name}</Tag>
                </div>
              ))}
            </div>
          </div>
        }
        showCloseButton
        onClose={() => {
          setShowModal(false);
        }}
      />
    </>
  );
};
TagList.defaultProps = {
  tagList: [],
  lines: 0,
};
export default TagList;
