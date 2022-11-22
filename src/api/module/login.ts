/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-22 10:10:33
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-22 10:15:40
 * @FilePath: \src\api\module\login.ts
 * @Description:
 */

import request from '@/utils/axios';

/**
 * 登录
 */

interface IResponseType<P = {}> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface ILogin {
  token: string;
  expires: number;
}
export const login = (username: string, password: string) => {
  return request<IResponseType<ILogin>>({
    url: '/api/auth/login',
    method: 'post',
    data: {
      username,
      password,
    },
  });
};
