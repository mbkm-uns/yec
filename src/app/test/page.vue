<script setup lang="ts">
import { Question } from '@/app/kelas/components'
const page = ref(1)

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
    question: 'tes',
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
  }
]

const currentQuestion = computed(() => {
  return questions[page.value - 1]
})
</script>

<template>
  <Question
    :number="page"
    :question="currentQuestion.question"
    :choices="currentQuestion.choices"
    :duration="currentQuestion.duration"
  >
    <n-pagination v-model:page="page" :page-count="questions.length" simple />
  </Question>
</template>
