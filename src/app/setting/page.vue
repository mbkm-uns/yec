<script setup lang="ts"></script>
<template>
  <div class="p-10 pr-10 mt-5 px-10 md:px-20 space-y-5">
    <nav class="flex items-center space-x-2 px-80">
      <router-link class="text-amber-600 text-lg" to="/beranda">Beranda</router-link>
      <span class="text-gray-400 text-lg">/</span>
      <span class="text-gray-600 text-lg">Setting</span>
    </nav>

    <div class="flex px-80">
      <n-tabs size="large" :tabs-padding="20" pane-style="padding: 20px;">
        <n-tab-pane name="Data Diri" class="ml-auto">
          <section class="flex flex-col">
            <n-card class="justify-center text-left px-20">
              <div
                class="flex px-10 p-10 rounded-md"
                style="background-color: rgba(212, 229, 254, 1)"
              >
                <n-icon class="mr-4 pt-1 w-10 h-10 text-blue" size="30">
                  <i-ion:alert-circle-sharp />
                </n-icon>
                <p class="text-blue text-lg">
                  Akun ini hanya dapat digunakan untuk 1 peserta pelatihan, pastikan nama Anda
                  sesuai dengan nama yang terdaftar pada akun prakerja.go.id (perhatikan penggunaan
                  huruf dan tanda baca, wajib sama dengan nama akun di prakerja.go.id). Hal ini akan
                  berpengaruh pada sertifikat Kartu Prakerja Anda
                </p>
              </div>
              <n-form class="mt-5">
                <n-form-item path="name" type="text">
                  <template v-slot:label>
                    <span class="text-lg font-semibold">Nama Lengkap</span>
                  </template>
                  <n-input placeholder="Nama Lengkap"> </n-input>
                </n-form-item>
                <n-form-item path="phone" type="number">
                  <template v-slot:label>
                    <span class="text-lg font-semibold">No. Telephone</span>
                  </template>
                  <n-input placeholder="Nomer telephone"> </n-input>
                </n-form-item>
                <n-form-item path="email" type="email">
                  <template v-slot:label>
                    <span class="text-lg font-semibold">Email</span>
                  </template>
                  <n-input placeholder="Email"> </n-input>
                </n-form-item>
                <n-form-item path="tanggallahir" type="date">
                  <template v-slot:label>
                    <span class="text-lg font-semibold">Tanggal Lahir</span>
                  </template>
                  <n-input placeholder="Tanggal Lahir"> </n-input>
                </n-form-item>
              </n-form>
            </n-card>
          </section>
        </n-tab-pane>
      </n-tabs>
    </div>
  </div>
</template>

<style scoped>
.text-blue {
  color: #204dd4;
}
</style>
