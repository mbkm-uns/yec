<route lang="yaml">
  meta:
    layout: authenticated.layout
  </route>

<script setup lang="ts"></script>

<template>
      <!-- Bagiann FAQ -->

            <section
              class="relative flex h-40 lg:col-span-5 lg:h-full xl:col-span-6 justify-center items-center bg-orange-50"
            >
              <img src="@/assets/images/landingpage/faq1.png" />
            </section>

            <main
              class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
              <div class="max-w-xl lg:max-w-3xl">
                <div class="relative -mt-16 block lg:hidden"></div>
                <div class="space-y-4">
                  <details class="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                      class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                      <h2 class="font-medium text-xl">
                        Apakah ada batas waktu penggunaan saldo pelatihan?
                      </h2>

                      <svg
                        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>

                    <p class="px-4 leading-relaxed text-gray-700 text-lg">
                      Ya,kamu hanya dapat membeli pelatihan pertamamu dalam waktu 15(lima belas)hari
                      kalender setelah kamu mendapatkan pemberitahuan penetapan sebagai Penerima
                      Kartu Prakerja dari Manajemen Pelaksana. Jika melebihi batas waktu tersebut
                      dan kamu belum membeli pelatihan, Kartu Prakerja kamu akan
                      dinonaktifkan/dicabut kepesertaannya dan kamu tidak dapat mengikuti kembali
                      Program Kartu Prakerja.Saldo bantuan pelatihanmu juga akan hangus dan
                      dikembalikan ke Rekening Negara.
                    </p>
                  </details>

                  <details class="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                      class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                      <h2 class="font-medium text-xl">
                        Apakah saya dapat membeli lebih dari satu pelatihan?
                      </h2>

                      <svg
                        class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>

                    <p class="px-4 leading-relaxed text-gray-700 text-lg">
                      Bisa, namun kamu hanya boleh membeli pelatihan yang kedua setelah kamu
                      menyelesaikan pelatihan pertama kamu dan mengisi rating ulasan. Pastikan kamu
                      masih mempunyai sisa saldo yang cukup dan membeli pelatihan kedua dalam kurun
                      waktu 15 (lima belas) hari kalender setelah penyelesaian pelatihan pertama dan
                      mengisi rating ulasan.
                    </p>
                  </details>
                </div>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana cara membeli pelatihan dari YEC.CO.ID?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Kamu bisa melakukan pembelian pelatihan dari YEC.CO.ID melalui platform digital
                    berikut:
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    1. Tokopedia: https://www.tokopedia.com/kartu-prakerja/partner/yec-co-id
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    2. Kariermu: https://prakerja.karier.mu/mitra/yec-co-id
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700text-lg">
                    3. Bukalapak:
                    https://www.bukalapak.com/kartu-prakerja/lembaga/pt-yureka-edukasi-cipta-yeccoid-3804?source=tab-merchant
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    4.Pijar Mahir: https://pijarmahir.id/instution-partner/yec
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    5. Pintar: https://pintar.co/kartuprakerja#/
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana jika saldo pelatihan saya tidak cukup untuk membeli pelatihan yang
                      saya mau?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Saat ini,kamu hanya dapat membeli pelatihan dengan besaran sama atau kurang dari
                    jumlah pagu kamu. Jadi,pastikan saldo kamu cukup ya untuk membeli pelatihan yang
                    kamu mau.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana jika saya gagal menggunakan saldo pelatihan di Platform Digital?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Pastikan kamu telah memasukkan nomor Kartu Prakerja dan OTP yang benar pada saat
                    membeli pelatihan di Platform Digital. Selain itu, pastikan juga kamu telah
                    memenuhi kriteria untuk mengikuti pelatihan, seperti batas minimal usia dan
                    batas minimal pendidikan.Jika masih terdapat kendala,kamu dapat menghubungngi
                    customer servis Platform Digital:
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    1. Tokopedia: https://www.tokopedia.com/help
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    2. Kariermu:+62 813 1579 2171 (WhatsApp)
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    3. Bukalapak: 021-508 13333
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    4. Pijar Mahir: +62 821 1111 3630 (WhatsApp)
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">5. Pintar: www.pintar.co</p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana jika pembelian pelatihan saya bermasalah?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Saat membeli pelatihan, pastikan bahwa saldo pelatihan kamu masih tersedia,
                    koneksi internet stabil dan kamu telah memasukkan nomor Kartu Prakerja dan OTP
                    yang benar. Kamu juga harus memastikan kamu memenuhi kriteria untuk mengikuti
                    pelatihan, seperti batas minimal usia dan batas minimal pendidikan. Jika masih
                    bermasalah, kamu bisa menghubungi customer service Mitra Platform Digital di
                    bawah ini:
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    1. Tokopedia: https://www.tokopedia.com/help
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    2. Kariermu:+62 813 1579 2171 (WhatsApp)
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    3. Bukalapak: 021-508 13333
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">
                    4. Pijar Mahir: +62 821 1111 3630 (WhatsApp)
                  </p>
                  <p class="px-2 leading-relaxed text-gray-700 text-lg">5. Pintar: www.pintar.co</p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apakah pelatihan yang sudah saya beli namun belum diikuti bisa diganti?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Kamu tidak bisa mengganti pelatihan yang sudah dibeli meskipun belum kamu ikuti.
                    Kamu harus mengikuti pelatihan tersebut sampai selesai.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">Bagaimana saya bisa redeem pelatihan?</h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Untuk bisa redeem pelatihan,kamu harus melihat kode redeem yang ada bisa dilihat
                    di email atau detail pelatihan di dashboard kamu.Buka kotak masuk email yang
                    kamu daftarkan ke akun Prakerja.Cari email dengan kata kunci "Pembelian
                    Pelatihan" seperti dibawah ini kamu akan menemukan kode redeem yang bisa kamu
                    gunakan untuk redeem pelatihan.
                  </p>
                  <img src="@/assets/images/landingpage/tutor.png" class="w-full" />
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Selain di email, kamu juga bisa melihat kode redeem di detail pelatihan yang
                    sudah kamu beli di dashboard. Klik pelatihan yang sudah kamu beli di Pelatihan
                    Saya.
                  </p>
                  <img src="@/assets/images/landingpage/cov1.png" class="w-full" />
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Jika kamu membeli pelatihan yang diselenggarakan secara online, kamu bisa
                    melihat kode redeem dengan tampilan di bawah ini.
                  </p>
                  <img src="@/assets/images/landingpage/cov2.png" class="w-full" />
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Jika kamu melakukan pembelian pelatihan dari lembaga YEC.CO.ID, maka silakan
                    akses bakat.yec.co.id untuk meredeem kode redeem tersebut. Kode redeem dan Kode
                    voucher di bakat.yec.co.id hanya dapat diredeem minimal 1 jam sebelum jadwal
                    yang kamu pilih dimulai, dan maksimal 1 jam setelah jadwal yang kamu pilih
                    dimulai. Berikut tata caranya :
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    1. Masukkan kode redeem yang ada di menu “Kelas Saya” untuk mengikuti pelatihan
                  </p>
                  <img src="@/assets/images/landingpage/cov3.png" class="w-full" />
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    2. Kemudian masukkan kode voucher yang kamu dapatkan dari transaksi/bukti
                    pembayaran/invoice platform digital (Tokopedia/Karier.mu/Bukalapak/Pijar
                    Mahir/Pintar)
                  </p>
                  <img src="@/assets/images/landingpage/cov4.png" class="w-full" />
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    3. Kemudian klik “redeem” maka nanti kelas yang kamu beli akan muncul di menu
                    “Kelas Saya”
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    4. Silakan klik kelas yang kamu beli, kemudian klik “aktivitas”
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    5. Ikuti semua aktivitas yang tersedia hingga progressnya 100 persen hingga
                    mendapatkan sertifikat
                  </p>
                </details>
                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana jika redeem pelatihan saya bermasalah?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Ada beberapa penyebab kode redeem kamu bermasalah, yaitu:
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    1. Kode redeem tidak ditemukan
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    2. Tipe pelatihan tidak sesuai
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    3. Kode redeem bukan milik lembaga pelatihan yang kamu pilih
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    4. Kode redeem sudah dibatalkan
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    5. Transaksi sudah dibatalkan
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    6. Kode redeem sudah digunakan
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Pastikan kamu sudah mengisi kode redeem sesuai yang tertera di email dan detail
                    pelatihan di dashboard kamu. Jika masih ada kendala, silakan hubungi Call Center
                    Prakerja di 08001503001
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apakah ada tes yang hatus saya ikuti sebelum memulai pelatihan?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Ya, penerima Kartu Prakerja wajib mengikuti pre-test atau tes awal terlebih
                    dahulu di lembaga pelatihan sebelum memulai pelatihan. Tes awal ini terdiri dari
                    beberapa pertanyaan mengenai materi pelatihan yang kamu pilih. Tenang saja, tes
                    awal ini hanya bertujuan untuk melihat pengetahuan awal kamu, kok!
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apakah selama pelatihan daring wajib on cam?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Wajib, silakan on cam selama pelatihan berlangsung agar bukti kehadiran kamu
                    dapat terecord
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana format penamaan zoom bagi peserta yang hadir dalam sesi pelatihan
                      daring (saat live webinar) tersebut?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Silakan kamu mengubah nama akun zoom sesuai format di bawah ini, agar tim dapat
                    melakukan pengecekan kehadiran:
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    1. Untuk Peserta Kartu Prakerja: “Kartu Prakerja - Nama Lengkap Peserta Sesuai
                    KTP”
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    2. Untuk Peserta Non Kartu Prakerja: “Nama Lengkap”
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana jika saya tidak dapat melanjutkan pelatihan karena kendala
                      divideo/webinar saya?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Kamu harus memastikan koneksi jaringan stabil saat mengambil pelatihan dan coba
                    menggunakan perangkat lain terlebih dahulu. Jika kamu masih mengalami kendala,
                    kamu bisa menghubungi CS YEC.CO.ID khusus pelatihan Prakerja di +62
                    853-3584-9962 (WhatsApp chat)
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Saya sudah menyelesaikan pelatihan, kok sertifikat belum muncul didashboard
                      Prakerja?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Sertifikat pelatihan akan muncul di dashboard kamu setelah menyelesaikan
                    pelatihan paling lambat satu hari kerja sesudah Manajemen Pelaksana menerima
                    laporan penyelesaian pelatihan dari Platform Digital. Jika sertifikat belum
                    muncul di dashboard lebih dari 7 (tujuh) hari kerja.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Mengapa nama disertifikat tidak sesuai dengan nama saya?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Sertifikat pelatihan diterbitkan langsung oleh Lembaga Pelatihan. Jika ada
                    kekeliruan dalam penulisan nama di sertifikat pelatihan, kamu bisa menghubungi
                    Lembaga Pelatihan untuk konfirmasi lebih lanjut. Selain itu, pastikan kamu
                    menggunakan nama asli kamu di profil akun Platform Digital dan akun
                    bakat.yec.co.id agar nama di sertifikat sama dengan nama aslimu (jika kamu
                    melakukan pembelian pelatihan dari YEC.CO.ID)
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apa yang harus saya lakukan setelah menyelesaikan pelatihan ?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Setelah menyelesaikan pelatihan dan mendapatkan sertifikat, kamu harus segera
                    mengisi rating dan ulasan pelatihan di dashboard kamu. Pastikan kamu memberikan
                    rating dan ulasan dengan jujur sesuai pengalaman pelatihan kamu
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana cara mengisi rating dan ulasan didashboard saya?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    1. Cek Pelatihan Saya di dashboard kamu dan pastikan tombol Tulis Ulasan sudah
                    aktif dan berwarna biru. Kilik tombol tersebut
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    2. Akan muncul pop up untuk mulai mengisi ulasan. Klik Mulai Beri Ulasan
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    3. Pilih bintang untuk mengisi rating sesuai dengan tingkat kepuasanmu saat
                    mengikuti pelatihan. Bintang 1 (satu) artinya kamu sangat tidak puas dan bintang
                    5 (lima) artinya kamu sangat puas. Jika sudah memberi rating, klik Lanjut
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    4. Tulis ulasan dengan jujur untuk meningkatkan kualitas pelatihan yang kamu
                    ambil. Jika sudah, klik Lanjut
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    5. Cek kembali rating dan ulasan yang sudah kamu isi. Pastikan ya sudah sesuai
                    dengan pengalaman kamu selama mengikuti pelatihan! Jika sudah sesuai, klik Kirim
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Jika nilai tes akhir pelatihan saya tidak memuaskan, apakah saya tetap bisa
                      menerima insentif ?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Kamu tetap akan menerima insentif selama kamu sudah menyelesaikan pelatihan yang
                    ditandai dengan sertifikat penyelesaian pelatihan serta mengisi rating dan
                    ulasan di dashboard Prakerja kamu. Nilai tes akhir pelatihan kamu hanya
                    digunakan untuk menilai pemahaman kamu terhadap pelatihan yang telah diikuti.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">Siapa saja yang bisa mendapatkan intensif ?</h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Insentif hanya diberikan kepada pemegang Kartu Prakerja yang sah yang telah
                    menyelesaikan pelatihan pertama, mengisi rating dan ulasan pelatihan pertama dan
                    telah menyambungkan rekening bank atau e-money.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apa saja jenis intensif dan berapa jumlahnya?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Insentif terdiri dari 2 (dua) jenis:
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    1. Insentif biaya mencari kerja sebanyak 1 (satu) kali sebesar Rp600.000 (enam
                    ratus ribu Rupiah)
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    2. Insentif pengisian survei evaluasi sebesar Rp50.000 (lima puluh ribu Rupiah)
                    yang diberikan paling banyak 2 (dua) kali.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">Kapan saya mendapatkan insentif?</h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">Insentif biaya cari kerja</h2>
                  </summary>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Jika kamu lolos menjadi Penerima Kartu Prakerja, kamu akan menerima insentif
                    biaya mencari kerja setelah:
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    1. Telah menyelesaikan Pelatihan yang ditandai dengan adanya sertifikat
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    2. Telah memberikan ulasan (review) dan penilaian (rating) terhadap pelatihan di
                    dashboard kamu.
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    3. Jika Penerima Kartu Prakerja mengikuti lebih dari satu pelatihan, insentif
                    biaya mencari kerja hanya diberikan pada saat penyelesaian pelatihan yang
                    pertama. Tidak ada insentif untuk pelatihan kedua dan seterusnya.
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    4. Telah berhasil menyambungkan nomor rekening bank atau e-money di akun situs
                    www.prakerja.go.id
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    5. Nomor rekening bank atau e-money yang didaftarkan telah tervalidasi
                    (menggunakan NIK yang sama dengan NIK terdaftar di Kartu Prakerja dan sudah KYC
                    atau akun e-money sudah premium/upgrade) oleh bank/perusahaan e-money terkait.
                  </p>
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">Insentif pengisian survei evaluasi</h2>
                  </summary>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Akan diterima jika Penerima Kartu Prakerja telah mengisi survei evaluasi pada
                    dashboard akun kamu di situs www.prakerja.go.id untuk mengetahui evaluasi
                    efektivitas Program Kartu Prakerja.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Kapan paling lambat saya harus menyelesaikan pelatihan untuk mendapatkan
                      intensif?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Untuk mendapatkan insentif, kamu harus segera menyelesaikan pelatihan pertama
                    dan memberikan rating dan review pelatihan paling lambat di bulan Desember di
                    tahun yang sama. Kamu juga harus ingat bahwa untuk menerima insentif, kamu harus
                    menyelesaikan pelatihan pertama kamu paling lambat tanggal 4 Desember pada tahun
                    anggaran berjalan. Jadi, pastikan kamu menyelesaikan pelatihan pertama dan
                    berikan rating dan review secepatnya agar insentif kamu tidak hangus, ya!
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apakah saya bisa mendapatkan intensif jika belum menjadi Penerima Kartu
                      Prakerja?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Tidak, kamu hanya bisa mendapatkan insentif ketika kamu telah menjadi Penerima
                    Kartu Prakerja yang sah, telah menyelesaikan pelatihan pertama kamu dan memenuhi
                    persyaratan sebagaimana disebutkan di atas.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Dimana saya bisa mengecek jumlah intensif yang akan saya terima?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Kamu bisa cek pada akun dashboard kamu. Pastikan kamu cek statusnya secara
                    berkala, ya.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apa saja yang membuat intensif saya gagal dicairkan?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Insentif kamu bisa gagal dicairkan apabila:
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    1. Belum mengisi ulasan (review) pelatihan di dashboard kamu.
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    2. Belum memberikan penilaian (rating) pelatihan di dashboard kamu
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    3. Nomor rekening bank atau akun e-money yang kamu daftarkan pada Kartu Prakerja
                    tidak aktif atau bermasalah.
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    4. Akun e-money kamu belum di-upgrade atau melakukan KYC (verifikasi KTP dan
                    swafoto).
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    5. Batas transaksi dalam 1 (satu) bulan dan saldo akun e-money kamu melebihi
                    batas maksimum yang diperbolehkan oleh penyelenggara e-money atau ketentuan
                    peraturan perundang-undangan.
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    6. Data diri yang didaftarkan pada e-money tidak sesuai dengan yang didaftarkan
                    pada akun Kartu Prakerja.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apakah intensif diberikan secara tunai atau non-tunai?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Insentif kamu akan diberikan non-tunai dengan cara ditransfer ke rekening bank
                    atau akun e-wallet yang telah kamu daftarkan.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">Bagaimana intensif saya akan disalurkan?</h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Insentif akan disalurkan melalui akun e-wallet atau rekening bank yang telah
                    kamu daftarkan di akun kamu melalui situs www.prakerja.go.id
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Berapa lama proses pencairan insetif ke rekening atau e-money saya?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Pencairan insentif ke rekening atau e-wallet kamu membutuhkan waktu 3-5 hari
                    kerja sejak tanggal penjadwalan insentif muncul di dashboard akun kamu. Jika
                    lebih dari 5 (lima) hari kerja kamu masih belum menerima insentif, silakan
                    hubungi kami melalui Call Center Prakerja di 08001503001
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Mengapa pencairan intensif saya belum terjadwal?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Jika belum ada jadwal pencairan insentif di dashboard kamu, pastikan kembali
                    bahwa kamu sudah menyelesaikan pelatihan serta memberikan rating dan ulasan
                    pelatihan. Silakan menunggu 1x24 jam untuk sinkronisasi jadwal pencairan
                    insentif kamu.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Bagaimana jika saya belum menerima intensif padahal sudah ada jadwal pencairan
                      intensif didashboard saya?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Pencairan insentif dilakukan secara bertahap. Oleh karena itu, pastikan kamu
                    sudah memenuhi seluruh syarat dan ketentuan yang berlaku untuk mendapatkan
                    insentif. Lakukan juga pengecekan berkala di dashboard akun kamu dan riwayat
                    rekening bank/e-wallet yang telah terhubung dengan akun Prakerja. Jika dalam
                    waktu 5 hari kerja kamu masih belum menerima insentif, silakan hubungi Call
                    Center Prakerja di 08001503001.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Apakah saya mendapatkan intensif lain setelah mendapatkan intensif biaya
                      mencari kerja?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Setelah mendapat insentif biaya mencari kerja, kamu juga dapat memperoleh
                    insentif pengisian survei evaluasi dengan mengisi survei evaluasi sesuai jadwal
                    yang tersedia di dashboard kamu. Insentif ini hanya diberikan kepada penerima
                    Kartu Prakerja yang mengisi survei evaluasi paling lambat tanggal 10 Desember
                    tahun anggaran berjalan. Ingat ya, isi survei evaluasi kamu dengan jujur sesuai
                    dengan keadaan kamu!.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">
                      Mengapa saya tidak mendapatkan jadwal pengisian survei evaluasi?
                    </h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    Jadwal pengisian survei evaluasi hanya diberikan kepada Penerima Kartu Prakerja
                    yang telah menerima insentif biaya mencari kerja. Pastikan kamu sudah menerima
                    insentif tersebut dan cek terus dashboard kamu untuk mengetahui jadwal terbaru.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium text-xl">Kontak Admin YEC Prakerja</h2>

                    <svg
                      class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>

                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    1. Group FB Panduan Kartu Prakerja
                  </p>
                  <a
                    class="px-4 leading-relaxe text-lg text-orange-500"
                    href="https://www.facebook.com/groups/prakerja.yec"
                  >
                    https://www.facebook.com/groups/prakerja.yec</a
                  >
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    2. Group Telegram Panduan Prakerja by YEC
                  </p>
                  <a
                    class="px-4 leading-relaxe text-lg text-orange-500"
                    href="https://t.me/joinchat/A9ea-qrWsoozZDE1"
                    >https://t.me/joinchat/A9ea-qrWsoozZDE1</a
                  >
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    3. Email : prakerja@yec.co.id
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    4. Instagram : @bakat.yec
                  </p>
                  <p class="px-4 leading-relaxed text-gray-700 text-lg">
                    5. CS WhatsApp : +62 853-3584-9962 (Hanya Chat)
                  </p>
                </details>
              </div>
            </main>
</template>
