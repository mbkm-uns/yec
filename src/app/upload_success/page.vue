<script setup lang="ts"></script>
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
          class="card flex-col p-50"
          style="display: flex; flex-direction: column; align-items: center; justify-content: "
        >
          <div class="flex justify-center">
            <img src="@/assets/images/success.png" alt="" />
          </div>
          <h2 class="mt-4 text-lg font-semibold">File berhasil diunggah</h2>
          <p>File hasil pengerjaan tugas praktik mandiri telah berhasil diunggah</p>
        </div>
        <n-button type="primary">Klik Actifity Selanjutnya</n-button>
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
.object-top {
  align-self: flex-;
  object-position: top;
}
</style>
