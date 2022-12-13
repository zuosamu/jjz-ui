---
title: Icon
nav:
  path: /icon
  title: Icon
group:
  path: /icon/icon
  title: Icon
mobile: false
---

# Demo

```tsx
import React from 'react';
import { Divider, Toast } from 'antd-mobile';
import Icon from '@jjz-ui/icon';
import './index.less';
const newIcons = [
  {
    name: '基础方向',
    icons: ['hz-arrow-up', 'hz-arrow-down', 'hz-arrow-right', 'hz-arrow-left'],
  },
  {
    name: 'input相关',
    icons: [
      'hz-input-arrow-up',
      'hz-input-arrow-down',
      'hz-input-arrow-up-small',
      'hz-input-arrow-down-small',
      'hz-input-clear',
      'hz-input-add',
      'hz-input-reduce',
      'hz-input-search',
      'hz-input-account',
      'hz-input-password-hide',
      'hz-input-password-show',
      'hz-input-password',
      'hz-input-password2',
      'hz-search-table',
      'hz-upload',
    ],
  },
  {
    name: 'emoji相关',
    icons: [
      'hz-emoji-anger',
      'hz-emoji-anger-faceted',
      'hz-emoji-sad',
      'hz-emoji-sad-faceted',
      'hz-emoji-smile',
      'hz-emoji-smile-faceted',
      'hz-emoji-flat',
      'hz-emoji-flat-faceted',
      'hz-emoji_happy',
      'hz-emoji-happy-faceted',
    ],
  },
  {
    name: '数字系列',
    icons: ['hz-number1', 'hz-number2', 'hz-number3', 'hz-number4', 'hz-number5'],
  },
  {
    name: '成功失败警告',
    icons: [
      'hz-error',
      'hz-process-error',
      'hz-tips-error-line',
      'hz-success',
      'hz-process-success',
      'hz-tips-success-line',
      'hz-warning',
      'hz-process-warning',
      'hz-tips-warning-line',
      'hz-info',
      'hz-tips-info-line',
      'hz-hint-one',
      'hz-hint-two',
      'hz-time',
      'hz-tips-wait-line',
      'hz-tips-disable-line',
      'hz-tips-refresh-line',
      'hz-verification',
      'hz-help',
      'hz-underway-faceted',
    ],
  },
  {
    name: '两两配对',
    icons: [
      'hz-step-arrow',
      'hz-switch-on',
      'hz-switch-off',
      'hz-detapicker-left',
      'hz-detapicker-right',
      'hz-preview-left',
      'hz-preview-right',
      'hz-preview-narrow',
      'hz-preview_enlarge',
      'hz-preview-spin-left',
      'hz-preview-spin-right',
      'hz-preview-close',
      'hz-pop-close',
      'hz-tag-close',
      'hz-tag-add',
      'hz-transfer-highlight-right',
      'hz-transfer-highlight-left',
      'hz-transfer-normal-left',
      'hz-transfer-normal-right',
      'hz-checkbox-select',
      'hz-checkbox-disable',
      'hz-list-select',
      'hz-sort-up',
      'hz-sort-down',
      'hz-tree-open',
      'hz-unfold',
      'hz-packup',
    ],
  },
  {
    name: '其他',
    icons: [
      'hz-great',
      'hz-star',
      'hz-add-icon',
      'hz-details-one',
      'hz-defaultgraph-image',
      'hz-delete',
      'hz-copy',
      'hz-document',
      'hz-details-two',
      'hz-details-three',
      'hz-edit',
      'hz-data',
      'hz-order-faceted',
      'hz-notfollow',
      'hz-nodate-smple',
      'hz-rise-faceted',
      'hz-phone',
      'hz-install-faceted',
      'hz-screen-table',
    ],
  },
];

/**
 * 一键粘贴
 * @param  {String} id [需要粘贴的内容]
 * @param  {String} attr [需要 copy 的属性，默认是 innerText，主要用途例如赋值 a 标签上的 href 链接]
 *
 * range + selection
 *
 * 1.创建一个 range
 * 2.把内容放入 range
 * 3.把 range 放入 selection
 *
 * 注意：参数 attr 不能是自定义属性
 * 注意：对于 user-select: none 的元素无效
 * 注意：当 id 为 false 且 attr 不会空，会直接复制 attr 的内容
 */
const copy = (id, attr) => {
  let target = null;

  if (attr) {
    target = document.createElement('div');
    target.id = 'tempTarget';
    target.style.opacity = '0';
    if (id) {
      let curNode = document.querySelector('#' + id);
      target.innerText = curNode[attr];
    } else {
      target.innerText = attr;
    }
    document.body.appendChild(target);
  } else {
    target = document.querySelector('#' + id);
  }

  try {
    let range = document.createRange();
    range.selectNode(target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    Toast.show({
      content: '复制成功！',
    });
  } catch (e) {
    Toast.show({
      content: '复制失败！',
    });
  }

  if (attr) {
    // remove temp target
    target.parentElement.removeChild(target);
  }
};

export default () => {
  return (
    <>
      {newIcons.map((el) => (
        <div>
          <Divider contentPosition="left">{el.name}</Divider>

          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {el.icons.map((i) => (
              <div
                key={i}
                className="iconBox"
                onClick={() => {
                  copy(false, `<Icon type="${i}" />`);
                }}
              >
                <Icon style={{ fontSize: '40px' }} type={i} />
                <div>{i}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
```

<!-- <API></API> -->
