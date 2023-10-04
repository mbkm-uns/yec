<script setup lang="ts">
import { h, defineComponent } from 'vue'
import type { Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
  Cog as SettingProfile,
  Briefcase as BimbinganPrakerja,
  Newspaper as Subskripsi,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = [
  {
    label: 'Setting Profile',
    key: 'Setting Profile',
    icon: renderIcon(SettingProfile)
  },
  {
    label: 'Bimbingan Prakerja',
    key: 'Bimbingan Prakerja',
    icon: renderIcon(BimbinganPrakerja)
  },
  {
    label: 'Subskripsi',
    key: 'Subskripsi',
    icon: renderIcon(Subskripsi)
  },
  {
    label: 'Logout',
    key: 'Logout',
    icon: renderIcon(LogoutIcon)
  }
]
</script>
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
                <router-link
                  class="text-orange-500 transition hover:text-orange-500/75"
                  to="/beranda"
                >
                  <n-space>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M11.3359 2.753C11.5189 2.59049 11.7552 2.50073 11.9999 2.50073C12.2447 2.50073 12.4809 2.59049 12.6639 2.753L21.6639 10.753C21.8521 10.9317 21.9634 11.1766 21.9743 11.4358C21.9853 11.6951 21.895 11.9484 21.7226 12.1424C21.5502 12.3363 21.3092 12.4557 21.0504 12.4752C20.7917 12.4947 20.5355 12.4129 20.3359 12.247L19.9999 11.95V19.5C19.9999 20.0304 19.7892 20.5391 19.4141 20.9142C19.0391 21.2893 18.5304 21.5 17.9999 21.5H5.99993C5.46949 21.5 4.96079 21.2893 4.58571 20.9142C4.21064 20.5391 3.99993 20.0304 3.99993 19.5V11.95L3.66393 12.247C3.46439 12.4129 3.20818 12.4947 2.94943 12.4752C2.69067 12.4557 2.44964 12.3363 2.27725 12.1424C2.10486 11.9484 2.0146 11.6951 2.02555 11.4358C2.0365 11.1766 2.14779 10.9317 2.33593 10.753L11.3359 2.753ZM5.99993 10.17V19.5H8.99993V14.5C8.99993 14.2348 9.10528 13.9804 9.29282 13.7929C9.48036 13.6054 9.73471 13.5 9.99993 13.5H13.9999C14.2651 13.5 14.5195 13.6054 14.707 13.7929C14.8946 13.9804 14.9999 14.2348 14.9999 14.5V19.5H17.9999V10.171L11.9999 4.838L5.99993 10.17ZM12.9999 19.5V15.5H10.9999V19.5H12.9999Z"
                        fill="#8492A6"
                      />
                    </svg>
                    Beranda
                  </n-space>
                </router-link>
              </li>
              <li>
                <router-link class="text-orange-500 transition hover:text-orange-500/75" to="/">
                  <n-space>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M1.25 19.5H20.75M2.75 1.5V19.5M13.25 1.5V19.5M19.25 6V19.5M5.75 5.25H6.5M5.75 8.25H6.5M5.75 11.25H6.5M9.5 5.25H10.25M9.5 8.25H10.25M9.5 11.25H10.25M5.75 19.5V16.125C5.75 15.504 6.254 15 6.875 15H9.125C9.746 15 10.25 15.504 10.25 16.125V19.5M2 1.5H14M13.25 6H20M16.25 9.75H16.258V9.758H16.25V9.75ZM16.25 12.75H16.258V12.758H16.25V12.75ZM16.25 15.75H16.258V15.758H16.25V15.75Z"
                        stroke="#8492A6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Kelas Pekerja
                  </n-space>
                </router-link>
              </li>

              <li>
                <router-link class="text-orange-500 transition hover:text-orange-500/75" to="/">
                  <n-space>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                    >
                      <path
                        d="M5 2.5C5 3.03043 4.78929 3.53914 4.41421 3.91421C4.03914 4.28929 3.53043 4.5 3 4.5C2.46957 4.5 1.96086 4.28929 1.58579 3.91421C1.21071 3.53914 1 3.03043 1 2.5C1 1.96957 1.21071 1.46086 1.58579 1.08579C1.96086 0.710714 2.46957 0.5 3 0.5C3.53043 0.5 4.03914 0.710714 4.41421 1.08579C4.78929 1.46086 5 1.96957 5 2.5ZM2 14.5V20.5H3.67088e-08V8.5C-9.24816e-05 7.90845 0.1747 7.33008 0.502402 6.8376C0.830104 6.34512 1.29609 5.96051 1.84177 5.73213C2.38745 5.50375 2.98847 5.44179 3.56927 5.55404C4.15006 5.66629 4.68471 5.94773 5.106 6.363L7.48 8.606L9.793 6.293L11.207 7.707L7.52 11.394L6 9.96V20.5H4V14.5H2ZM7 3.5H16V12.5H7V14.5H11.365L14.189 20.5H16.399L13.576 14.5H17C17.2652 14.5 17.5196 14.3946 17.7071 14.2071C17.8946 14.0196 18 13.7652 18 13.5V2.5C18 2.23478 17.8946 1.98043 17.7071 1.79289C17.5196 1.60536 17.2652 1.5 17 1.5H7V3.5Z"
                        fill="#8492A6"
                      />
                    </svg>
                    Kelas Saya
                  </n-space>
                </router-link>
              </li>

              <li>
                <router-link class="text-orange-500 transition hover:text-orange-500/75" to="/">
                  <n-space>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="21"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M20.7938 16.9944C20.2735 16.0981 19.5 13.5622 19.5 10.25C19.5 8.26088 18.7098 6.35322 17.3033 4.9467C15.8968 3.54018 13.9891 2.75 12 2.75C10.0109 2.75 8.10323 3.54018 6.69671 4.9467C5.29019 6.35322 4.50001 8.26088 4.50001 10.25C4.50001 13.5631 3.72564 16.0981 3.20532 16.9944C3.07245 17.2222 3.00201 17.4811 3.00111 17.7449C3.0002 18.0086 3.06886 18.268 3.20017 18.4967C3.33147 18.7255 3.52077 18.9156 3.74899 19.0478C3.9772 19.1801 4.23625 19.2498 4.50001 19.25H8.32595C8.49899 20.0967 8.95916 20.8577 9.62864 21.4042C10.2981 21.9507 11.1358 22.2492 12 22.2492C12.8642 22.2492 13.7019 21.9507 14.3714 21.4042C15.0409 20.8577 15.501 20.0967 15.6741 19.25H19.5C19.7637 19.2496 20.0226 19.1798 20.2507 19.0475C20.4788 18.9151 20.668 18.725 20.7992 18.4963C20.9303 18.2676 20.9989 18.0083 20.998 17.7446C20.997 17.4809 20.9266 17.2222 20.7938 16.9944ZM12 20.75C11.5348 20.7499 11.0812 20.6055 10.7014 20.3369C10.3216 20.0683 10.0344 19.6886 9.87939 19.25H14.1206C13.9656 19.6886 13.6784 20.0683 13.2986 20.3369C12.9189 20.6055 12.4652 20.7499 12 20.75Z"
                        fill="#8492A6"
                      />
                    </svg>
                  </n-space>
                </router-link>
              </li>
              <li>
                <router-link class="text-orange-500 transition hover:text-orange-500/75" to="/">
                  <n-space>
                    <n-dropdown trigger="hover" :options="options">
                      <n-space>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                        >
                          <circle cx="10" cy="10.5" r="10" fill="#3771C8" />
                        </svg>
                        <n-text>User</n-text>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="19"
                          viewBox="0 0 18 19"
                          fill="none"
                        >
                          <g clip-path="url(#clip0_219_289)">
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M9.53026 12.2803C9.38962 12.4209 9.19889 12.4999 9.00001 12.4999C8.80114 12.4999 8.61041 12.4209 8.46976 12.2803L4.22701 8.03751C4.15538 7.96833 4.09824 7.88557 4.05894 7.79407C4.01963 7.70256 3.99894 7.60415 3.99808 7.50456C3.99721 7.40498 4.01619 7.30622 4.0539 7.21405C4.09161 7.12188 4.1473 7.03814 4.21772 6.96772C4.28814 6.8973 4.37188 6.84161 4.46405 6.8039C4.55622 6.76619 4.65498 6.74721 4.75456 6.74808C4.85415 6.74894 4.95256 6.76963 5.04407 6.80894C5.13557 6.84824 5.21833 6.90538 5.28751 6.97701L9.00001 10.6895L12.7125 6.97701C12.854 6.84039 13.0434 6.7648 13.2401 6.76651C13.4367 6.76822 13.6248 6.84709 13.7639 6.98615C13.9029 7.1252 13.9818 7.31331 13.9835 7.50996C13.9852 7.70661 13.9096 7.89606 13.773 8.03751L9.53026 12.2803Z"
                              fill="#8492A6"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_219_289">
                              <rect
                                width="18"
                                height="18"
                                fill="white"
                                transform="translate(0 0.5)"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </n-space>
                    </n-dropdown>
                  </n-space>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
