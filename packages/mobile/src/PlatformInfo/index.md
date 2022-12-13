---
title: PlatformInfo
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/platformInfo
  title: PlatformInfo
mobile: false
---

# PlatformInfo

```tsx
import React, { useState } from 'react';
import { PlatformInfo } from '@jjz-ui/mobile';

const data = {
  name: '李丽',
  sex: '女',
  age: '18',
  marriageType: '未婚',
  interest: '游泳',
  job: '程序员',
};

const baseInfo = (data) => {
  return [
    {
      title: '姓名',
      value: data.name,
      nextTitle: '性别',
      nextValue: data.sex,
    },
    {
      title: '年龄',
      value: data.age,
      nextTitle: '婚姻状态',
      nextValue: data.marriageType,
    },
    {
      title: '兴趣',
      value: data.interest,
    },
    {
      title: '职业',
      value: data.job,
    },
  ];
};

export default () => {
  return (
    <div>
      <PlatformInfo infoList={baseInfo(data)} />
    </div>
  );
};
```

##

```tsx
import React, { useState } from 'react';
import { Space, Modal, Button } from 'antd';
import { PlatformInfo } from '@jjz-ui/mobile';

const data = {
  name: '李丽',
  sex: '女',
  age: '18',
  marriageType: '未婚',
  interest: '游泳',
  job: '程序员',
};
const familyData = {
  father: '李逵',
  mother: '彭莉',
  brother: '李丹',
  sister: '李萍',
  son: '李小子',
};

const baseInfo = (data) => {
  return [
    {
      title: '姓名',
      value: data.name,
      nextTitle: '性别',
      nextValue: data.sex,
    },
    {
      title: '年龄',
      value: data.age,
      nextTitle: '婚姻状态',
      nextValue: data.marriageType,
    },
    {
      title: '兴趣',
      value: data.interest,
    },
    {
      title: '职业',
      value: data.job,
    },
  ];
};
const familyInfo = (data) => {
  return [
    {
      title: '父亲',
      value: data.father,
      nextTitle: '母亲',
      nextValue: data.mother,
    },
    {
      title: '兄弟',
      value: data.brother,
      nextTitle: '姐妹',
      nextValue: data.sister,
    },
    {
      title: '儿子',
      value: data.son,
    },
  ];
};

export default () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShow2, setIsShow2] = useState<boolean>(false);
  return (
    <Space>
      <Button type="primary" onClick={() => setIsShow(true)}>
        平台信息
      </Button>
      <Modal
        title="平台信息"
        visible={isShow}
        onOk={() => {
          setIsShow(false);
        }}
        onCancel={() => {
          setIsShow(false);
        }}
      >
        <PlatformInfo infoList={baseInfo(data)} />
      </Modal>

      <Button type="primary" onClick={() => setIsShow2(true)}>
        个人信息
      </Button>
      <Modal
        title="个人信息"
        visible={isShow2}
        onOk={() => {
          setIsShow2(false);
        }}
        onCancel={() => {
          setIsShow2(false);
        }}
      >
        <h4>基本信息</h4>
        <PlatformInfo infoList={baseInfo(data)} />
        <h4 style={{ paddingTop: '16px' }}>家庭信息</h4>
        <PlatformInfo infoList={familyInfo(familyData)} />
      </Modal>
    </Space>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" defaultShowCode="true" />
