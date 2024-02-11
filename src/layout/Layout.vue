<script setup>
import { ElHeader, ElMain, ElButton } from 'element-plus'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'

const { currentRoute } = useRouter()
const userStore = useUserStore()

console.log('🚀 ~ currentRoute.value:', currentRoute.value);
watch(
  () => currentRoute.value,
  () => {
    console.log('🚀 ~ currentRoute.value:', currentRoute.value);
  }
)
</script>

<template>
  <router-view>
    <template #default="{ Component, route }">
      <keep-alive>
        <el-container>
          <ElHeader>Title  <ElButton @click="userStore.logout()">Lodgout</ElButton></ElHeader>
          <ElMain>
            <component :is="Component" :key="route.fullPath" />
          </ElMain>
        </el-container>
      </keep-alive>
    </template>
  </router-view>
</template>

<style scoped></style>
