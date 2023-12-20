<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from '../layouts/components/authenticated/navbar.vue'
import Footer from './components/default/footer.vue'
import { useHttp, useHttpMutation } from '@/composables/http/http'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { type NotificationResponse } from '../app/notification/types/notification'
import { useMessage } from 'naive-ui'
const message = useMessage()
const filterNotification = ref({
  direction: undefined
})
const { data } = useHttp('/users/v1/member/detail')
const showNotification = ref(false)
const page = ref(1)
const router = useRouter()

provide('auth', computed(() =>  data.value.data))

const options = [
  {
    label: 'Terbaru',
    value: 'desc'
  },
  {
    label: 'Terlama',
    value: 'asc'
  }
]
const selectedID = ref()
const { mutate: readNotification } = useHttpMutation(
  computed(() => {
    return `/notification/v1/member/read/${selectedID.value}`
  }),
  {
    method: 'PUT',
    queryOptions: {
      onSuccess: () => {
        refetch()
        message.success('Berhasil membaca notifikasi')
      }
    }
  }
)
const {
  data: notification,
  isLoading,
  refetch
} = useHttp<NotificationResponse>('/notification/v1/member/list', {
  params: computed(() => {
    return {
      page: page.value,
      limit: 10,
      dir: filterNotification.value.direction,
      sort_by: '_id'
    }
  })
})
watch(data, () => {
  if (!data.value?.data.fullname) router.push('/setting')
})
const onReadNotification = (id: string) => {
  selectedID.value = id
  readNotification({})
}
</script>

<template>
  <main>
    <navbar :full-name="data?.data.fullname" @click:notification="showNotification = true"></navbar>
    <n-drawer v-model:show="showNotification" :width="454">
      <n-drawer-content>
        <template #header>
          <n-space>
            <n-text>Notifikasi</n-text>
          </n-space>
          <n-space vertical> </n-space>
        </template>
        <n-space vertical>
          <n-select v-model:value="filterNotification.direction" :options="options" />
        </n-space>
        <n-spin :show="isLoading">
          <n-empty v-if="notification?.data.list?.length == 0"></n-empty>
          <div class="space-y-3">
            <n-card
              v-for="item in notification?.data.list"
              :key="item.id"
              :class="{ '!bg-orange-100/50': !item.read }"
              hoverable
              role="button"
              @click="onReadNotification(item.id)"
            >
              <h8 class="font-bold"> {{ item.notification.title }} </h8>
              <div class="prose min-w-full w-full max-w-full" v-html="item.notification.description"></div>
              &nbsp;
              <p>{{ item.created_at }}</p>
            </n-card>
          </div>
        </n-spin>
        &nbsp; &nbsp;
        <template #footer>
          <n-pagination v-model:page="page" :page-count="notification?.data.total_page" />
          <!-- <n-button @click="showNotification = true">Footer</n-button> -->
        </template>
      </n-drawer-content>
    </n-drawer>
    <router-view> </router-view>
    <Footer></Footer>
  </main>
</template>
<style>
/*  */
</style>
