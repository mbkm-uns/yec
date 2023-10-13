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

    <div class="flex">
      <section class="md:flex space-y-5 md:space-y-0">
        <n-card class="w-1/2" style="width: 856px">
          <div class="relative">
            <img src="@/assets/images/landingpage/detail_kelas/cover.png" class="rounded-lg" />
          </div>
          <n-tabs size="large" :tabs-padding="10" pane-style="padding: 20px;">
            <n-tab-pane name="Dekripsi">
              <div class="space-y-5">
                <div :class="{ 'h-auto': showFullText }">
                  <p class="text-sm">
                    <b>Mengelola Kinerja Karyawan Untuk Menjadi Manajer Sumber Daya Manusia</b>
                    adalah kelas yang disusun untuk peserta yang ingin belajar mengelola kinerja
                    karyawan khususnya bagi yang berprofesi sebagai manajer sumber daya manusia.
                    Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI
                    Nomor 149 Tahun 2020 Tentang Manajemen Sumber Daya Manusia. <br /><br />
                    Peserta akan mendapatkan pengetahuan tentang Memahami dasar-dasar manajemen
                    kinerja karyawan, merancang indikator kinerja karyawan, merancang proses
                    monitoring kinerja karyawan, merancang proses evaluasi kinerja karyawan,
                    menyusun perencanaan peningkatan kinerja karyawan <br /><br />
                    Kompetensi yang disasar dalam program ini adalah peserta mampu memahami
                    dasar-dasar manajemen kinerja karyawan, merancang indikator kinerja karyawan,
                    bersikap teliti dan cermat dalam menyusun indikator kinerja karyawan, mampu
                    merancang proses monitoring kinerja karyawan, merancang proses evaluasi kinerja
                    karyawan, menyusun perencanaan peningkatan kinerja karyawan ...
                    <button
                      v-if="!showFullText"
                      @click="showFullText = true"
                      class="text-orange-500 font-semibold hover:underline focus:outline-none"
                    >
                      Lihat Selengkapnya
                    </button>
                  </p>
                </div>
                <div>
                  <p class="text-lg font-semibold">Bidang Studi</p>
                  <p>Kelas Prakerja 2023 yang Tersedia</p>
                </div>
                <div>
                  <p class="text-lg font-semibold">Lembaga Pengajar</p>
                  <div class="inline-flex items-center space-x-10 mt-3">
                    <img src="@/assets/images/landingpage/detail_kelas/logo_yec.png" />
                    <p class="text-sm">
                      Yureka Education Center (YEC) berdiri pada tahun 2010 dengan nama awal Eureka
                      Tour, sebuah layanan jasa tour spesialis Kampung Inggris. Saat ini YEC fokus
                      membantu setiap peserta menjadi individu lebih baik. Tidak hanya sebatas
                      menjadi jasa tour, namun juga menjadi konsultan pendidikan dan media yang
                      membantu menjadikan diri lebih baik dengan kemudahan akses informasi dan
                      program pelatihan terkait tes TOEFL, IELTS, Persiapan Kerja dan Pembelajaran
                      Bahasa Inggris Sehari-hari.
                    </p>
                  </div>
                </div>
                <div>
                  <p class="text-lg font-semibold">Fasilitator</p>
                  <img
                    src="@/assets/images/landingpage/detail_kelas/fasilitator.png"
                    class="mt-3"
                  />
                  <p class="mt-3">
                    <b>Asep Ismail</b>, adalah Manajer Senior Sumber Daya Manusia (Human Resource
                    Senior Manager) di PT Yureka Edukasi Cipta sejak tahun 2021 sampai sekarang,
                    beliau bertugas Memimpin dan mengelola keseluruhan kebijakan organisasi dan
                    kinerja SDM di perusahaan. Asep Ismail juga berpengalaman menjadi Chief of
                    People di KOMERCE.CO.ID pada tahun 2020 sampai 2021 yang bertugas Memimpin dan
                    mengelola keseluruhan kinerja karyawan dari level staff hingga level manajer,
                    serta merumuskan dan mengawasi keseluruhan kebijakan yang berlaku di perusahaan.
                    Selain itu Asep Ismail juga pernah bekerja sebegai Training & People Development
                    Manager di PT Payfazz Teknologi Nusantara pada tahun 2019 sampai 2020 dan juga
                    pernah bekerja sebagai Regional Training & Development Manager di MAPAN (PT.
                    RUMA) dari tahun 2015 sampai 2019 bertugas untuk memimpin dan mengelola
                    keseluruhan kinerja tim penjualan dengan merancang pelatihan yang sesuai dan
                    memastikan keseluruhan kinerja tim penjualan baik dengan berkoordinasi bersama
                    Manajer Penjualan.
                  </p>
                </div>
              </div>
            </n-tab-pane>
            <n-tab-pane name="Ulasan">
              <n-icon>
                <i-mdi:comment-quote-outline class="text-7xl text-g" />
              </n-icon>
              <p class="text-center text-lg font-semibold">Belum ada ulasan untuk kelas ini</p>
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </section>

      <section>
        <div class="ml-5">
          <div class="space-y-2">
            <details class="overflow-hidden rounded border border-gray-300 w-80">
              <summary
                class="flex items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
              >
                <span class="text-md font-medium"> Aktivitas </span>
              </summary>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Pembuka </span> <br />
                  <span class="text-xs font-small"> 4 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-y-1">
                    <span class="text-sm font-semibold"> 1. Perkenalan Tenaga Pelatih </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Membaca E-Book</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:03:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 2. Perkenalan Lembaga Pelatihan </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Menonton Video</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:02:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 3. Aktivitas WIIFM </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Membaca E-Book</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:20:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 4. Pre Test </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Mengerjakan Soal</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:15:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Pertemuan 1 </span> <br />
                  <span class="text-xs font-small"> 5 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 1. Live Webinar </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Berdiskusi Daring</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>03:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 2. Kuis Pertemuan 1 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Mengerjakan Soal</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 3. Presensi Pertemuan 1 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:03:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 4. Intruksi Tugas Praktik Mandiri</span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 5. Pengumpulan Tugas Praktik Mandiri</span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>01:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Pertemuan 2 </span> <br />
                  <span class="text-xs font-small"> 5 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 1. Live Webinar </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Berdiskusi Daring</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>03:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 2. Kuis Pertemuan 2 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Mengerjakan Soal</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 3. Presensi Pertemuan 2 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:03:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 4. Intruksi Tugas Praktik Mandiri</span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 5. Pengumpulan Tugas Praktik Mandiri</span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>01:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Pertemuan 3 </span> <br />
                  <span class="text-xs font-small"> 5 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 1. Live Webinar </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Berdiskusi Daring</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>03:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 2. Kuis Pertemuan 3 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Mengerjakan Soal</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 3. Presensi Pertemuan 3 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:03:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 4. Intruksi Tugas Praktik Mandiri</span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 5. Pengumpulan Tugas Praktik Mandiri</span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>01:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Pertemuan 4 </span> <br />
                  <span class="text-xs font-small"> 5 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 1. Live Webinar </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Berdiskusi Daring</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>03:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 2. Kuis Pertemuan 4 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Mengerjakan Soal</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 3. Presensi Pertemuan 4 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:03:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 4. Intruksi Tugas Praktik Mandiri</span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 5. Pengumpulan Tugas Praktik Mandiri</span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>01:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Pertemuan 5 </span> <br />
                  <span class="text-xs font-small"> 3 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 1. Live Webinar </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Berdiskusi Daring</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>03:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 2. Kuis Pertemuan 5 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Mengerjakan Soal</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 3. Presensi Pertemuan 5 </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:03:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Post Test </span> <br />
                  <span class="text-xs font-small"> 1 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 1. Post Test </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Mengerjakan Soal</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:20:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Penutup </span> <br />
                  <span class="text-xs font-small"> 2 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 1. Feedback Form Program Prakerja </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Evaluasi</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:03:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 2. Penutupan Program Pelatihan </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Membaca E-book</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:01:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300">
              <summary
                class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-0">
                  <span class="text-sm font-semibold"> Unjuk Keterampilan </span> <br />
                  <span class="text-xs font-small"> 2 Aktivitas </span>
                </div>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 1. Instruksi Unjuk Keterampilan </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Praktik Mandiri</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>00:05:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <div class="space-x-1">
                    <span class="text-sm font-semibold"> 2. [Pengumpulan] Unjuk Keterampilan </span>
                    <div class="flex space-x-4 text-xs text-gray-500">
                      <div class="flex space-x-1">
                        <i-quill:paper />
                        <p>Berdiskusi Daring</p>
                      </div>
                      <div class="flex space-x-1">
                        <i-mdi:clock-outline />
                        <p>02:00:00</p>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </details>

            <details class="overflow-hidden rounded border border-gray-300 w-80">
              <summary
                class="flex items-center justify-center gap-2 bg-white p-4 text-gray-900 transition"
              >
                <div class="space-y-1 text-center">
                  <span class="text-lg font-medium text-blue-500"> Rp 1.500.000 </span>
                  <n-button strong round block type="primary"> Beli Kelas Online </n-button>
                </div>
              </summary>
            </details>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
