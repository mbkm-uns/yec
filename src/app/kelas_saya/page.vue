<route lang="yaml">
meta:
  layout: authenticated.layout
</route>

<script setup lang="ts"></script>
<template>
  <div class="px-4 md:px-20 lg:px-32">
    <div class="space-y-10">
      <div class="mt-8 md:flex md:space-x-10">
        <div class="md:w-1/2 voucher">
          <p class="text-black font-poppins text-md font-medium leading-normal">
            Redeem Voucher Kelas yang Sudah Anda Beli
          </p>
          <p class="text-sm">Dengan akun <b>Doni (62881080140000)</b></p>
          <div class="flex p-5 items-start gap-5 rounded-lg bg-orange-200">
            <n-icon>
              <i-mdi:alert-circle-outline class="text-[#F05326]" />
            </n-icon>

            <div class="space-y-3 text-sm font-poppins text-gray-700">
              <div>Kebijakan Menukar Kode Redeem dan Kode Voucher Khusus Prakerja:</div>
              <div>
                Kamu hanya bisa menukarkan kode redeem dan kode voucher pada jadwal hari pertama
                pelatihanmu,
                <b>
                  yaitu 1 jam sebelum pelatihan hari pertamamu dimulai dan maksimal 1 jam setelah
                  pelatihan hari pertamamu dimulai.
                </b>
              </div>
              <div class="space-x-5">
                <b>Tutorial tata cara redeem kode voucher dan kode redeem</b>
                <router-link to="/kelas">
                  <n-button strong round color="#F05326"> Klik Disini </n-button>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="md:w-1/2 p-5">
          <div class="flex flex-col gap-4">
            <n-input
              type="text"
              placeholder="Masukkan kode redeem (khusus user Kartu Prakerja)"
              class="w-full p-2"
            />
            <div class="flex gap-4">
              <n-input type="text" placeholder="Masukkan kode voucher" class="w-full p-2" />
              <n-button color="#F05326" size="large"> Redeem </n-button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <n-tabs type="line" animated>
          <n-tab-pane name="satuan" tab="Kelas Satuan">
            <div class="space-y-2">
              <div class="flex justify-center items-center">
                <img src="@/assets/images/stationary.png" alt="" />
              </div>
              <p class="text-sm font-bold text-center">Belum ada kelas yang di ikuti</p>
            </div>
          </n-tab-pane>

          <n-tab-pane name="subskripsi" tab="Kelas Subskripsi">
            <div class="space-y-5 text-sm">
              <p>
                Kelas - kelas yang tersedia dibawah ini dapat Anda akses hingga tanggal Lihat paket
                subskripsi saya
              </p>
              <div class="md:flex md:space-x-10">
                <div class="space-y-2">
                  <b>Paket berlangganan Anda telah habis</b>
                  <p>Akses kelas Anda kembali dengan membeli voucher paket berlangganan</p>
                </div>
                <n-button strong round color="#F05326"> Beli Paket Berlangganan </n-button>
              </div>
            </div>

            <div class="mt-8 space-y-4 text-center text-sm">
              <p>Anda belum berlangganan</p>
              <p>Untuk mendapatkan akses ke semua kelas, silakan beli paket berlangganan Anda</p>
              <n-button strong round color="#F05326"> Beli Paket Berlangganan </n-button>
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>
  </div>
</template>
