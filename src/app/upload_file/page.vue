<route lang="yaml">
meta:
  layout: authenticated.layout
</route>

<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'

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
  <div class="pt-20 p-3 md:px-20 space-y-5">
    <div class="text-2xl font-semibold">Pengumpulan Tugas Praktik Mandiri</div>

    <section class="md:flex space-y-5 md:space-y-0">
      <n-card class="w-1/2 drop-shadow-md" style="width: 856px">
        <div class="text-lg font-semibold">
          Silakan unggah pengerjaan Tugas Praktik Mandiri Anda disini, setelah Anda membaca
          Instruksi Tugas Praktik Mandiri !
        </div>
        <div
          v-if="tab == 'upload_file'"
          class="card flex-col p-50"
          style="
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          "
        >
          <div class="justify-center">
            <n-upload multiple directory-dnd :max="5" @change="onChange">
              <div style="margin-bottom: 12px">
                <n-icon size="58" color="#8492A6"><i-ic:sharp-cloud-download /></n-icon>
              </div>
              <n-button type="primary" size="large">Pilih Berkas</n-button>
            </n-upload>
          </div>

          <n-alert class="mt-4" title="Info Text" type="info"
            >Format file yang didukung adalah png, pdf , docx, xlsx dan mp4. Ukuran maks. 20
            MB.</n-alert
          >
        </div>
        <div v-if="tab == 'upload_success'">
          <div
            class="card flex-col p-50"
            style="display: flex; flex-direction: column; align-items: center; justify-content: "
          >
            <div class="flex justify-center object-top">
              <img src="@/assets/images/success.png" alt="" />
            </div>
            <h2 class="mt-4 text-lg font-semibold">File berhasil diunggah</h2>
            <p>File hasil pengerjaan tugas praktik mandiri telah berhasil diunggah</p>
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
