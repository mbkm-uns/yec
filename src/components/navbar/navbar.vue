<template>
  <header class="bg-white sticky z-10 w-full top-0">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex-1 md:flex md:items-center md:gap-16">
          <img src="@/assets/images/landingpage/logo-dash.png" class="h-8" justify-left />
        </div>

        <div class="md:flex md:items-center md:gap-16">
          <nav aria-label="Global" class="hidden md:block">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <router-link class="text-orange-500 transition hover:text-orange-500/75" to="/">
                  Beranda
                </router-link>
              </li>

              <li>
                <router-link
                  class="text-orange-500 transition hover:text-orange-500/75"
                  to="/beranda"
                >
                  Kelas Prakerja
                </router-link>
              </li>

              <li>
                <router-link
                  class="text-orange-500 transition hover:text-orange-500/75"
                  to="/auth/login"
                >
                  Masuk
                </router-link>
              </li>
            </ul>
          </nav>

          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-2">
              <n-button @click="$router.push('/auth/register')" type="primary"> Daftar </n-button>
              <div class="block md:hidden">
                <button
                  class="rounded bg-gray-100 p-2 text-orange-600 transition hover:text-orange-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
