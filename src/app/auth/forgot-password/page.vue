<script setup lang="ts">

</script>

<template>
<n-card :class="$style.container" :content-style="$style.container">
  <n-button icon-placement="left" class="text-orange-500" @click="$router.push('/auth/login')">
      <template #icon>
        <n-icon>
          <i-mdi-arrow-left />
        </n-icon>
      </template>
      Kembali Login
    </n-button>
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
            <n-text
              >Masukan nomor handphone anda dan kami akan mengirimkan kode verifikasi untuk memperbarui password anda
            </n-text>
            <div :class="$style.form__wrapper">
              <n-form
                ref="formRef"
              
              >
                <n-form-item path="phone" label="No Telepon">
                  <n-input  placeholder="Masukkan No Telepon" />
                </n-form-item>
                  <n-space vertical :size="20" :class="$style.form__action">
                    <n-button
                      attr-type="submit"
                      type="primary"
                      block
                    >
                      Lanjut
                    </n-button>
                  </n-space>
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
  requiresAuth: false
</route>
