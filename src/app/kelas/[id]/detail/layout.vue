<route lang="yaml">
  name: kelas
  meta:
    layout: authenticated.layout
  </route>
  
  <script setup lang="ts">
  import { useHttp } from '@/composables/http/http'
  import { useRoute } from 'vue-router'
  import type { DetailResponse } from '../../types/detail.type'
  import { DateTime, Duration } from 'luxon'

  
  const route = useRoute()
  const { data } = useHttp<DetailResponse>(`/users/v1/myprogram/detail/${route.params.id}`)
  
  const duration = (minute: number) => {
    return Duration.fromObject({ minute }).toFormat('hh:mm:ss')
  }
  
  const activityType = (
    type:
      | 'membaca-e-book'
      | 'menonton_video'
      | 'pre_test'
      | 'berdiskusi_daring'
      | 'quiz'
      | 'evaluasi'
      | 'praktek_mandiri'
      | 'evaluasi_praktek_mandiri'
  ) => {
    const text = {
      'membaca-e-book': 'Membaca E-Book',
      menonton_video: 'Menonton Video',
      pre_test: 'Pre Test',
      berdiskusi_daring: 'Berdiskusi Daring',
      quiz: 'Mengerjakan Soal',
      evaluasi: 'Evaluasi',
      praktek_mandiri: 'Praktik Mandiri',
      evaluasi_praktek_mandiri: 'Evaluasi Praktik Mandiri',
      post_test: 'Post Test'
    }
    return text[type]
  }
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
            {{ data?.data.program.title }}
          </h2>
        </div>
      </section>
  
      <div class="flex">
        <section class="md:flex space-y-5 md:space-y-0">
          <n-card style="width: 856px">
            <slot>
              <div class="relative">
                <img
                  :src="`${data?.data.program.program_information.cover.url}`"
                  class="rounded-lg"
                />
              </div>
              <n-tabs size="large" :tabs-padding="10" pane-style="padding: 20px;">
                <n-tab-pane name="Dekripsi">
                  <div class="space-y-5">
                    <div class="space-y-3">
                      <div v-html="data?.data.program.program_benefits" />
                    </div>
  
                    <div>
                      <p class="text-lg font-semibold">Bidang Studi</p>
                      <p class="text-sm">{{ data?.data.program.learning_targets.studies.title }}</p>
                    </div>
                    <div>
                      <p class="text-lg font-semibold">Lembaga Pengajar</p>
                      <div class="inline-flex items-center space-x-10 mt-3">
                        <img src="@/assets/images/landingpage/detail_kelas/logo_yec.png" />
                        <p>
                          Yureka Education Center (YEC) berdiri pada tahun 2010 dengan nama awal
                          Eureka Tour, sebuah layanan jasa tour spesialis Kampung Inggris. Saat ini
                          YEC fokus membantu setiap peserta menjadi individu lebih baik. Tidak hanya
                          sebatas menjadi jasa tour, namun juga menjadi konsultan pendidikan dan media
                          yang membantu menjadikan diri lebih baik dengan kemudahan akses informasi
                          dan program pelatihan terkait tes TOEFL, IELTS, Persiapan Kerja dan
                          Pembelajaran Bahasa Inggris Sehari-hari.
                        </p>
                      </div>
                    </div>
                    <p class="text-lg font-semibold">Fasilitator</p>
                    <template
                      v-for="fasilitator in data?.data?.program.fasilitator"
                      :key="fasilitator"
                    >
                      <img
                        :src="`${fasilitator.picture.url}`"
                        class="mt-3"
                        style="width: 100px; height: 100px; border-radius: 50px"
                      />
                      <div v-html="fasilitator.description" />
                    </template>
                  </div>
                </n-tab-pane>
                <n-tab-pane name="Ulasan">
                  <div class="flex justify-center items-center">
                    <i-mdi:comment-quote-outline class="text-7xl text-gray-400 text-center" />
                  </div>
                  <p class="text-center text-lg font-semibold">Belum ada ulasan untuk kelas ini</p>
                </n-tab-pane>
              </n-tabs>
            </slot>
            </n-card>
        </section>
  
        <section>
          <div class="ml-5">
            <div class="space-y-2">
              <details class="overflow-hidden rounded border border-gray-300">
                <summary
                  class="flex items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
                >
                  <span class="text-md font-medium"> Aktivitas </span>
                </summary>
              </details>
  
              <template v-for="topic in data?.data?.topics" :key="topic.id">
                <details class="overflow-hidden rounded border border-gray-300">
                  <summary
                    class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
                  >
                    <div class="space-y-0">
                      <span class="text-sm font-semibold"> {{ topic.name }} </span> <br />
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
  
                  <template v-for="act in topic.activities" :key="act.id">
                    <div
                      class="border-t cursor-pointer border-gray-200 bg-white"
                      @click="$router.push(`/kelas/${route.params.id}/detail/${topic.id}?id=${act.id}`)"
                    >
                      <header class="flex items-center justify-between p-4">
                        <div class="space-y-1">
                          <span class="text-sm font-semibold">
                            {{ act.title }}
                          </span>
                          <div class="flex space-x-4 text-xs text-gray-500">
                            <div class="flex space-x-1">
                              <i-quill:paper />
                              <p>{{ activityType(act.type) }}</p>
                            </div>
                            <div class="flex space-x-1">
                              <i-mdi:clock-outline />
                              <p>{{ duration(act.settings.estimated_duration) }}</p>
                            </div>
                          </div>
                        </div>
                      </header>
                    </div>
                  </template>
                </details>
              </template>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <style scoped></style>
  