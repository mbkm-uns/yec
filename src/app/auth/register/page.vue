<script setup lang="ts">
// import { useHttpMutation } from '@/composables/http/http';
// import { reactive, ref } from 'vue';
// import { useRouter } from 'vue-router';
// import {  type UseMutationOptions } 

// const router = useRouter();

// const formData = ref({
//   no_whaatsapp: "",
//   password: "",
//   konfirmasi_password: "",
// });

// const state = reactive({
//   isLoading:false,
// })

// const {mutate, isLoading, isError, error} = useHttpMutation<ToData, TError>('todos/:id', {
//   method: 'POST',
//   httpOptions: {
//     timeout: 30000,
//   },
//   queryOptions: {
//     onSuccess: function (data) {
//       console.log(data);
//     },
//     onError: function (data) {
//       console.log(data);
//     },
//   },
// })
// const onSubmitFrom = (data) => {
//   mutate(data)
// }


</script>

<template>
          <n-card :class="$style.card" size="medium">
          <n-button icon-placement="left" class="text-orange-500" @click="$router.push('/')">
             <template #icon>
                <n-icon>
                  <i-mdi-arrow-left />
                  </n-icon>
                </template>
                   Kembali
            </n-button>
            <n-space justify="center" align="center" :class="$style.container">
              <div :class="$style.card__wrapper ">
                <img src="@/assets/images/landingpage/logo-dash.png" width="200" class="mx-auto space-y-4 ">
            <n-space justify="center">
              <n-text> Dashboard YEC CO ID </n-text>
            </n-space>
            <n-h2 class="space-y-4">Register akun anda </n-h2>
            <n-text
              >Silahkan masukkan No WhatsApp & kata sandi untuk masuk ke akun Anda
            </n-text>
            <div :class="$style.form__wrapper">
              <n-form
                ref="formRef"
              
              >
                <n-form-item path="phone" label="No Telepon">
                  <n-input  placeholder="Masukkan No Telepon" />
                </n-form-item>
                <n-form-item path="password" label="Password">
                  <n-input show-password-on="click" type="password" placeholder="Min 8 karakter" />
                </n-form-item>
                  <n-form-item path="konfirmasi password" label="Konfirmasi Password">
                    <n-input show-password-on="click" type="password" placeholder="Min 8 karakter" />
                  </n-form-item>
                    <n-row :gutter="[0, 24]">
                      <n-col :span="24"> </n-col>
                    </n-row>
                <n-row :gutter="[0, 24]">
                  <n-col :span="24"> </n-col>
                </n-row>
                <n-form-item>
                  <n-space vertical :size="20" :class="$style.form__action">
                    <n-checkbox>
                      Ingat Saya
                    </n-checkbox>
                    <n-button
                      attr-type="submit"
                      type="primary"
                      block
                    >
                      Login
                    </n-button>
                    <div class="text-center text-decoration-none">
                      Sudah mempunyai akun?
                      <a href="/auth/login" class="font-weight-medium text-decoration-none" color="primary">
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
