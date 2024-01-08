<script setup lang="ts">
import { Question } from '@/app/kelas/components'
const page = ref(1)

const answer = ref([])
const questions = [
  {
    duration: 300000, // in ms
    question: 'Apa saja yang termasuk indikator kualitas pelayanan prima?',
    choices: [
      {
        label: 'Adaptif',
        value: 'Adaptif'
      },
      {
        label: 'Jaminan  atau Assurance',
        value: 'Jaminan  atau Assurance'
      },
      {
        label: 'Solutif',
        value: 'Solutif'
      },
      {
        label: 'Informatif',
        value: 'Informatif'
      }
    ]
  },
  {
    duration: 300000, // in ms
    question: 'Membantu individu atau kelompok dalam masyarakat untuk bertindak secara bebas tapi dapat dipertanggungjawabkan merupakan ?',
    choices: [
      {
        label: 'Peran etika dalam komunikasi',
        value: 'Peran etika dalam komunikasi'
      },
      {
        label: 'Tujuan etika dalam komunikasi',
        value: 'Tujuan etika dalam komunikasi'
      },
      {
        label: 'Komunikasi publik yang efektif',
        value: 'Komunikasi publik yang efektif'
      },
      {
        label: 'Keinginan seseorang dalam berkomunikasi',
        value: 'Keinginan seseorang dalam berkomunikasi'
      }
    ]
  },
  {
    duration: 300000, // in ms
    question: 'Berikut ini merupakan hal-hal yang harus dihindari dalam etika berkomunikasi, kecuali ?',
    choices: [
      {
        label: 'Berbicara sambil bermain gadget',
        value: 'Berbicara sambil bermain gadget'
      },
      {
        label: 'Berbicara sambil melakukan hal lain',
        value: 'Berbicara sambil melakukan hal lain'
      },
      {
        label: 'Berbicara dengan nada kasar',
        value: 'Berbicara dengan nada kasar'
      },
      {
        label: 'Terlalu banyak basa-basi',
        value: 'Terlalu banyak basa-basi'
      }
    ]
  },
  {
    duration: 300000, // in ms
    question: 'Mencegah individu atau kelompok untuk tidak bertindak atau berperilaku sembarangan atau seenaknya sendiri dalam berkomunikasi merupakan salah satu ?',
    choices: [
      {
        label: 'Manfaat etika dalam berkomunikasi',
        value: 'Manfaat etika dalam berkomunikasi'
      },
      {
        label: 'Peran komunikasi publik',
        value: 'Peran komunikasi publik'
      },
      {
        label: 'Tujuan komunikasi publik',
        value: 'Tujuan komunikasi publik'
      },
      {
        label: 'Karakteristik etika komunikasi',
        value: 'Karakteristik etika komunikasi'
      }
    ]
  }
]

const currentQuestion = computed(() => {
  return questions[page.value - 1]
})
</script>

<template>
  <Question v-model:value="answer[page-1]"
    :number="page"
    :question="currentQuestion.question"
    :choices="currentQuestion.choices"
    :duration="currentQuestion.duration"
    :total-question="questions.length"
  >
    <n-pagination v-model:page="page" :page-count="questions.length" simple />
  </Question>
</template>
