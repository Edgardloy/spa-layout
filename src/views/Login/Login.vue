<script setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
const { currentRoute, push } = useRouter()

const userStore = useUserStore()

const onLogin = () => {
  userStore.setUserInfo({
    name: 'test'
  })
  push({ name: 'Home' })
}
</script>

<template>
  <div>
    <ElButton @click="onLogin">Lodgin</ElButton>
  </div>
</template>

<style scoped>
</style>
