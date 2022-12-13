---
title: FamilyMemberAvatar
nav:
  path: /hxuan-ui
  title: Card
  order: 1
group:
  path: /hxuan-ui/Customer
  title: Customer
mobile: false
---

## DEMO

家庭成员头像。

```tsx
import React from 'react';
import { FamilyMemberAvatar } from '@jjz-ui/pc';

export default () => {
  return (
    <>
      <p>所有预置头像</p>
      <div style={{ display: 'flex' }}>
        <FamilyMemberAvatar avatarType="man" />
        <FamilyMemberAvatar avatarType="woman" />
        <FamilyMemberAvatar avatarType="boy" />
        <FamilyMemberAvatar avatarType="girl" />
        <FamilyMemberAvatar avatarType="oldman" />
        <FamilyMemberAvatar avatarType="oldwoman" />
        <FamilyMemberAvatar avatarType="family" />
        <FamilyMemberAvatar avatarType="other" />
      </div>

      <div>被选中的头像</div>
      <FamilyMemberAvatar isSelected />

      <div>点击事件</div>
      <FamilyMemberAvatar onClick={() => alert('点击')} />
    </>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" defaultShowCode="true" />
