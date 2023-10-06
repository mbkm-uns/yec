<script setup lang="ts">
import axios from 'axios'
</script>

<template>
  <n-card>
    <div>
      <img src="@/assets/images/landingpage/kelas_prakerja/poster1.png" class="rounded-lg" />
    </div>
    <n-text class="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
      Siap Kerja Dengan Kartu PraKerja
    </n-text>
    <br />
    <br />
    <n-text class="mt-6 max-w-lg leading-relaxed text-gray-700"
      >PT Yureka Edukasi Cipta yang memiliki nama brand YEC CO ID berdiri pada tahun 2010 dengan
      nama awal Euraka Tour, sebuah layanan jasa tour spesialis Kampung Inggris. Saat ini YEC fokus
      membantu setiap peserta menjadi individu lebih baik. Tidak hanya sebatas menjadi jasa
      tour,namun juga menjadi konsultan pendidikan dan media yang membantu menjadikan diri lebih
      baik dengan kemudahan akses informasi dan program pelatihan terkait tes TOEFL,IELTS, Persiapan
      Kerja dan Pembelajaran Bahasa Inggris sehari-hari.
    </n-text>
    <br />
    <br />
    <n-text
      >Serta pada tahun 2020,YEC CO ID bergabung bersama program Kartu Prakerja,memberikan pelatihan
      kepada peserta kartu prakerja yang memiliki keinginan untuk mengembangkan keahlian agar lebih
      percaya diri terjun ke dunia kerja,maupun membuat usaha
    </n-text>
  </n-card>
  <n-card class="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6">
    <n-list role="list">
      <div class="space-y-4">
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">A. Program Kartu Prakerja</h2>

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

          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Program Kartu Prakerja adalah program pengembangan kompetensi Kerja dan kewirausahaan
            yang ditujukan untuk pencari kerja, pekerja/buruh yang terkena pemutusan hubungan kerja,
            dan/atau pekerja/buruh yang membutuhkan peningkatan kompetensi, termasuk pelaku usaha
            mikro dan kecil. Kami percaya bahwa masyarakat Indonesia sesungguhnya ingin selalu
            meningkatkan kemampuannya. Program ini didesain sebagai sebuah produk dan dikemas
            sedemikian rupa agar memberikan nilai bagi pengguna sekaligus memberikan nilai bagi
            sektor swasta
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Jalan digital melalui marketplace dipilih untuk memudahkan pengguna
            mencari,membandingkan,memilih dan memberi evaluasi. Hanya dengan cara ini, produk bisa
            terus diperbaiki,tumbuh dan relevan. Menggandeng pelaku usaha swasta,program ini adalah
            wujud kerjasama pemerintah dan swasta dalam melayani masyarakat dengan semangat gotong
            royong demi SDM unggul,Indonesia maju.
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">B. Persyaratan Pendaftaran Kartu Prakerja</h2>

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

          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            1.WNI berusia paling rendah 18 tahun dan paling tinggi 64 tahun
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            2.Tidak sedang menempuh pendidikan formal.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            3.Sedang mencari kerja,pekerja/buruh yang terkena PHK, atau pekerja/buruh yang
            membutuhkan peningkatan kompetensi kerja,seperti pekerja/buruh yang dirumahkan dan
            pekerja bukan menerima upah, termasuk pelaku usaha & kecil.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            4.Bukan Pejabat Negara, Pimpinan dan Anggota DPRD,Aparatur Sipil Negara,Prajurit TNI,
            Anggota Polri,Kepala Desa dan perangkat desa dan Direksi/Komisaris/Dewan Pengawas pada
            BUMN atau BUMD
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            5.Maksimal 2 NIK dalam 1 KK yang menjadi Penerima Kartu Prakerja
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">C. Langkah Pendaftaran Kartu Prakerja</h2>

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

          <p class="mt-4 px-4 leading-relaxed text-gray-700">1. Daftar</p>
          <p class="px-4 leading-relaxed text-gray-700">
            Buat akun Prakerja dengan data diri kamu.Siapkan e-mail,NIK,nomor KK, nomor HP yang
            masih aktif dan selesaikan tes kemampuan dasar untuk menyelesaikan proses pendaftaran
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">2. Gabung Gelombang</p>
          <p class="px-4 leading-relaxed text-gray-700">
            Ikut seleksi dengan gabung gelombang.Tunggu pengumuman hasil seleksinya
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">3.Pilih Pelatihan</p>
          <p class="px-4 leading-relaxed text-gray-700">
            Gunakan saldo pelatihan sebesar Rp 3,5 juta, pilih yang kamu butuhkan di Mitra Platform
            Digital dan bayar dengan nomor Kartu Prakerjamu. Pastikan rekening bank/e-wallet kamu
            sudah tersambung sebelum membeli pelatihan
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">4. Ikuti Pelatihan</p>
          <p class="px-4 leading-relaxed text-gray-700">
            Kerjakan pre-test,post-test dan unjuk keterampilan.Selesaikan pelatihan dan dapatkan
            sertifikat.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">5. Beri Rating dan Ulasan</p>
          <p class="px-4 leading-relaxed text-gray-700">
            Berikan rating dan ulasan terhadap pelatihan yang telah kamu selesaikan didashboard
            Prakerjamu
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">6. Dapatkan Insentif</p>
          <p class="px-4 leading-relaxed text-gray-700">
            Tunggu beberapa hari,kamu akan menerima insentif Rp.600.000 direkening bank/e-walletmu.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">7. Isi Survey Evaluasi</p>
          <p class="px-4 leading-relaxed text-gray-700">
            Jawab 2 survei evaluasi di dashboard Prakerjamu dan dapatkan insentif Rp.50.000 untuk
            setiap survei
          </p>
        </details>
        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">D. Cara Tukar Kode Redeem dan Kode Voucher Kelas Prakerja</h2>

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

          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode1.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode2.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode3.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode4.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode5.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode6.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode7.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode8.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode9.png" class="rounded-lg" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/kode10.png" class="rounded-lg" />
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">E. Cara Pembelian Pelatihan</h2>

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

          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Kamu bisa pilih berbagai pelatihan dari YEC.CO.ID melalui digital platform berikut:
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            1.Karier.mu
            <img src="@/assets/images/landingpage/kelas_prakerja/kariermu.png" />
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            2.Tokopedia
            <img src="@/assets/images/landingpage/kelas_prakerja/tokped.png" />
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            3.Pijar Mahir
            <img src="@/assets/images/landingpage/kelas_prakerja/pijar.png" />
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            4.Pintar
            <img src="@/assets/images/landingpage/kelas_prakerja/pintar.png" class="h-8" />
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            5.Bukalapak
            <img src="@/assets/images/landingpage/kelas_prakerja/bukalapak.png" class="h-12" />
          </p>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">F. Mengapa Harus Memilih Kelas Pelatihan di YEC.CO.ID ?</h2>

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
          <div role="list">
            <div role="listitem">
              <p class="mt-4 px-4 leading-relaxed text-gray-700">
                <img src="@/assets/images/landingpage/kelas_prakerja/lampu.png" class="h-28" />
                <span class="font-semibold text-right">Instruktur Berkompeten</span>
              </p>
            </div>
            <p class="mt-4 px-4 leading-relaxed text-gray-700">
              <img src="@/assets/images/landingpage/kelas_prakerja/grup.png" class="h-28" />
            </p>
            <p class="mt-4 px-4 leading-relaxed text-gray-700">
              <img src="@/assets/images/landingpage/kelas_prakerja/admin.png" class="h-28" />
            </p>
          </div>
        </details>

        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
          >
            <h2 class="font-medium">G. Kelas-kelas Yang Dirancang oleh YEC.CO.ID</h2>

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

          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            1. Menggunakan Bahasa Inggris Bagi Calon Sekretaris
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover3.jpg" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Menggunakan Bahasa Inggris Bagi Calon Sekretaris adalah kelas yang disusun khusus untuk
            peserta yang ingin belajar Bahasa Inggris khususnya bagi yang berprofesi sebagai
            Sekretaris. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI
            Nomor 27 Tahun 2009.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi seorang
            calon sekretaris meliputi perkenalan okupasi sekretaris, cakupan tugas, dan pentingnya
            belajar Bahasa Inggris bagi sekretaris, orang-orang di tempat kerja (people at work),
            membuat dan menerima panggilan (making and receiving calls), menerima dan memberi pesan
            (taking and giving messages), menyambut dan menerima tamu (welcoming and receiving
            visitors), dan membuat surat, memo, dan permohonan (letters, inter-office memos, and
            requests) mengingat banyaknya perusahaan multinasional yang terdapat di Indonesia serta
            pentingnya penguasaan Bahasa Inggris sebagai bahasa internasional.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            2. Menggunakan Bahasa Inggris Bagi Calon Tenaga Perkantoran Umum
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover5.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Menggunakan Bahasa Inggris Bagi Calon Tenaga Perkantoran Umum adalah kelas yang disusun
            untuk peserta yang ingin belajar Bahasa Inggris khususnya bagi yang berprofesi sebagai
            tenaga perkantoran umum. Pelatihan ini menggunakan metode ajar webinar. Kelas ini
            merujuk pada SKKNI Nomor 183 Tahun 2016 Administrasi Profesional.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi seorang
            calon tenaga perkantoran umum meliputi perkenalan okupasi tenaga perkantoran umum,
            cakupan tugas, dan pentingnya belajar Bahasa Inggris bagi calon tenaga perkantoran umum,
            bertemu kolega/pelanggan (small talks/basic conversation), membuat-menerima panggilan
            dan memberikan pesan secara lisan (making-receiving calls and taking a message), meminta
            dan memberikan saran/usul (asking and giving opinions) meminta dan memberikan
            klarifikasi (asking for clarification and clarifying one's idea), surat dan pengumuman
            (letters and announcement) mengingat banyaknya perusahaan multinasional yang terdapat di
            Indonesia serta pentingnya penguasaan Bahasa Inggris sebagai bahasa internasional.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            3. Melakukan Komunikasi Bahasa Inggris Melalui Panggilan Telepon Bagi Calon Petugas
            Informasi Pusat Kontak
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover2.jpg" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Melakukan Komunikasi Bahasa Inggris Melalui Panggilan Telepon Bagi Calon Petugas
            Informasi Pusat Kontak adalah kelas yang disusun khusus untuk peserta yang ingin belajar
            Bahasa Inggris khususnya bagi yang berprofesi sebagai Petugas Informasi Pusat Kontak.
            Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 27
            Tahun 2009 Tentang Bahasa Inggris Tenaga Administrasi Profesional
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi seorang
            calon Petugas Informasi Pusat Kontak meliputi perkenalan okupasi Petugas Informasi Pusat
            Kontak, cakupan tugas, dan pentingnya belajar Bahasa Inggris bagi Petugas Informasi
            Pusat Kontak, menggunakan bahasa Inggris untuk melayani pelanggan atau konsumen,
            menggunakan bahasa Inggris untuk menjawab telepon dalam melayani pelanggan atau
            konsumen, menginterpretasikan informasi yang diterima dan memiliki kemampuan komunikasi
            yang efektif, menunjukkan sikap komunikatif dalam berbahasa Inggris, menunjukkan sikap
            terampil dalam penggunaan peralatan komunikasi mengingat banyaknya perusahaan
            multinasional yang terdapat di Indonesia serta pentingnya penguasaan Bahasa Inggris
            sebagai bahasa internasional.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            4. Melakukan Riset Kata Kunci Dan Optimasi SEO Website Untuk Menjadi Manajer Pemasaran
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover1.jpg" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Melakukan Riset Kata Kunci dan Optimasi SEO Website Untuk Menjadi Manajer Pemasaran
            adalah kelas yang dikhususkan untuk peserta yang ingin belajar riset kata kunci dan
            optimasi SEO website. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk
            pada SKKNI Nomor 389 Tahun 2013 Tentang Penetapan Standar Kompetensi Kerja Nasional
            Indonesia Kategori Jasa Profesional, Ilmiah Dan Teknis, Golongan Pokok Kegiatan Kantor
            Pusat Dan Konsultasi Manajemen, Golongan Konsultasi Manajemen, Sub Golongan Konsultasi
            Manajemen Area Kerja Pemasaran.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang riset kata kunci dan optimasi SEO website
            untuk menjadi manajer pemasaran, cakupan tugas, okupasi manajer pemasaran dan pentingnya
            riset kata kunci dan optimasi SEO Website, pengenalan SEO dalam Digital Marketing,
            membangun website, menulis konten, teknik SEO on page dan offpage, dan audit SEO.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            5. Menyusun Surat Perjanjian Bahasa Inggris Bagi Calon Staff Legal
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover6.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Menyusun Surat Perjanjian Bahasa Inggris bagi Calon Staf Legal adalah kelas yang disusun
            untuk peserta yang ingin belajar Bahasa Inggris khususnya bagi yang berprofesi sebagai
            Staf Legal. Pelatihan ini menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI
            Nomor 183 Tahun 2016 tentang Tenaga Administrasi Profesional dan SKKNI Nomor 27 Tahun
            2009 tentang Bahasa Inggris Tenaga Administrasi Profesional.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang menggunakan Bahasa Inggris bagi calon staf
            legal meliputi penggunaan kosa kata Bahasa Inggris yang terdapat pada surat perjanjian
            kerjasama dalam Bahasa Inggris, penggunaan istilah yang terdapat dalam surat perjanjian
            kerjasama berbahasa Inggris, penggunaan grammar (Simple present, Simple Future, dan
            Passive Voices) bahasa Inggris sederhana yang terdapat pada surat perjanjian kerjasama
            berbahasa Inggris, penggunaan kosakata dan grammar bahasa Inggris sederhana untuk
            menyusun surat perjanjian kerja sama dalam bahasa Inggris, dan penggunaan sikap
            komunikatif (pemberian saran/masukan/pendapat) mengenai isi surat perjanjian kerjasama
            dengan menggunakan bahasa Inggris.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            6. Mengolah Data Penjualan Dengan Microsoft Excel Untuk Menjadi Admin Input Data
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover4.jpg" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Mengolah Data Penjualan dengan Microsoft Excel untuk Menjadi Admin Input Data adalah
            kelas yang disusun khusus untuk peserta yang ingin belajar Data Entry khususnya bagi
            yang berprofesi sebagai Admin Input Data. Pelatihan ini menggunakan metode ajar webinar.
            Kelas ini merujuk pada SKKNI Nomor 56 Tahun 2018.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang menggunakan Microsoft Excel untuk Menjadi
            Admin Input Data meliputi Pengenalan Microsoft Excel dan Formula Dasar Microsoft Excel:
            Formula Dasar, Formula Dasar Microsoft Excel: Formula Lanjutan, Mengatur dan Merapikan
            Data Penjualan, Mengolah Data Penjualan Menggunakan Seri Formula IF, Mengolah Data
            Penjualan Menggunakan Formula Look Up dan Pivot Table.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            7. Menyusun Laporan Keuangan Dengan Microsoft Excel Untuk Menjadi Staff Akuntan
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover7.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Menyusun Laporan Keuangan dengan Microsoft Excel untuk Menjadi Staf Akuntan adalah kelas
            yang disusun untuk peserta yang ingin belajar menyusun laporan keuangan menggunakan
            microsoft excel khususnya bagi yang berprofesi sebagai Staf Akuntan. Pelatihan ini
            menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 182 Tahun 2013.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang menggunakan microsoft excel untuk menjadi
            staf akuntan meliputi pengenalan okupasi beserta cakupan tugas staf akuntansi dan
            pengenalan siklus akuntansi, logika akuntansi dan siklus akuntansi (jurnal umum dan
            jurnal khusus), siklus akuntansi (berupa neraca saldo, neraca lajur, ayat jurnal
            penyesuaian dan neraca saldo setelah penyesuaian, membuat sistem akuntansi menggunakan
            microsoft excel dan menyusun laporan keuangan (memproses data dan menyajikan laporan
            keuangan).
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            8. Mengelola Gaji Karyawan Dengan Microsoft Excel Untuk Menjadi Staff Personalia
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover8.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Mengelola Gaji Karyawan dengan Microsoft Excel Untuk Menjadi Staf Personalia adalah
            kelas yang disusun untuk peserta yang ingin belajar tentang mengelola gaji karyawan
            khususnya bagi yang berprofesi sebagai Staff Personalia. Pelatihan ini menggunakan
            metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 149 Tahun 2020 Tentang Manajemen
            Sumber Daya Manusia
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang Pengenalan Dasar-Dasar Kompensasi dan
            Benefit, Struktur Jabatan dan Skala Upah Karyawan, Menghitung Komponen Penambah Gaji,
            Menghitung Komponen Pengurang Gaji, Laporan Gaji Karyawan.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            9. Menyusun Surat Bisnis Dalam Bahasa Inggris Bagi Calon Sekretaris
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover9.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Menyusun Surat Bisnis dalam Bahasa Inggris Bagi Calon Sekretaris adalah kelas yang
            disusun untuk peserta yang ingin belajar tentang menyusun surat bisnis khususnya bagi
            yang berprofesi sebagai sekretaris. Pelatihan ini menggunakan metode ajar webinar. Kelas
            ini merujuk pada SKKNI Nomor 27 Tahun 2009 Bahasa Inggris untuk Tenaga Administrasi
            Profesional
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang Surat Bisnis dalam Bahasa Inggris dan
            Penyusunannya, Penyusunan Surat Bisnis “letter of inquiry” dan “letter of order” dalam
            Bahasa Inggris, Penyusunan surat bisnis “letter of request” dan “letter of reservation”
            dalam Bahasa Inggris, Penyusunan surat bisnis “letter of confirmation” dan “letter of
            reminder” dalam Bahasa Inggris, Penyusunan surat bisnis “adjustment/apology” dalam
            Bahasa Inggris.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            10. Mengembangkan Konten Di Media Sosial Untuk Menjadi Spesialis Pemasaran Digital
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover10.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Mengembangkan Konten di Media Sosial Untuk Menjadi Spesialis Pemasaran Digital adalah
            kelas yang disusun khusus untuk peserta yang ingin belajar mengembangkan konten di media
            sosial khususnya bagi yang berprofesi sebagai spesialis pemasaran digital. Pelatihan ini
            menggunakan metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 124 Tahun 2022
            Tentang Manajemen Bidang Pemasaran.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan materi tentang Pengenalan Social Media Marketing, Merencanakan
            Ide Konten, Memproduksi Konten, Memahami Optimasi & Promosi Konten di Berbagai Platform
            Sosial Media (YouTube,TikTok, Instagram), dan Menganalisis & Membuat Laporan Performa
            Social Media.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            11. Merencankan Strategi Pemasangan Iklan Di Media Sosial Untuk Menjadi Manajer
            Periklanan
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover11.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Merencanakan Strategi Pemasangan Iklan di Media Sosial Untuk Menjadi Manajer Periklanan
            adalah kelas yang disusun khusus untuk peserta yang ingin belajar Profesional Pemasaran
            khususnya bagi yang berprofesi sebagai Manajer Periklanan. Pelatihan ini menggunakan
            metode ajar webinar. Kelas ini merujuk pada SKKNI Nomor 389 Tahun 2013.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang Pengenalan profesi dan iklan di media
            sosial, Memilih audience dan penempatan iklan, Mendesain kreatif iklan, Strategi
            kampanye dan laporan iklan, Materi tingkat lanjut Facebook Pixel
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            12. Mengelola Kinerja Karyawan Untuk Menjadi Manajer Sumber Daya Manusia
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover6.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Mengelola Kinerja Karyawan Untuk Menjadi Manajer Sumber Daya Manusia adalah kelas yang
            disusun untuk peserta yang ingin belajar mengelola kinerja karyawan khususnya bagi yang
            berprofesi sebagai manajer sumber daya manusia. Pelatihan ini menggunakan metode ajar
            webinar. Kelas ini merujuk pada SKKNI Nomor 149 Tahun 2020 Tentang Manajemen Sumber Daya
            Manusia.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang Memahami dasar-dasar manajemen kinerja
            karyawan, merancang indikator kinerja karyawan, merancang proses monitoring kinerja
            karyawan, merancang proses evaluasi kinerja karyawan, menyusun perencanaan peningkatan
            kinerja karyawan
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700 font-semibold">
            13. Merumuskan Kebijakan Organisasi Dan Strategi Pengelolaan SDM Untuk Menjadi Manajer
            Sumber Daya Manusia
          </p>
          <p class="px-4 leading-relaxed text-gray-700">
            <img src="@/assets/images/landingpage/kelas_prakerja/cover12.png" class="w-full" />
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Merumuskan Kebijakan Organisasi dan Strategi Pengelolaan SDM Untuk Menjadi Manajer
            Sumber Daya Manusia adalah kelas yang disusun untuk peserta yang ingin belajar
            merumuskan kebijakan organisasi dan strategi pengelolaan SDM bagi yang ingin berprofesi
            sebagai Manajer Sumber Daya Manusia. Pelatihan ini menggunakan metode ajar webinar.
            Kelas ini merujuk pada SKKNI Nomor 149 Tahun 2020 Tentang Manajemen Sumber Daya Manusia.
          </p>
          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            Peserta akan mendapatkan pengetahuan tentang dasar-dasar manajemen dan perumusan
            kebijakan SDM di perusahaan, merancang kebijakan SDM bagi karyawan di perusahaan,
            merancang operasional pengelolaan SDM di perusahaan, merancang desain hubungan
            industrial yang baik di perusahaan, dan sikap teliti dan cermat dalam merumuskan
            kebijakan perusahaan.
          </p>
        </details>
      </div>
    </n-list>
    <br />
    <div>
      <section class="bg-white">
        <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section class="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
            <img src="@/assets/images/landingpage/faq.jpg" />
          </section>

          <main
            class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
          >
            <div class="max-w-xl lg:max-w-3xl">
              <div class="relative -mt-16 block lg:hidden"></div>
              <div class="space-y-4">
                <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium">Apakah ada batas waktu penggunaan saldo pelatihan?</h2>

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

                  <p class="px-4 leading-relaxed text-gray-700">
                    Ya,kamu hanya dapat membeli pelatihan pertamamu dalam waktu 15(lima belas)hari
                    kalender setelah kamu mendapatkan pemberitahuan penetapan sebagai Penerima Kartu
                    Prakerja dari Manajemen Pelaksana. Jika melebihi batas waktu tersebut dan kamu
                    belum membeli pelatihan, Kartu Prakerja kamu akan dinonaktifkan/dicabut
                    kepesertaannya dan kamu tidak dapat mengikuti kembali Program Kartu
                    Prakerja.Saldo bantuan pelatihanmu juga akan hangus dan dikembalikan ke Rekening
                    Negara.
                  </p>
                </details>

                <details class="group [&_summary::-webkit-details-marker]:hidden">
                  <summary
                    class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                  >
                    <h2 class="font-medium">
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

                  <p class="px-4 leading-relaxed text-gray-700">
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
                  <h2 class="font-medium">Bagaimana cara membeli pelatihan dari YEC.CO.ID?</h2>

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

                <p class="px-4 leading-relaxed text-gray-700">
                  Kamu bisa melakukan pembelian pelatihan dari YEC.CO.ID melalui platform digital
                  berikut:
                </p>
                <p class="px-2 leading-relaxed text-gray-700">
                  1. Tokopedia: https://www.tokopedia.com/kartu-prakerja/partner/yec-co-id
                </p>
                <p class="px-2 leading-relaxed text-gray-700">
                  2. Kariermu: https://prakerja.karier.mu/mitra/yec-co-id
                </p>
                <p class="px-2 leading-relaxed text-gray-700">
                  3. Bukalapak:
                  https://www.bukalapak.com/kartu-prakerja/lembaga/pt-yureka-edukasi-cipta-yeccoid-3804?source=tab-merchant
                </p>
                <p class="px-2 leading-relaxed text-gray-700">
                  4.Pijar Mahir: https://pijarmahir.id/instution-partner/yec
                </p>
                <p class="px-2 leading-relaxed text-gray-700">
                  5. Pintar: https://pintar.co/kartuprakerja#/
                </p>
              </details>

              <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary
                  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                  <h2 class="font-medium">
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

                <p class="px-4 leading-relaxed text-gray-700">
                  Saat ini,kamu hanya dapat membeli pelatihan dengan besaran sama atau kurang dari
                  jumlah pagu kamu. Jadi,pastikan saldo kamu cukup ya untuk membeli pelatihan yang
                  kamu mau.
                </p>
              </details>

              <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary
                  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                  <h2 class="font-medium">
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

                <p class="px-4 leading-relaxed text-gray-700">
                  Pastikan kamu telah memasukkan nomor Kartu Prakerja dan OTP yang benar pada saat
                  membeli pelatihan di Platform Digital. Selain itu, pastikan juga kamu telah
                  memenuhi kriteria untuk mengikuti pelatihan, seperti batas minimal usia dan batas
                  minimal pendidikan.Jika masih terdapat kendala,kamu dapat menghubungngi customer
                  servis Platform Digital:
                </p>
                <p class="px-2 leading-relaxed text-gray-700">
                  1. Tokopedia: https://www.tokopedia.com/help
                </p>
                <p class="px-2 leading-relaxed text-gray-700">
                  2. Kariermu:+62 813 1579 2171 (WhatsApp)
                </p>
                <p class="px-2 leading-relaxed text-gray-700">3. Bukalapak: 021-508 13333</p>
                <p class="px-2 leading-relaxed text-gray-700">
                  4.Pijar Mahir: +62 821 1111 3630 (WhatsApp)
                </p>
                <p class="px-2 leading-relaxed text-gray-700">5. Pintar: www.pintar.co</p>
              </details>

              <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary
                  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                  <h2 class="font-medium">
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

                <p class="px-4 leading-relaxed text-gray-700">
                  Kamu tidak bisa mengganti pelatihan yang sudah dibeli meskipun belum kamu ikuti.
                  Kamu harus mengikuti pelatihan tersebut sampai selesai.
                </p>
              </details>

              <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                <summary
                  class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                >
                  <h2 class="font-medium">Bagaimana saya bisa redeem pelatihan?</h2>

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

                <p class="px-4 leading-relaxed text-gray-700">
                  Untuk bisa redeem pelatihan,kamu harus melihat kode redeem yang ada bisa dilihat
                  di email atau detail pelatihan di dashboard kamu.Buka kotak masuk email yang kamu
                  daftarkan ke akun Prakerja.Cari email dengan kata kunci "Pembelian Pelatihan"
                  seperti dibawah ini kamu akan menemukan kode redeem yang bisa kamu gunakan untuk
                  redeem pelatihan.
                </p>
              </details>
            </div>
          </main>
        </div>
      </section>
    </div>
  </n-card>
</template>
