/*
 * @Author: 陈立
 * @Date: 2022-03-01 15:19:16
 * @LastEditors: 陈立
 * @LastEditTime: 2022-03-04 16:26:49
 * @FilePath: \jjz\packages\hxuan-ui\src\Card\Contact\index.tsx
 */
///<reference path="../../index.d.ts" />
import email from 'public/img/contact/card_email.png';
import phone from 'public/img/contact/card_phone.png';
import QQ from 'public/img/contact/card_qq.png';
import wechat from 'public/img/contact/card_wechat.png';
import closeEye from 'public/img/contact/close_eye.png';
import openEye from 'public/img/contact/open_eye.png';
import React, { FC, useState } from 'react';
import { HXZB } from '../../../typing';
import { hanldeDataValue } from '../../utils';
import './index.less';

const ContactIconMap = {
  wechat,
  QQ,
  email,
  phone,
  other: null,
} as const;

const ContactTypeTextMap = {
  wechat: '微信',
  QQ: 'QQ',
  email: '邮箱',
  phone: '手机',
  other: '',
} as const;

export interface ContactProps extends HXZB.DataRenderProps {
  /**
   * 联系方式类型。若设置为除other外的值，卡片顶部会显示一个对应图标。
   */
  contactType?: 'wechat' | 'QQ' | 'email' | 'phone' | 'other';
  /**  */
  contactTypeText?: string;
  /**
   * 自定义联系方式图标，优先级高于类型默认图标。
   */
  contactIcon?: string;
  /** 联系号码 */
  contactCode?: string;
  /**
   * 是否启用脱敏显示。
   * 若为true，将默认脱敏显示联系方式，需点击按钮显示明文。
   */
  encrypt?: boolean;
  /**
   * 自定义脱敏联系方式的函数。默认的脱敏是显示为6个*号。
   * 若需要自定义逻辑或者contactType为other，则需要传入此方法。
   */
  encryptMethod?: (contact: string) => string;
  /**
   * 自定义渲染footer元素。
   */
  footer?: React.ReactNode;
}

const Contact: FC<ContactProps> = (props) => {
  const [isShowCode, setIsShowCode] = useState<boolean>(!props.encrypt);
  const contactTypeIcon = props.contactIcon || ContactIconMap[props.contactType!];
  const dataValueHandler = props.dataValueHandler || hanldeDataValue;
  return (
    <div className="jjz-contact-card">
      <div className="header">
        {contactTypeIcon && <img className="contact-icon" src={contactTypeIcon} />}
        <span className="contact-type-text blod">
          {props.contactTypeText || ContactTypeTextMap[props.contactType!]}
        </span>
        <span className="contact-code blod">{isShowCode ? props.contactCode : '******'}</span>
        {props.encrypt && (
          <img
            className="encrypt-icon"
            alt="encrypt"
            src={isShowCode ? closeEye : openEye}
            onClick={() => setIsShowCode(!isShowCode)}
          />
        )}
      </div>
      <div className="main">
        {props.data?.map((row, index) => (
          <React.Fragment key={index}>
            {row.render ? (
              row.render(row.label, row.value, dataValueHandler(row.value, props.placeholder!))
            ) : (
              <div className="row">
                <span className={`label ${props.overflowEllipsis ? 'overflow-ellipsis' : ''}`}>
                  {row.label}
                </span>
                <span className={`value ${props.overflowEllipsis ? 'overflow-ellipsis' : ''}`}>
                  {dataValueHandler(row.value, props.placeholder!)}
                </span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {props.footer && <div className="footer">{props.footer}</div>}
    </div>
  );
};

Contact.defaultProps = {
  contactType: 'other',
  contactCode: '',
  overflowEllipsis: true,
};

export default Contact;
