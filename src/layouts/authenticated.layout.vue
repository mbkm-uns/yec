<script setup lang="ts">
import { RouterView } from 'vue-router'
import navbar from '../layouts/components/authenticated/navbar.vue'
import Footer from './components/default/footer.vue'
import { useHttp } from '@/composables/http/http'
import { defineComponent, ref } from 'vue'
import {useRouter} from 'vue-router'

const { data } = useHttp('/users/v1/member/detail')
const showNotification = ref(false)
const page = ref(1)
const value = ref()
const router = useRouter()
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
watch(data, () => {
if(!data.value?.data.fullname) router.push('/setting')
})
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
            <n-select v-model:value="value" :options="options" />
          </n-space>
          &nbsp;
          <n-card>
            <h8 class="font-bold"> Redeem Voucher Kelas </h8>
            <p>Redeem Kelas Satuan Berhasil !!</p>
            &nbsp;
            <p>3/10/2023 13:39</p>
          </n-card>
          &nbsp;

          <n-card>
            <h8 class="font-bold"> Beli Kelas Berhasil </h8>
            <p>
              Anda berhasil masuk ke Kelas Program Mengolah Data Penjualan dengan Microsoft Excel
              untuk Menjadi Admin Input Data
            </p>
            &nbsp;
            <p>4/10/2023 10:10</p>
          </n-card>
          &nbsp;

          <n-card>
            <h8 class="font-bold"> Redeem Voucher Kelas</h8>
            <p>Redeem Voucher Kelas Satuan berhasil !!</p>
            &nbsp;
            <p>3/10/2023 13:39</p>
          </n-card>
          &nbsp;

          <n-card>
            <h8 class="font-bold"> Beli Kelas Berhasil </h8>
            <p>
              Anda berhasil masuk ke Kelas Program Mengolah Data Penjualan dengan Microsoft Excel
              untuk Menjadi Admin Input Data
            </p>
            &nbsp;
            <p>4/10/2023 10:10</p>
          </n-card>
          &nbsp;
          <n-card>
            <h8 class="font-bold"> Beli Kelas Berhasil </h8>
            <p>
              Anda berhasil masuk ke Kelas Program Mengolah Data Penjualan dengan Microsoft Excel
              untuk Menjadi Admin Input Data
            </p>
            &nbsp;
            <p>4/10/2023 10:10</p>
          </n-card>
          &nbsp;
          <template #footer>
            <n-pagination
              v-model:page="page"
              :page-count="100"
              class="display: flex; padding: 10px; justify-content: center; align-items: center; gap: 15px;"
            />
            <!-- <n-button @click="showNotification = true">Footer</n-button> -->
          </template>
        </n-drawer-content>
      </n-drawer>
    <router-view>
    </router-view>
    <Footer></Footer>
  </main>
</template>
<style>
/*  */
</style>
