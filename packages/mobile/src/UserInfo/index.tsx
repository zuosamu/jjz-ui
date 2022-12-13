import React, { FC } from 'react';
import Avatar from '../Avatar';
export interface UserInfoProps {
  user: { avatar: string };
  customerDetail: object;
}
export const UserInfo: FC<UserInfoProps> = ({ user, customerDetail }) => {
  return (
    <Avatar src={user?.avatar}>
      <div>姓名</div>
      {JSON.stringify(customerDetail)}
    </Avatar>
  );
};
export default UserInfo;
