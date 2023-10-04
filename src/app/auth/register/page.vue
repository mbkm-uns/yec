<script setup lang="ts">

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
            <img src="@/assets/images/landingpage/logo-dash.png" width="200" class="mx-auto">
            <n-space justify="center">
                <n-text> Dashboard YEC CO ID </n-text>
            </n-space>
            <div style="position: relative; width: fit-content; margin-inline: auto">
                <n-card :class="$style.card" size="medium">
                    <n-h2>Daftar Akun Terlebih Dahulu </n-h2>
                    <n-text>Silahkan masukkan No WhatsApp & kata sandi untuk masuk ke akun Anda
                    </n-text>
                    <div :class="$style.form__wrapper">
                        <n-form ref="formRef">
                            <n-form-item path="phone" label="No Whattsap">
                                <n-input placeholder="Masukkan No Telepon" />
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
                            <n-form-item>
                                <n-space vertical :size="20" :class="$style.form__action">
                                    <n-checkbox>
                                        Ingat Saya
                                    </n-checkbox>
                                    <n-button attr-type="submit" type="primary" block>
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
                </n-card>
            </div>
        </div>
    </n-space>
</n-card>
</template>

<style scoped>
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
