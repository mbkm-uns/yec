<script setup lang="ts">
import { useHttp } from '@/composables/http/http'
import { ProductCard } from './components'

const { data } = useHttp('/users/v1/public/program/list')

const fieldOfStudies = [
  'Bahasa Asing / Inggris',
  'Kuliner',
  'Pengembangan Diri',
  'Persiapan Kerja',
  'Strategi Marketing',
  'Teknologi Informasi',
  'Pertanian dan Peternakan',
  'Lainnya'
]

const programTypes = [
  {
    label: 'Gratis',
    value: 'free'
  },
  {
    label: 'Berbayar',
    value: 'paid'
  }
]
</script>

<template>
  <div class="pt-20 p-3 md:px-20 space-y-5">
    <section class="md:flex justify-between space-y-3">
      <div>
        <h2 class="text-2xl font-semibold">Pencarian Program</h2>
        <div>Menampilkan 9 program</div>
      </div>
      <div>
        <n-input placeholder="Cari program yang anda inginkan" size="large">
          <template #suffix>
            <n-icon>
              <i-ion-search />
            </n-icon>
          </template>
        </n-input>
      </div>
    </section>
    <section class="md:flex space-y-5 md:space-y-0">
      <n-card class="md:max-w-[329px] h-auto">
        <div class="space-y-5">
          <div class="space-y-4 flex flex-col">
            <h5 class="font-bold text-lg">Bidang Studi</h5>
            <template v-for="item in fieldOfStudies" :key="item">
              <n-checkbox>{{ item }}</n-checkbox>
            </template>
            <n-button strong text>
              Tampilkan Semua
              <i-ion-arrow-down-b />
            </n-button>
          </div>
          <div class="space-y-4">
            <h5 class="font-bold text-lg">Tipe Program</h5>
            <div class="flex flex-col">
              <n-radio-group class="flex flex-col" name="radiogroup">
                <div class="flex flex-col gap-4">
                  <n-radio
                    v-for="programType in programTypes"
                    :key="programType.value"
                    :value="programType.value"
                    :label="programType.label"
                  />
                </div>
              </n-radio-group>
            </div>
          </div>
          <div class="space-y-4">
            <h5 class="font-bold text-lg">Harga</h5>
            <div class="flex flex-col gap-4">
              <n-input placeholder="Harga terendah">
                <template #prefix> Rp </template>
              </n-input>
              <n-input placeholder="Harga tertinggi">
                <template #prefix> Rp </template>
              </n-input>
            </div>
            <div class="flex justify-between gap-2">
              <div class="w-1/2">
                <n-button round block>Reset Filter</n-button>
              </div>
              <div class="w-1/2">
                <n-button round block type="primary">Terapkan</n-button>
              </div>
            </div>
          </div>
        </div>
      </n-card>
      <div class="md:pl-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <template v-for="product in data?.data?.list" :key="product">
            <product-card
              :id="product.id"
              :title="product.title"
              :image="product.program_information.cover.url"
              :price="product.program_information.selling_price"
            />
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
div.h1 {
  font-size: 2rem;
  display: contents;
  position: relative;
  left: 20px;
}
</style>
