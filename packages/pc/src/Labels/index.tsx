import { TagsFilled } from '@ant-design/icons';
import { FormDialog, FormItem } from '@formily/antd';
import { createSchemaField } from '@formily/react';
import { Button, Card, Modal, Space, Tag } from 'antd';
import type { FC } from 'react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useRouteMatch } from 'umi';
import { useRequest } from 'ahooks';
const { CheckableTag } = Tag;
import { UpDownSwitch } from '../';

interface LabelProps {
  title: string;
  selectedTags: any[];
  handleChange: (tag: any, checked: any) => void;
  list: any[];
}

interface CheckLabelProps {
  value: any;
  onChange: (tags: (tags: any[]) => any[]) => void;
  labels: any[];
}

export interface LabelsProps {
  getCustomerDetailTagList: (params: { name: string }) => Promise<any>;
  postTagList: (params: any) => {};
  getTagList: (params: {}) => Promise<any>;
}

const Label: FC<LabelProps> = ({ title, selectedTags, handleChange, list = [] }) =>
  useMemo(() => {
    return (
      <Card size="small" bordered={false} title={title}>
        {list?.map((tag) => (
          <CheckableTag
            style={{ marginBottom: '5px', border: '1px solid #eee' }}
            key={tag.id}
            checked={selectedTags.find((i) => i.id === tag.id)}
            onChange={(checked) => handleChange(tag, checked)}
          >
            {tag?.labelName}
          </CheckableTag>
        ))}
      </Card>
    );
  }, [selectedTags, title]);

const checkLabel: FC<CheckLabelProps> = ({ value, onChange, labels }) => {
  console.log('value', value);
  return (
    <div style={{ overflow: 'auto', height: '600px' }}>
      {labels?.map((i) => {
        const title = i?.labelGroupName;
        return (
          <Label
            key={title}
            list={i?.labelList || []}
            selectedTags={value}
            handleChange={(tag, checked) => {
              onChange(
                checked ? [...value, tag] : value.filter((i: { id: any }) => i.id !== tag.id),
              );
            }}
            title={title}
          />
        );
      })}
    </div>
  );
};

const SchemaField = createSchemaField({
  components: {
    checkLabel,
    FormItem,
  },
});

export const Labels: FC<LabelsProps> = ({ getCustomerDetailTagList, postTagList, getTagList }) => {
  const { params } = useRouteMatch();
  // 用于更新列表
  const { data: labels, loading } = useRequest(getCustomerDetailTagList, {
    defaultParams: [{ name: '' }],
  });
  const { data: showTag, refresh } = useRequest(getTagList, { defaultParams: [params] });
  console.log(showTag);
  return (
    <Space align="start">
      <Button
        size="small"
        disabled={loading}
        style={{ marginRight: '8px' }}
        onClick={() => {
          const schema = {
            type: 'object',
            properties: {
              array: {
                type: 'array',
                'x-decorator': 'FormItem',
                'x-component': 'checkLabel',
                'x-component-props': {
                  labels,
                },
              },
            },
          };
          const dialog = FormDialog('标签库', () => {
            return (
              <>
                <SchemaField schema={schema} />
                <FormDialog.Footer />
              </>
            );
          });
          dialog
            .forOpen((props, next) => {
              next({
                initialValues: {
                  array: showTag,
                },
              });
            })
            .forConfirm(async (props, next) => {
              await postTagList({
                ...params,
                tagContents: props?.values?.array?.map(({ id }: { id: any }) => id),
              });
              await refresh();
              dialog.close();
            })
            .forCancel((payload, next) => {
              next(payload);
            })
            .open();
        }}
        icon={<TagsFilled style={{ color: '1890ff' }} />}
        type="primary"
      >
        标签库
      </Button>
      <UpDownSwitch>
        {showTag?.map((i: any) => (
          <Tag
            key={i.id}
            closable
            style={{ marginBottom: '3px', marginTop: '3px' }}
            onClose={async (e) => {
              e.preventDefault();
              await postTagList({
                ...params,
                tagContents: showTag.map(({ id }: any) => id).filter((id: any) => id !== i.id),
              });
              // 保存完毕之后发起请求
              refresh();
            }}
          >
            {i.name}({i.labelName})
          </Tag>
        ))}
      </UpDownSwitch>
    </Space>
  );
};
export default Labels;
