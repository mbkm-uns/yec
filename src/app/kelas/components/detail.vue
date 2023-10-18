<script setup lang="ts">
import { ref } from 'vue'

const expanded = ref(false)

const toggleExpand = () => {
  expanded.value = !expanded.value
}
</script>

<template>
  <div class="relative">
    <img src="@/assets/images/landingpage/detail_kelas/cover.png" class="rounded-lg" />
  </div>
  <n-tabs size="large" :tabs-padding="10" pane-style="padding: 20px;">
    <n-tab-pane name="Dekripsi">
      <div class="space-y-5">
        <div class="space-y-3">
          <p class="text-sm">
            <b>Mengelola Kinerja Karyawan Untuk Menjadi Manajer Sumber Daya Manusia</b> adalah kelas
            yang disusun untuk peserta yang ingin belajar mengelola kinerja karyawan khususnya bagi
            yang berprofesi sebagai manajer sumber daya manusia. Pelatihan ini menggunakan metode
            ajar webinar. Kelas ini merujuk pada SKKNI Nomor 149 Tahun 2020 Tentang Manajemen Sumber
            Daya Manusia.
          </p>
          <p class="text-sm">
            Peserta akan mendapatkan pengetahuan tentang Memahami dasar-dasar manajemen kinerja
            karyawan, merancang indikator kinerja karyawan, merancang proses monitoring kinerja
            karyawan, merancang proses evaluasi kinerja karyawan, menyusun perencanaan peningkatan
            kinerja karyawan.
          </p>
          <div class="space-y-3" v-if="expanded">
            <p class="text-sm">
              Kompetensi yang disasar dalam program ini adalah peserta mampu memahami dasar-dasar
              manajemen kinerja karyawan, merancang indikator kinerja karyawan, bersikap teliti dan
              cermat dalam menyusun indikator kinerja karyawan, mampu merancang proses monitoring
              kinerja karyawan, merancang proses evaluasi kinerja karyawan, menyusun perencanaan
              peningkatan kinerja karyawan.
            </p>
            <p class="text-sm">Berikut rincian kompetensinya:</p>
            <div class="space-y-3">
              <p class="text-lg font-medium">Tujuan Umum</p>
              <p class="text-sm">
                Peserta pelatihan mampu merumuskan indikator kinerja karyawan hingga menyusun
                perencanaan peningkatan kinerja karyawan untuk menunjang pekerjaannya sehari-hari
                sebagai Manajer Sumber Daya Manusia dengan menunjukkan minimal enam puluh persen
                penguasaan materi pada saat unjuk keterampilan.
              </p>
              <p class="text-sm">Di akhir pelatihan peserta mampu:</p>
              <p class="text-sm">Pengetahuan:</p>
              <!-- <ul> -->
                <li class="text-sm">
                  Peserta mampu memahami dasar-dasar manajemen kinerja karyawan
                </li>
              <!-- </ul> -->
              <p class="text-sm">Keterampilan:</p>
              <!-- <ul> -->
                <li class="text-sm">Peserta mampu merancang indikator kinerja karyawan</li>
                <li class="text-sm">
                  Peserta mampu merancang proses monitoring dan evaluasi kinerja karyawan
                </li>
                <li class="text-sm">
                  Peserta mampu menyusun perencanaan peningkatan kinerja karyawan
                </li>
              <!-- </ul> -->
              <p class="text-sm">Sikap:</p>
              <!-- <ul> -->
                <li class="text-sm">
                  Peserta mampu bersikap teliti dan cermat dalam menyusun indikator kinerja karyawan
                </li>
              <!-- </ul> -->
              <p class="text-lg font-medium">Kelompok Sasaran</p>
              <p class="text-sm">Pelatihan ini dapat diikuti oleh peserta yang:</p>
              <!-- <ul> -->
                <li class="text-sm">Berusia 18-60 tahun</li>
                <li class="text-sm">
                  Latar belakang pendidikan minimal pendidikan SMA dan yang memiliki ketertarikan
                  mengelola kinerja karyawan
                </li>
                <li class="text-sm">Memiliki gawai (gadget), tablet, PC atau laptop</li>
                <li class="text-sm">Memiliki akun zoom</li>
                <li class="text-sm">
                  Memiliki pengetahuan dasar tentang pengelolaan kinerja karyawan dan sumber daya
                  manusia
                </li>
                <li class="text-sm">Tingkat Kesulitan pelatihan ini adalah tingkat pemula</li>
              <!-- </ul> -->
            </div>
          </div>

          <button
            @click="toggleExpand"
            class="text-orange-500 font-semibold hover:underline focus:outline-none"
          >
            {{ expanded ? 'Sembunyikan' : 'Lihat Selengkapnya' }}
          </button>
        </div>

        <div>
          <p class="text-lg font-semibold">Bidang Studi</p>
          <p class="text-sm">Kelas Prakerja 2023 yang Tersedia</p>
        </div>
        <div>
          <p class="text-lg font-semibold">Lembaga Pengajar</p>
          <div class="inline-flex items-center space-x-10 mt-3">
            <img src="@/assets/images/landingpage/detail_kelas/logo_yec.png" />
            <p class="text-sm">
              Yureka Education Center (YEC) berdiri pada tahun 2010 dengan nama awal Eureka Tour,
              sebuah layanan jasa tour spesialis Kampung Inggris. Saat ini YEC fokus membantu setiap
              peserta menjadi individu lebih baik. Tidak hanya sebatas menjadi jasa tour, namun juga
              menjadi konsultan pendidikan dan media yang membantu menjadikan diri lebih baik dengan
              kemudahan akses informasi dan program pelatihan terkait tes TOEFL, IELTS, Persiapan
              Kerja dan Pembelajaran Bahasa Inggris Sehari-hari.
            </p>
          </div>
        </div>
        <div>
          <p class="text-lg font-semibold">Fasilitator</p>
          <img src="@/assets/images/landingpage/detail_kelas/fasilitator.png" class="mt-3" />
          <p class="mt-3">
            <b>Asep Ismail</b>, adalah Manajer Senior Sumber Daya Manusia (Human Resource Senior
            Manager) di PT Yureka Edukasi Cipta sejak tahun 2021 sampai sekarang, beliau bertugas
            Memimpin dan mengelola keseluruhan kebijakan organisasi dan kinerja SDM di perusahaan.
            Asep Ismail juga berpengalaman menjadi Chief of People di KOMERCE.CO.ID pada tahun 2020
            sampai 2021 yang bertugas Memimpin dan mengelola keseluruhan kinerja karyawan dari level
            staff hingga level manajer, serta merumuskan dan mengawasi keseluruhan kebijakan yang
            berlaku di perusahaan. Selain itu Asep Ismail juga pernah bekerja sebegai Training &
            People Development Manager di PT Payfazz Teknologi Nusantara pada tahun 2019 sampai 2020
            dan juga pernah bekerja sebagai Regional Training & Development Manager di MAPAN (PT.
            RUMA) dari tahun 2015 sampai 2019 bertugas untuk memimpin dan mengelola keseluruhan
            kinerja tim penjualan dengan merancang pelatihan yang sesuai dan memastikan keseluruhan
            kinerja tim penjualan baik dengan berkoordinasi bersama Manajer Penjualan.
          </p>
        </div>
      </div>
    </n-tab-pane>
    <n-tab-pane name="Ulasan">
      <div class="flex justify-center items-center">
        <i-mdi:comment-quote-outline class="text-7xl text-gray-400 text-center" />
      </div>
      <p class="text-center text-lg font-semibold">Belum ada ulasan untuk kelas ini</p>
    </n-tab-pane>
  </n-tabs>
</template>
