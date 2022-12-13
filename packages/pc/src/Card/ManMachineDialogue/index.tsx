/*
 * @Author: 刘晓容
 * @Date: 2022-03-09 14:48:25
 * @LastEditors: 刘晓容
 * @LastEditTime: 2022-03-14 15:03:48
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\ManMachineDialogue\index.tsx
 */
import React, { ReactNode } from 'react';
import './index.less';
import Icon from 'public/img/boy.png';

interface ManMachineDialogueProps {
  /**
   * key: key值必传,用于区分左右侧分布，且值仅能为leftPerson和rightPerson
   * */
  tData: {
    key: string;
    name: string;
    content: string;
    src: string;
  }[];
}
const ManMachineDialogue: React.FC<ManMachineDialogueProps> = (props) => {
  const { tData } = props;

  return (
    <ul>
      {tData.length &&
        tData.map((item, index) => {
          return (
            <li className="item" key={index}>
              <div className={item.key === 'leftPerson' ? 'avatar-row left' : 'avatar-row right'}>
                {item.key === 'leftPerson' ? (
                  <div className="avatar-title">
                    <img className="svgs-icon" src={item.src} />
                    <label>{item.name}</label>
                  </div>
                ) : (
                  <div className="avatar-title">
                    <label>{item.name}</label>
                    <img className="svgs-icon" src={item.src} />
                  </div>
                )}
              </div>
              <div className={item.key === 'leftPerson' ? 'cnt left' : 'cnt right'}>
                <div className="cnt-text">
                  <label>{item.content}</label>
                </div>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

ManMachineDialogue.defaultProps = {
  tData: [
    {
      key: 'leftPerson',
      name: '机器人',
      content: '我是慧择机器人，你是要咨询保险的事情吗？',
      src: Icon,
    },
    {
      key: 'leftPerson',
      name: '机器人',
      content: '你好，请问还在线吗？',
      src: Icon,
    },
    {
      key: 'rightPerson',
      name: 'ME',
      content: '我是，我在',
      src: Icon,
    },
    {
      key: 'rightPerson',
      name: 'ME',
      content: '想咨询下养老保险',
      src: Icon,
    },
  ],
};
export default ManMachineDialogue;
