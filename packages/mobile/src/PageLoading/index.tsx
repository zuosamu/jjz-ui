import React from 'react';
import LOADING from './loading.svg';
export const PageLoading = () => {
  return (
    <div className="jjz-loading">
      <div>
        <img className="jjz-loading-img" src={LOADING} alt="正在加载..." title="正在加载" />
      </div>
      <div>正在请求数据，精彩即将呈现</div>
    </div>
  );
};

export default PageLoading;
