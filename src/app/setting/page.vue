<route lang="yaml">
meta:
  layout: authenticated.layout
</route>
<script setup lang="ts">
import { useHttpMutation } from '@/composables/http/http'
import { ref } from 'vue'
import { DateTime } from 'luxon'
import { useRouter } from 'vue-router'
import { useMessage, type FormRules, type FormInst } from 'naive-ui'
import { useHttp } from '@/composables/http/http'
import { useQueryClient } from '@tanstack/vue-query'
const { data: profile } = useHttp('/users/v1/member/detail')

const message = useMessage()
const router = useRouter()
const formRef = ref<FormInst>()
const queryClient = useQueryClient()

type Form = {
  fullName?: string
  date_of_birth?: number
  phone?: string
  email?: string
}

const settingData = ref<Form>({
  fullName: undefined,
  date_of_birth: undefined,
  phone: undefined,
  email: undefined
})

const { mutate: userSetting, isLoading: isLoadingUser } = useHttpMutation(
  'users/v1/member/update',
  {
    method: 'PUT',
    httpOptions: {
      // axios options
      timeout: 30000
    },
    queryOptions: {
      // vue-query options
      onSuccess: function (data) {
        message.success(data.data.message)
        router.push('/beranda')
        queryClient.invalidateQueries(['/users/v1/member/detail'])
      },
      onError: function (data) {
        // console.log(data)
        message.error(data.data.message)
      }
    }
  }
)
const onSubmitSetting = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      userSetting({
        fullname: settingData.value.fullName,
        date_of_birth: DateTime.fromMillis(settingData.value.date_of_birth as number).toISODate(),
        phone: settingData.value.phone,
        email: settingData.value.email,
        meta: { code: '12345' }
      })
    } else {
      console.log(errors)
      message.error('Invalid')
    }
  })
}

const rules: FormRules = {
  fullName: [
    {
      type: 'string',
      required: true,
      trigger: ['input', 'blur'],
      message: () => {
        return 'Harap masukan nama lengkap'
      }
    },
    {
      required: true,
      message: () => {
        return 'Wajib Di Isi'
      }
    }
  ],
  date_of_birth: [
    {
      trigger: ['input', 'blur'],
      required: true,
      min: 8,
      message: () => {
        return 'Harap masukan tanggal lahir'
      }
    },
    {
      required: true,
      message: () => {
        return 'Wajib Di Isi'
      }
    }
  ],
  phone: [
    {
      trigger: ['input', 'blur'],
      required: true,
      min: 8,
      message: () => {
        return 'Harap masukan nomer handphone yang valid'
      }
    },
    {
      required: true,
      message: () => {
        return 'Wajib Di Isi'
      }
    }
  ],
  email: [
    {
      trigger: ['input', 'blur'],
      required: true,
      min: 8,
      message: () => {
        return 'Harap masukan email yang valid'
      }
    },
    {
      required: true,
      message: () => {
        return 'Wajib Di Isi'
      }
    }
  ]
}
// check
const isAllowEdit = computed(() => {
  const allowedKeys = ['fullname', 'phone', 'email', 'date_of_birth'] as const

  return allowedKeys.every((key: string) => {
    return !!profile.value.data[key]
  })
})

const formatDate = (value: string) => {
  if (!value) return undefined
  return DateTime.fromISO(value).toMillis()
} //
watchEffect(() => {
  settingData.value.fullName = profile.value.data.fullname
  settingData.value.phone = profile.value.data.phone
  settingData.value.email = profile.value.data.email
  settingData.value.date_of_birth = formatDate(profile.value.data.date_of_birth)
})
</script>

<template>
  <div class="p-2 mt-5 md:px-20 space-y-5">
    <nav class="flex items-center space-x-2">
      <router-link class="text-amber-600 text-lg" to="/beranda">Beranda</router-link>
      <span class="text-gray-400 text-lg">/</span>
      <span class="text-gray-600 text-lg">Setting</span>
    </nav>

    <div class="md:flex md:px-10 lg:px-40 sm:px-5 flex-auto">
      <n-tabs size="large" :tabs-padding="20" pane-style="padding: 20px;">
        <n-tab-pane name="Data Diri" class="ml-auto">
          <section class="flex flex-col">
            <n-card class="justify-center text-left px-2 md:px-20">
              <n-alert type="info">
                <div class="text-blue">
                  <h2 class="text-sm font-bold">PERHATIAN!</h2>
                  Akun ini hanya dapat digunakan untuk 1 peserta pelatihan, pastikan nama Anda
                  sesuai dengan nama yang terdaftar pada akun prakerja.go.id (perhatikan penggunaan
                  huruf dan tanda baca, wajib sama dengan nama akun di prakerja.go.id). Hal ini akan
                  berpengaruh pada sertifikat Kartu Prakerja Anda
                </div>
              </n-alert>
              <n-form
                class="mt-5"
                :model="settingData"
                :rules="rules"
                @submit.prevent="onSubmitSetting"
                ref="formRef"
                :disabled="isAllowEdit"
              >
                <n-form-item path="fullName" type="text">
                  <template v-slot:label>
                    <span class="text-lg font-semibold">Nama Lengkap</span>
                  </template>
                  <n-input v-model:value="settingData.fullName" placeholder="Nama Lengkap">
                  </n-input>
                </n-form-item>
                <n-form-item path="phone" type="number">
                  <template v-slot:label>
                    <span class="text-lg font-semibold">No. Telephone</span>
                  </template>
                  <n-input v-model:value="settingData.phone" placeholder="Nomer telephone">
                  </n-input>
                </n-form-item>
                <n-form-item path="email" type="email">
                  <template v-slot:label>
                    <span class="text-lg font-semibold">Email</span>
                  </template>
                  <n-input v-model:value="settingData.email" placeholder="Email"> </n-input>
                </n-form-item>
                <n-form-item path="tanggallahir" type="date">
                  <template v-slot:label>
                    <span class="text-lg font-semibold">Tanggal Lahir</span>
                  </template>
                  <n-date-picker
                    v-model:value="settingData.date_of_birth"
                    class="w-full"
                    type="date"
                  />
                </n-form-item>
                <div class="flex justify-center">
                  <n-button
                    block
                    :loading="isLoadingUser"
                    attr-type="submit"
                    type="primary"
                    :disabled="isAllowEdit"
                  >
                    Submit
                  </n-button>
                </div>
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
