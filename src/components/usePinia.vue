<!--
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-21 11:01:44
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-21 11:07:10
 * @FilePath: \src\components\usePinia.vue
 * @Description: 
-->

<template>
  <div>{{ userStore.name }}</div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user';
const userStore = useUserStore();
userStore.updateName('李四');
</script>

<style scoped></style>
