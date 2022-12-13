import React, { FC, ReactNode, useEffect, useState } from 'react';
import './index.less';

export interface TagProps {
  /**
   * @description 自定义类名
   * @default --
   */
  className?: string;
  /**
   * @description 标签颜色
   * @default #1e77ff
   */
  color: string;
  /**
   * @description 字体颜色
   * @default #fff
   */
  textColor: string;
  /**
   * @description border颜色
   * @default #fff
   */
  borderColor?: string;
  /**
   * @description 是否空心
   * @default false
   */
  plain?: boolean;
  /**
   * @description 是否圆角
   * @default false
   */
  round?: boolean;
  /**
   * @description 是否标记样式
   * @default false
   */
  mark?: boolean;
  /**
   * @description 阴影颜色
   * @default 透明
   */
  shadow?: string;
  /**
   * @description 圆角大小
   * @default 2px
   */
  radius: string;
  children: ReactNode;
}

const Tag: FC<TagProps> = ({
  className,
  color,
  textColor,
  borderColor,
  plain,
  round,
  mark,
  shadow,
  radius,
  children,
}) => {
  const [style, setStyle] = useState<any>({});
  useEffect(() => {
    setStyle({
      '--shadow': shadow,
      '--color': color,
      '--textColor': textColor,
      '--radius': radius,
      '--borderColor': borderColor || (plain ? color : textColor),
    });
  }, []);
  const setClass = () => {
    let classList = ['dm-tag'];
    if (className) {
      classList.push(className);
    }
    if (plain) {
      classList.push('dm-tag-plain');
    }
    if (round) {
      classList.push('dm-tag-round');
    }
    if (mark) {
      classList.push('dm-tag-mark');
    }
    return classList.join(' ');
  };
  return (
    <>
      {children ? (
        <div className="dm-tag-box" style={style}>
          <div className={setClass()}>
            <div className="con">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};
Tag.defaultProps = {
  color: '#1e77ff',
  textColor: '#fff',
  radius: '2px',
  shadow: 'transparent',
};
export default Tag;
