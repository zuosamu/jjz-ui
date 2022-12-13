---
title: CollapseList
nav:
  path: /core
  title: 核心组件库
group:
  path: /core/collapseList
  title: CollapseList
---

# CollapseList

```tsx
import React from 'react';
import { Divider } from 'antd-mobile';
import { CollapseList, Avatar } from '@jjz-ui/mobile';
import Icon from 'public/img/boy.png';
export default () => {
  return (
    <div>
      <Divider contentPosition="left">普通用法</Divider>
      <CollapseList size={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <Avatar key={i} src={Icon} spaceProps={{ direction: 'horizontal', block: true }}>
            <div>
              男孩
              <br />
              大陆未来守护者
            </div>
          </Avatar>
        ))}
        <div>只计算节点下面的list</div>
      </CollapseList>
    </div>
  );
};
```

<API></API>

## 源码

<code src="./index.tsx" />
