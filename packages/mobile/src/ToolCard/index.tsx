/*
    工具列表card
    PC端展示分类卡片,可自定义底部操作按钮文字与操作方法
*/
import PUB_PNG from 'public/img/girl.png';
import React from 'react';
import { IToolCard } from './data';
import './index.less';

const ToolCard: React.FC<IToolCard> = (props) => {
  const { title, description, src, btns = [], showBtn = false } = props;
  //组织事件冒泡
  let stopPro = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div className="card-list">
      <div className="card-top">
        <img className="img" src={src || PUB_PNG} />
        <div className="desc">
          <h3 className="desc-title">{title}</h3>
          <p className="desc-desc">{description}</p>
        </div>
      </div>
      {showBtn && (
        <div className="card-bottom" onClick={(e) => stopPro(e)}>
          {btns.map((item) => {
            return (
              <p className="promote promoteOne" onClick={(e) => item.func(e)}>
                {item.title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ToolCard;
