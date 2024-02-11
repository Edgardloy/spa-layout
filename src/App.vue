<script setup>
import { ElConfigProvider } from 'element-plus'

</script>

<template>
  <ElConfigProvider
    namespace="el"
    locale="ru"
    :message="{ max: 1 }"
    size="small"
  >
    <RouterView />
  </ElConfigProvider>
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html,
body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  .size;

  #app {
    .size;
  }
}
</style>
