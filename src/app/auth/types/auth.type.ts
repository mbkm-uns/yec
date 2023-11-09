export type UserType = {
  id: string
  email: string
  phone: string
  fullname: string
  place_of_birth: string
  date_of_birth: string
  gender: string
  is_verified: boolean
  is_updated_profile: boolean
  last_login: string
  meta: Meta
  created_at: string
}

export type Meta = {
  alamat_rumah: string
  code: string
  is_student: string
  kabupaten: string
  kecamatan: string
  kelurahan: string
  nama_sekolah: string
  provinsi: string
}
