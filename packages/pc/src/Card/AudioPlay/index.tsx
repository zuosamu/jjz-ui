/*
 * @Author: 刘晓容
 * @Date: 2022-02-15 17:11:18
 * @LastEditTime: 2022-03-10 11:28:42
 * @LastEditors: 刘晓容
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\AudioPlay\index.tsx
 */
import React, { useRef, useState } from 'react';
import './index.less';
interface iProps {
  localSoundFileId?: number;
  value?: any;
}
const AudioPlay: React.FC<iProps> = (props) => {
  const { localSoundFileId, value } = props;
  console.log('____>>>>>>>>>>>>>>>>>>>>>>', props);

  const [audioSrc, setAudioSrc] = useState(
    'http://music.163.com/song/media/outer/url?id=447925558.mp3',
  );
  const refDOM = useRef<any>(null);
  return (
    <div className="audio-wrap">
      {!audioSrc ? (
        <div
          className="audio-btn"
          onClick={() =>
            // getFileUrl(props?.localSoundFileId).then((res) => {
            //     setAudioSrc(res?.data?.fileUrl);
            //     setTimeout(() => {
            //         refDOM.current?.play();
            //     }, 50);
            // })
            {
              setAudioSrc('http://music.163.com/#/song?id=25906124');
              setTimeout(() => {
                refDOM.current?.play();
              }, 50);
            }
          }
        />
      ) : null}
      <audio ref={refDOM} style={{ height: '30px', background: '#fff' }} src={audioSrc} controls />
    </div>
  );
};
export default AudioPlay;
