<route lang="yaml">
  name: "Login"
meta:
  layout: blank.layout
  requiresAuth: false
</route>

<script setup lang="ts">
// import axios from 'axios'
import { useHttpMutation } from '@/composables/http/http'
// import { useMutation, type UseMutationOptions } from '@tanstack/vue-query'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Cookies from 'js-cookie'
import { type FormInst, type FormRules, useMessage } from 'naive-ui'
import { Env } from '@/config'
// import { routerKey } from 'vue-router'

const formRef = ref<FormInst | null>(null)
const message = useMessage()

const router = useRouter()

const formData = ref({
  phone: '',
  password: '',
  access_key: Env().API_ACCESS_KEY,
  provider: 'whatsapp'
})

const { mutate: login, isLoading: isLoggingIn } = useHttpMutation('/users/v1/member/auth/login', {
  method: 'POST',
  httpOptions: {
    timeout: 30000
  },
  queryOptions: {
    onSuccess: function (data) {
      const token = data?.data.token;
      if (!token ){
        message.warning('Akun anda belum di aktifkan')
        return token
      }
      message.success('Login berhasil')
      Cookies.set('token', data?.data.token)
      router.push('/beranda?loggedIn=true') // Redirect to the dashboard after successful login
    },
    onError: function (data) {
    console.log(data)
      message.error(data?.data.message)
    }
  }
})

const onSubmit = async () => {
  // Validate the form.
  const isValid = await formRef.value?.validate(() => {
    formRef.value?.validate((errors) => {
      if (!errors) {
        login(formData.value)
      } else {
        console.log(errors)
        message.error('Invalid')
      }
    })
  })
}

const rules: FormRules = {
  phone: [
    {
      type: 'string',
      trigger: ['input', 'blur'],
      message: () => {
        return 'Harap masukan nomer phone yang valid'
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
      message: () => {
        return 'Harap masukan password yang valid'
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
</script>

<template>
  <n-card :class="$style.container" :content-style="$style.container">
    <n-button icon-placement="left" class="text-orange-500" @click="$router.push('/')">
      <template #icon>
        <n-icon>
          <i-mdi-arrow-left />
        </n-icon>
      </template>
      Kembali
    </n-button>
    <n-space justify="center" align="center" :class="$style.container">
      <div :class="$style.card__wrapper">
        <img src="@/assets/images/landingpage/logo-dash.png" width="200" class="mx-auto" />
        <n-space justify="center">
          <n-text> Dashboard YEC CO ID </n-text>
        </n-space>
        <div style="position: relative; width: fit-content; margin-inline: auto">
          <n-card :class="$style.card" size="medium">
            <n-h2>Login ke Akun Anda </n-h2>
            <n-text>Silahkan masukkan No WhatsApp & kata sandi untuk masuk ke akun Anda </n-text>
            <div :class="$style.form__wrapper">
              <n-form :model="formData" ref="formRef" :rules="rules">
                <n-form-item path="phone" label="No Telepon">
                  <n-input v-model:value="formData.phone" placeholder="Masukkan No Telepon" />
                </n-form-item>
                <n-form-item path="password" label="Password">
                  <n-input
                    show-password-on="click"
                    v-model:value="formData.password"
                    type="password"
                    placeholder="Min 8 karakter"
                  />
                </n-form-item>
                <div class="float-right text-decoration-none text-orange-500">
                  <a href="/auth/forgot-password">Lupa Password?</a>
                </div>
                <n-row :gutter="[0, 24]">
                  <n-col :span="24"> </n-col>
                </n-row>
                <n-form-item>
                  <n-space vertical :size="20" :class="$style.form__action">
                    <n-checkbox> Ingat Saya </n-checkbox>
                    <n-button
                      :loading="isLoggingIn"
                      attr-type="submit"
                      type="primary"
                      @click="onSubmit"
                      block
                    >
                      Login
                    </n-button>
                    <div class="text-center">
                      Belum mempunyai akun?
                      <a
                        href="/auth/register"
                        class="font-weight-medium text-decoration-none"
                        color="primary"
                      >
                        <span class="text-orange-500">Daftar Sekarang</span>
                      </a>
                    </div>
                  </n-space>
                </n-form-item>
              </n-form>
            </div>
          </n-card>
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
