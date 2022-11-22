/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-21 11:30:23
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-22 20:56:25
 * @FilePath: \src\utils\axios.ts
 * @Description:
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create(); // Request interceptors

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
); // Response interceptors

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    return response;
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

export default service;
