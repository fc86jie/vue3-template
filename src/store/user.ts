/*
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-21 11:00:15
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-21 11:07:12
 * @FilePath: \src\store\user.ts
 * @Description:
 */

import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
