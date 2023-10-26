<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id?: string
  title?: string
  benefit?: string
  image?: string
  price?: string
  name?: string
  description?: string
}>()

// const expanded = ref(false)

// const toggleExpand = () => {
//   expanded.value = !expanded.value
// }
</script>

<template>
  <div class="relative">
    <img src="@/assets/images/landingpage/detail_kelas/cover.png" class="rounded-lg" />
  </div>
  <n-tabs size="large" :tabs-padding="10" pane-style="padding: 20px;">
    <n-tab-pane name="Dekripsi">
      <div class="space-y-5">
        {{ description }}
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
        <!-- <div>
          <p class="text-lg font-semibold">Fasilitator</p>
          <img src="@/assets/images/landingpage/detail_kelas/fasilitator.png" class="mt-3" />
          <p class="mt-3">
            {{ description }}
          </p>
        </div> -->
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
