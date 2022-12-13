/*
 * @Author: 陈立
 * @Date: 2022-03-07 11:19:55
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-14 14:22:35
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\Task\index.tsx
 */

import taskBlueIcon from 'public/img/task.png';
import taskOrangeIcon from 'public/img/task-overtime.png';
import React, { CSSProperties, FC } from 'react';
import './index.less';

export interface TaskProps {
  /** 图标的src，覆盖默认图标。 */
  icon?: string;
  /** 标题文本。 */
  title?: string;
  /** 卡片点击事件handler。 */
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * 选择预设的蓝色或橘色主题。
   */
  theme?: 'blue' | 'orange';
  /**
   * 标题右侧的操作按钮，数组每个元素对应一个button。
   * text是button的文本，props透传给button元素。
   */
  buttons?: Array<{
    text: string;
    props?: React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >;
  }>;
  /**
   * 卡片内容文本。
   * 可传入字符串或ReactNode。
   * 传入ReactNode的情况，该元素将取代卡片主体的container元素。
   */
  content?: React.ReactNode;
}

const Task: FC<TaskProps> = (props) => {
  const cssVar = {
    '--theme-color': props.theme === 'blue' ? '#1e77ff' : '#ff801b',
  } as CSSProperties;
  const iconSrc = props.theme === 'blue' ? taskBlueIcon : taskOrangeIcon;
  return (
    <div className="jjz-task-card" onClick={props.onClick} style={cssVar}>
      <div className="header">
        <img className="icon" src={props.icon || iconSrc} />
        <span className="title blod">{props.title}</span>
        {props.buttons?.length && (
          <div className="botton-container">
            {props.buttons.map((btn, index) => (
              <button key={index} {...btn.props}>
                {btn.text}
              </button>
            ))}
          </div>
        )}
      </div>
      {typeof props.content === 'string' ? (
        <div className="main">{props.content}</div>
      ) : (
        props.content
      )}
    </div>
  );
};

Task.defaultProps = {
  theme: 'blue',
};

export default Task;
