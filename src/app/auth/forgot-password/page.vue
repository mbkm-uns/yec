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
  //password: '',
  access_key: Env().API_ACCESS_KEY,
  //provider: 'whatsapp'
  })

const { mutate, isLoading } = useHttpMutation('/api/v1/reset/verify/phone', {
  method: 'POST',
  httpOptions: {
    timeout: 30000
  },
  queryOptions: {
    onSuccess: function (data) {
      message.success('Kode OTP Berhasil Terkirim')
      router.push('/otp') // Redirect to the dashboard after successful login
    },
    onError: function (data) {
    console.log(data)
      message.error(data?.data?.message || "Terjadi Kesalahan")
    }
  }
})

const onSubmit = async () => {
  // Validate the form.
  const isValid = await formRef.value?.validate(() => {
    formRef.value?.validate((errors) => {
      if (!errors) {
        mutate(formData.value)
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
}

</script>

<template>
<n-card :class="$style.container" :content-style="$style.container">
    <n-space justify="center" align="center" :class="$style.container">
      <div :class="$style.card__wrapper">
        <img src="@/assets/images/landingpage/logo-dash.png" width="200" class="mx-auto">
        <n-space justify="center">
          <n-text> Dashboard YEC CO ID </n-text>
        </n-space>
        <div
          style="position: relative; width: fit-content; margin-inline: auto"
        >
          <n-card :class="$style.card" size="medium">
            <b>
              Atur ulang kata sandi
            </b>
            <br>
            <n-text>
              Silahkan masukkan email atau nomor handphone yang terhubung dengan akun Anda.
              Kami akan mengirimkan tautan
            </n-text>
            
              <n-form
                ref="formRef"
                :model="formData"
                :rules="rules"
                :class="$style.form__wrapper"
              >
                
                <n-form-item path="phone" label="No Telepon">
                  <n-input v-model:value="formData.phone" placeholder="Masukkan No Telepon" />
                </n-form-item>
                
                  <n-space vertical :size="20" :class="$style.form__action">
                    <n-button
                    :loading="isLoading"
                      attr-type="submit"
                      type="primary"
                      block
                      @click="onSubmit"
                    >
                      Lanjut

                    </n-button>
                  </n-space>
                  <br>
                  <div class="text-center">
                      Kembali ke
                      <a
                        href="/auth/login"
                        class="font-weight-medium text-decoration-none"
                        color="primary"
                      >
                        <span class="text-orange-500">Login</span>
                      </a>
                    </div>
              </n-form>
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
    position: static;
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
  requiresAuth:false
</route>