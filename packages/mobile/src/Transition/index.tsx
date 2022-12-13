/*
 * @Author: 笙笙漫-陈伟
 * @Date: 2022-02-15 17:19:44
 * @LastEditors: 笙笙漫-陈伟
 * @LastEditTime: 2022-02-16 16:00:23
 * @FilePath: \HuizeTeamd:\huize\web\jjz\packages\jjz-ui\src\Transition\index.tsx
 */
import React, { FC, ReactNode } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './index.less';

export interface TransitionProps {
  /**
   * @description 动画名称
   * @default fade
   */
  name?: string;
  /**
   * @description 显示隐藏
   * @default false
   */
  show: boolean;
  /**
   * @description 回调
   * @default () => {}
   */
  callback?: Function;
  children: ReactNode;
}

const Transition: FC<TransitionProps> = ({ name, show, callback, children }) => {
  return (
    <SwitchTransition>
      <CSSTransition
        classNames={name}
        onEntered={() => {
          if (callback) {
            callback();
          }
        }}
        addEndListener={(node, done) => {
          node.addEventListener('transitionend', done, false);
        }}
        key={show ? 'on' : 'off'}
      >
        {show ? children : <div className="transition-hide"></div>}
      </CSSTransition>
    </SwitchTransition>
  );
};
Transition.defaultProps = {
  name: 'fade',
  show: false,
};
export default Transition;
