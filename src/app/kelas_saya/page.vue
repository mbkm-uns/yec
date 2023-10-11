<template>
  <div class="px-4 max-w-screen-xl mx-auto">
    <div class="space-y-10">
      <div class="flex flex-col">
        <div class="voucher py-10">
          <p class="text-black font-poppins text-md font-medium leading-normal">
            Redeem Voucher Kelas yang Sudah Anda Beli
          </p>
          <p class="text-sm">Dengan akun <b>Doni (62881080140000)</b></p>

          <n-alert type="warning" closable class="mt-5">
            <div class="space-y-3 text-sm font-poppins text-gray-700">
              <p class="font-bold">Kebijakan Menukar Kode Redeem dan Kode Voucher Khusus Prakerja:</p>
              <p>
                Kamu hanya bisa menukarkan kode redeem dan kode voucher pada jadwal hari pertama
                pelatihanmu,
                <b>
                  yaitu 1 jam sebelum pelatihan hari pertamamu dimulai dan maksimal 1 jam setelah
                  pelatihan hari pertamamu dimulai.
                </b>
              </p>
              <p class="space-x-5">
                <b>Tutorial tata cara redeem kode voucher dan kode redeem</b>
              </p>
            </div>
            <div class="mt-5">
              <router-link to="/kelas">
                <n-button strong round color="#F05326"> Klik Disini </n-button>
              </router-link>
            </div>
          </n-alert>
        </div>

        <div>
          <div class="flex flex-col gap-4">
            <n-form>
              <n-form-item label="Kode Redeem">
                <n-input
                  type="text"
                  placeholder="Masukkan kode redeem (khusus user Kartu Prakerja)"
                />
              </n-form-item>
              <n-form-item label="Kode Voucher">
                <n-input type="text" placeholder="Masukkan kode voucher" />
              </n-form-item>
              <div class="flex gap-4">
                <n-button color="#F05326"> Redeem </n-button>
              </div>
            </n-form>
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
              <div class="md:flex space-x-10">
                <div class="space-y-2">
                  <p class="font-bold">Paket berlangganan Anda telah habis</p>
                  <p>Akses kelas Anda kembali dengan membeli voucher paket berlangganan</p>
                </div>
                <n-button strong round color="#F05326"> Beli Paket Berlangganan </n-button>
              </div>
            </div>

            <div class="mt-8 space-y-4 text-center text-sm">
              <p class="text-lg font-bold">Anda belum berlangganan</p>
              <p>Untuk mendapatkan akses ke semua kelas, silakan beli paket berlangganan Anda</p>
              <n-button strong round color="#F05326"> Beli Paket Berlangganan </n-button>
            </div>
          </n-tab-pane>
        </n-tabs>
      </div>
    </div>
  </div>
</template>
