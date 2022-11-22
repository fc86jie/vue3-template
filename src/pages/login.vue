<!--
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-21 11:13:56
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-22 10:08:28
 * @FilePath: \src\pages\login.vue
 * @Description: 
-->
<template>
  <div>Login Page</div>
</template>

<script setup lang="ts">
import request from '@/utils/axios';
const requestRes = async () => {
  let result = await request({
    url: 'https://www.fastmock.site/mock/e9a1b23fa9c2e1ab376abc83d7968df2/api/user',
    method: 'get',
  });
  console.log('-----------', result);
};
requestRes();
</script>

<style scoped></style>
