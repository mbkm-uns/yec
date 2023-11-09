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
import type { ClassDetailResponse } from '../../types/class-detail.type'

const route = useRoute()
const { data } = useHttp<DetailResponse>(`/users/v1/myprogram/detail/${route.params.id}`)
const { data: detail } = useHttp<ClassDetailResponse>(
  `/users/v1/public/program/detail/${route.params.id}`
)

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
    | 'post_test'
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
  <div class="p-3 space-y-5 max-w-screen-xl mx-auto py-10">
    <div class="flex gap-5">
      <div>
        <div class="p-3 space-y-5 max-w-screen-xl mx-auto flex gap-5">
          <div>
            <n-breadcrumb>
              <n-breadcrumb-item> Kelas</n-breadcrumb-item>
              <n-breadcrumb-item> {{ detail?.data.title }}</n-breadcrumb-item>
            </n-breadcrumb>
          </div>
        </div>
        <div>
          <h2 class="text-2xl font-semibold">
            {{ detail?.data.title }}
          </h2>
        </div>
        <div class="flex">
          <section class="md:flex space-y-5 md:space-y-0">
            <n-card style="width: 856px">
              <slot>
                <div class="relative">
                  <n-image
                    :src="`${detail?.data.program_information.cover.url}`"
                    class="rounded-lg"
                  />
                </div>
                <n-tabs size="large" :tabs-padding="10" pane-style="padding: 20px;">
                  <n-tab-pane name="Dekripsi">
                    <div class="space-y-5">
                      <div
                        class="space-y-3 prose max-w-full w-full prose-td:w-fit prose-td:max-w-fit"
                      >
                        <div class="" v-html="detail?.data.program_benefits" />
                      </div>

                      <div>
                        <p class="text-lg font-semibold">Bidang Studi</p>
                        <p class="text-sm">{{ detail?.data.learning_targets.studies.title }}</p>
                      </div>
                      <div>
                        <p class="text-lg font-semibold">Lembaga Pengajar</p>
                        <div class="inline-flex items-center space-x-10 mt-3">
                          <img src="@/assets/images/landingpage/detail_kelas/logo_yec.png" />
                          <p>
                            Yureka Education Center (YEC) berdiri pada tahun 2010 dengan nama awal
                            Eureka Tour, sebuah layanan jasa tour spesialis Kampung Inggris. Saat
                            ini YEC fokus membantu setiap peserta menjadi individu lebih baik. Tidak
                            hanya sebatas menjadi jasa tour, namun juga menjadi konsultan pendidikan
                            dan media yang membantu menjadikan diri lebih baik dengan kemudahan
                            akses informasi dan program pelatihan terkait tes TOEFL, IELTS,
                            Persiapan Kerja dan Pembelajaran Bahasa Inggris Sehari-hari.
                          </p>
                        </div>
                      </div>
                      <p class="text-lg font-semibold">Fasilitator</p>
                      <template v-for="fasilitator in detail?.data?.fasilitator" :key="fasilitator">
                        <n-avatar
                          circle
                          object-fit="cover"
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
                    <p class="text-center text-lg font-semibold">
                      Belum ada ulasan untuk kelas ini
                    </p>
                  </n-tab-pane>
                </n-tabs>
              </slot>
            </n-card>
          </section>
        </div>
      </div>
      <n-card  segmented embedded title="Aktifitas" class="w-1/5">
        <n-collapse>
          <n-collapse-item
            v-for="topic in detail?.data?.topic"
            :key="topic.id"
            :title="topic.name"
            :name="topic.id"
          >
            <n-list>
              <n-list-item
                v-for="act in topic.activities"
                :key="act.id"
                @click="$router.push(`/kelas/${route.params.id}/detail/${topic.id}?id=${act.id}`)"
              >
                {{ act.title }}
                <div class="flex space-x-4 text-xs text-gray-500">
                  <div class="flex space-x-1">
                    <i-quill:paper />
                    <p>{{ activityType(act.type as any) }}</p>
                  </div>
                  <div class="flex space-x-1">
                    <i-mdi:clock-outline />
                    <p>{{ duration(act.settings.estimated_duration) }}</p>
                  </div>
                </div>
              </n-list-item>
            </n-list>
          </n-collapse-item>
        </n-collapse>
      </n-card>
    </div>
  </div>
</template>

<style scoped></style>
