<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'
<<<<<<< HEAD


=======
import type { ActivityResponse } from '@/app/kelas/types/activity'
import { useHttp } from '@/composables/http/http'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { data } = useHttp<ActivityResponse>(
  computed(
    () =>
      `/users/v1/myprogram/detail_activity/${route.params.id}/${route.params.topicId}/${route.query.id}`
  )
)
>>>>>>> 7dced142ccc89a8a9149a4ccfa07b8317c524c70
const tab = ref('upload_file')

const onChange = (options: {
  file: UploadFileInfo
  fileList: Array<UploadFileInfo>
  event?: Event
}) => {
  tab.value = 'upload_success'
}
</script>
<template>
<<<<<<< HEAD
  <div class="pt-20 p-3 md:px-20 space-y-5">

    <section class="md:flex space-y-5 md:space-y-0">
      <n-card class="w-1/2 drop-shadow-md" style="width: 856px">
        <div class="text-md font-semibold">
          Silakan unggah pengerjaan Tugas Praktik Mandiri Anda disini, setelah Anda membaca
          Instruksi Tugas Praktik Mandiri !
        </div>
=======
  <div class="pt-20 p-3 space-y-5">
    <section class="md:flex space-y-5 md:space-y-0">
      <n-card class="drop-shadow-md" style="width: 856px">
        <div class="prose min-w-full w-full max-w-full" v-html="data?.data.theory.description" />
>>>>>>> 7dced142ccc89a8a9149a4ccfa07b8317c524c70
        <div v-if="tab == 'upload_file'" class="justify-center items-center">
          <div class="flex justify-center items-center">
            <div>
              <n-upload multiple directory-dnd :max="5" @change="onChange">
                <div class="flex justify-center flex-col items-center gap-5">
                  <n-icon size="58" color="#8492A6"><i-ic:sharp-cloud-download /></n-icon>
                  <n-button type="primary" size="large">Pilih Berkas</n-button>
                </div>
              </n-upload>
            </div>
          </div>

          <n-alert class="mt-4" title="Info Text" type="info"
            >Format file yang didukung adalah png, pdf , docx, xlsx dan mp4. Ukuran maks. 20
            MB.</n-alert
          >
        </div>
        <div v-if="tab == 'upload_success'" class="card">
          <div class="flex justify-center items-center">
            <div class="justify-center items-center gap-5 flex-col">
              <div class="flex justify-center">
                <img src="@/assets/images/success.png" alt="" />
              </div>
              <div class="flex flex-col justify-center items-center gap-4">
                <h2 class="mt-4 text-lg font-semibold">File berhasil diunggah</h2>
                <p>File hasil pengerjaan tugas praktik mandiri telah berhasil diunggah</p>
                <n-button type="primary">Klik Activity Selanjutnya</n-button>
              </div>
            </div>
          </div>
        </div>
      </n-card>
    </section>
  </div>
</template>

<style scoped>
.card {
  width: 800px;
  height: 500px;
  border: 1px dashed #8f8d8d;
  padding: 20px;
  border-radius: 2%;
}
</style>