<!--
 * @Author: wangrenjie86@gmail.com
 * @Date: 2022-11-21 11:16:44
 * @LastEditors: wangrenjie86@gmail.com
 * @LastEditTime: 2022-11-21 11:17:47
 * @FilePath: \src\pages\vueUse.vue
 * @Description: 
-->

<template>
  <h1>测试 vueUse 的鼠标坐标</h1>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
</template>

<script lang="ts" setup>
import { useMouse } from '@vueuse/core';
const { x, y } = useMouse();
</script>
