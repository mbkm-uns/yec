<route lang="yaml">
meta:
  layout: blank.layout
</route>
<script setup lang="ts">
import { useHttpMutation } from '@/composables/http/http'
import { ref } from 'vue'
import { Env } from '@/config'
import { useRouter } from 'vue-router'
import { useMessage, type FormRules, type FormItemRule, type FormInst } from 'naive-ui'

const message = useMessage()
const router = useRouter()

const tab = ref('register')

const formData = ref({
  provider: 'whatsapp',
  access_key: Env().API_ACCESS_KEY,
  phone: '',
  password: '',
  passwordConfirm: ''
})

const formVerify = ref({
  provider: 'whatsapp',
  access_key: Env().API_ACCESS_KEY,
  otp: ''
})
const formRef = ref<FormInst>()

function validatePasswordStartWith(rule: FormItemRule, value: string): boolean {
  return (
    !!formData.value.password &&
    formData.value.password.startsWith(value) &&
    formData.value.password.length >= value.length
  )
}
function validatePasswordSame(rule: FormItemRule, value: string): boolean {
  return value === formData.value.password
}

const { mutate, isLoading } = useHttpMutation('/users/v1/member/auth/register', {
  method: 'POST',
  httpOptions: {
    // axios options
    timeout: 30000
  },
  queryOptions: {
    // vue-query options
    onSuccess: function () {
      tab.value = 'otp'
    },
    onError: function (error) {
      message.error(error.data.message)
    }
  }
})

const { mutate: verifyOtp, isLoading: isLoadingVerifyOtp } = useHttpMutation(
  '/users/v1/member/auth/verify_otp',
  {
    method: 'POST',
    httpOptions: {
      timeout: 30000
    },
    queryOptions: {
      // vue-query options
      onSuccess: function (data) {
        router.push('/auth/login'), console.log(data)
      },
      onError: function (data) {
        message.error(data.data.message)
      }
    }
  }
)

const onSubmit = () => {
  mutate(formData.value)
}

const onSubmitOtp = () => {
  verifyOtp({
    access_key: formVerify.value.access_key,
    phone: formData.value.phone,
    otp: formVerify.value.otp
  })
}

const rules: FormRules = {
  phone: [
    {
      type: 'string',
      required: true,
      trigger: ['input', 'blur'],
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
  password: [
    {
      trigger: ['input', 'blur'],
      required: true,
      min: 8,
      message: () => {
        return 'Harap masukan password yang valid'
      }
    },
    {
      required: true,
      validator: () => {
        return formData.value.password === formData.value.passwordConfirm
      },
      message: () => {
        return 'Wajib Di Isi'
      }
    }
  ],
  passwordConfirm: [
    {
      required: true,
      message: 'Konfirmasi password diperlukan',
      trigger: ['input', 'blur']
    },
    {
      validator: validatePasswordStartWith,
      message: 'Password tidak sama!',
      trigger: 'input'
    },
    {
      validator: validatePasswordSame,
      message: 'Password tidak sama!',
      trigger: ['blur', 'password-input']
    }
  ]
}
</script>

<template>
  <n-card :class="$style.card" size="medium">
    <n-button icon-placement="left" quaternary class="text-orange-500" @click="$router.push('/')">
      <template #icon>
        <n-icon>
          <i-mdi-arrow-left />
        </n-icon>
      </template>
      Kembali
    </n-button>
    <n-space justify="center" align="center" :class="$style.container">
      <div v-if="tab == 'otp'" class="my-2 flex flex-col gap-5">
        <div class="text-center my-2">
          <div class="text-xl font-bold">Masukan Kode Verifikasi</div>
          <div>Kode verifikasi telah dikirim melalui WA ke {{ formData.phone }}</div>
        </div>
        <otp v-model:value="formVerify.otp" :length="6"></otp>
        <n-button :loading="isLoadingVerifyOtp" @click="onSubmitOtp">Submit</n-button>
      </div>
      <div v-else :class="$style.card__wrapper">
        <img
          src="@/assets/images/landingpage/logo-dash.png"
          width="200"
          class="mx-auto space-y-4"
        />
        <n-space justify="center">
          <n-text> Dashboard YEC CO ID </n-text>
        </n-space>
        <n-h2 class="space-y-4">Register akun anda </n-h2>
        <n-text>Silahkan masukkan No WhatsApp & kata sandi untuk masuk ke akun Anda </n-text>
        <div :class="$style.form__wrapper">
          <n-form ref="formRef" :model="formData" :rules="rules" @submit.prevent="onSubmit">
            <n-form-item path="phone" label="No Telepon">
              <n-input placeholder="Masukkan No Telepon" v-model:value="formData.phone" />
            </n-form-item>
            <n-form-item path="password" label="Password">
              <n-input
                show-password-on="click"
                type="password"
                placeholder="Min 8 karakter"
                v-model:value="formData.password"
              />
            </n-form-item>
            <n-form-item path="passwordConfirm" label="Konfirmasi Password">
              <n-input
                show-password-on="click"
                type="password"
                placeholder="Min 8 karakter"
                v-model:value="formData.passwordConfirm"
              />
            </n-form-item>
            <n-row :gutter="[0, 24]">
              <n-col :span="24"> </n-col>
            </n-row>
            <n-row :gutter="[0, 24]">
              <n-col :span="24"> </n-col>
            </n-row>
            <n-form-item>
              <n-space vertical :size="20" :class="$style.form__action">
                <n-button :loading="isLoading" attr-type="submit" type="primary" block>
                  Register
                </n-button>
                <div class="text-center text-decoration-none">
                  Sudah mempunyai akun?
                  <a
                    href="/auth/login"
                    class="font-weight-medium text-decoration-none"
                    color="primary"
                  >
                    <span class="text-orange-500">Login</span>
                  </a>
                </div>
              </n-space>
            </n-form-item>
          </n-form>
        </div>
      </div>
    </n-space>
  </n-card>
</template>

<style scoped module>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.card {
  max-width: 500px;
  margin: auto;
  position: relative;
}
.card__brand {
  margin: auto;
  pointer-events: none;
  user-select: none;
}
.card__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.form__wrapper {
  margin-top: 1rem;
}
a {
  text-decoration: none;
}
.form__action {
  width: 100%;
}
.branding {
  height: 2rem;
  width: 5rem;
}
.branding__wrapper {
  height: 2rem;
  width: 10rem;
  display: flex;
  margin-inline: auto;
  align-items: center;
}
</style>

<route lang="yaml">
meta:
  requiresAuth: false
</route>
