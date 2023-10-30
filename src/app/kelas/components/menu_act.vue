<template>
  <div class="ml-5">
    <div class="space-y-2">
      <details class="overflow-hidden rounded border border-gray-300 w-80">
        <summary
          class="flex items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
        >
          <span class="text-md font-medium"> Aktivitas </span>
        </summary>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Pembuka </span> <br />
            <span class="text-xs font-small"> 4 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-y-1">
              <span class="text-sm font-semibold"> 1. Perkenalan Tenaga Pelatih </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Membaca E-Book</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:03:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 2. Perkenalan Lembaga Pelatihan </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Menonton Video</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:02:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 3. Aktivitas WIIFM </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Membaca E-Book</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:20:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 4. Pre Test </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Mengerjakan Soal</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:15:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Pertemuan 1 </span> <br />
            <span class="text-xs font-small"> 5 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 1. Live Webinar </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Berdiskusi Daring</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>03:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 2. Kuis Pertemuan 1 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Mengerjakan Soal</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 3. Presensi Pertemuan 1 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:03:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 4. Intruksi Tugas Praktik Mandiri</span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 5. Pengumpulan Tugas Praktik Mandiri</span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>01:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Pertemuan 2 </span> <br />
            <span class="text-xs font-small"> 5 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 1. Live Webinar </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Berdiskusi Daring</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>03:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 2. Kuis Pertemuan 2 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Mengerjakan Soal</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 3. Presensi Pertemuan 2 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:03:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 4. Intruksi Tugas Praktik Mandiri</span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 5. Pengumpulan Tugas Praktik Mandiri</span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>01:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Pertemuan 3 </span> <br />
            <span class="text-xs font-small"> 5 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 1. Live Webinar </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Berdiskusi Daring</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>03:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 2. Kuis Pertemuan 3 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Mengerjakan Soal</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 3. Presensi Pertemuan 3 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:03:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 4. Intruksi Tugas Praktik Mandiri</span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 5. Pengumpulan Tugas Praktik Mandiri</span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>01:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Pertemuan 4 </span> <br />
            <span class="text-xs font-small"> 5 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 1. Live Webinar </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Berdiskusi Daring</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>03:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 2. Kuis Pertemuan 4 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Mengerjakan Soal</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 3. Presensi Pertemuan 4 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:03:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 4. Intruksi Tugas Praktik Mandiri</span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 5. Pengumpulan Tugas Praktik Mandiri</span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>01:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Pertemuan 5 </span> <br />
            <span class="text-xs font-small"> 3 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 1. Live Webinar </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Berdiskusi Daring</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>03:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 2. Kuis Pertemuan 5 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Mengerjakan Soal</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 3. Presensi Pertemuan 5 </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:03:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Post Test </span> <br />
            <span class="text-xs font-small"> 1 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 1. Post Test </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Mengerjakan Soal</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:20:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Penutup </span> <br />
            <span class="text-xs font-small"> 2 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 1. Feedback Form Program Prakerja </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Evaluasi</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:03:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 2. Penutupan Program Pelatihan </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Membaca E-book</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:01:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300">
        <summary
          class="flex cursor-pointer items-center justify-between bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-0">
            <span class="text-sm font-semibold"> Unjuk Keterampilan </span> <br />
            <span class="text-xs font-small"> 2 Aktivitas </span>
          </div>

          <span class="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 1. Instruksi Unjuk Keterampilan </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Praktik Mandiri</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>00:05:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>

        <div class="border-t border-gray-200 bg-white">
          <header class="flex items-center justify-between p-4">
            <div class="space-x-1">
              <span class="text-sm font-semibold"> 2. [Pengumpulan] Unjuk Keterampilan </span>
              <div class="flex space-x-4 text-xs text-gray-500">
                <div class="flex space-x-1">
                  <i-quill:paper />
                  <p>Berdiskusi Daring</p>
                </div>
                <div class="flex space-x-1">
                  <i-mdi:clock-outline />
                  <p>02:00:00</p>
                </div>
              </div>
            </div>
          </header>
        </div>
      </details>

      <details class="overflow-hidden rounded border border-gray-300 w-80">
        <summary
          class="flex items-center justify-center gap-2 bg-white p-4 text-gray-900 transition"
        >
          <div class="space-y-1 text-center">
            <span class="text-lg font-medium text-blue-500"> Rp 1.500.000 </span>
            <n-button strong round block type="primary"> Beli Kelas Online </n-button>
          </div>
        </summary>
      </details>
    </div>
  </div>
</template>
