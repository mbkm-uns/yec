<script setup lang="ts">
import { ref } from 'vue'

const showFullText = ref(false)
</script>
<template>
  <div class="pt-20 p-3 md:px-20 space-y-5">
    <nav class="flex items-center space-x-2">
      <router-link class="text-amber-600 text-lg" to="/beranda">Beranda</router-link>
      <span class="text-gray-400 text-lg">/</span>
      <span class="text-gray-600 text-lg">Kelas</span>
    </nav>
    <section class="md:flex justify-between space-y-3">
      <div>
        <h2 class="text-2xl font-semibold">
          Merancang & Mengembangkan Website Wordpress bagi Pengembang Web Pemula (Bauran)
        </h2>
      </div>
    </section>
    <section class="md:flex space-y-5 md:space-y-0">
      <n-card class="w-1/2" style="width: 856px">
        <div class="relative">
          <img src="@/assets/images/landingpage/detail_kelas/cover.png" class="rounded-lg" />
        </div>
        <n-tabs size="large" :tabs-padding="10" pane-style="padding: 20px;">
          <n-tab-pane name="Dekripsi">
            <div class="h-16 overflow-hidden" :class="{ 'h-auto': showFullText }">
              <p>
                Mengelola Kinerja Karyawan Untuk Menjadi Manajer Sumber Daya Manusia adalah kelas
                yang disusun untuk peserta yang ingin belajar mengelola kinerja karyawan khususnya
                bagi yang berprofesi sebagai manajer sumber daya manusia. Pelatihan ini menggunakan
                metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 149 Tahun 2020 Tentang
                Manajemen Sumber Daya Manusia. Peserta akan mendapatkan pengetahuan tentang Memahami
                dasar-dasar manajemen kinerja karyawan, merancang indikator kinerja karyawan,
                merancang proses monitoring kinerja karyawan, merancang proses evaluasi kinerja
                karyawan, menyusun perencanaan peningkatan kinerja karyawan Kompetensi yang disasar
                dalam program ini adalah peserta mampu memahami dasar-dasar manajemen kinerja
                karyawan, merancang indikator kinerja karyawan, bersikap teliti dan cermat dalam
                menyusun indikator kinerja karyawan, mampu merancang proses monitoring kinerja
                karyawan, merancang proses evaluasi kinerja karyawan, menyusun perencanaan
                peningkatan kinerja karyawan ...
                <button
                  v-if="!showFullText"
                  @click="showFullText = true"
                  class="text-blue-500 hover:underline focus:outline-none"
                >
                  Lihat Selengkapnya
                </button>
              </p>
            </div>
          </n-tab-pane>
          <n-tab-pane name="Ulasan"></n-tab-pane>
        </n-tabs>
      </n-card>
    </section>
  </div>
</template>

<style scoped></style>
