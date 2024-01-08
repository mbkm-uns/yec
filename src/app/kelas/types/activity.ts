export interface ActivityResponse {
  status: number
  message: string
  validation: Validation
  data: Data
}

export interface Validation {}

export interface Data {
  id: string
  title: string
  repeat_test: number
  type: 'membaca-e-book' | 'menonton_video' | 'pre_test' | 'berdiskusi_daring' | 'quiz' | 'evaluasi' | 'praktek_mandiri' | 'evaluasi_praktek_mandiri' | 'post_test'
  settings: Settings
  theory: Theory
  upload: Upload
  image_capture: any
  total_question: number
  is_complete: boolean
  is_lock: boolean
  is_disqualified: boolean
  violation: Violation
  face_capture_data: any[]
  score: number
  start_test_at: string
  end_test_at: string
  section: any
}

export interface Settings {
  is_camera_active: boolean
  is_random_packet: boolean
  is_show_discussion: boolean
  is_show_answer: boolean
  set_minimum_value: SetMinimumValue
  opportunity_repeat_test: number
  is_skip: boolean
  is_show_score: boolean
  is_random_question: boolean
  estimated_duration: number
  is_automatic_assessment: boolean
  is_show_timer: boolean
  timer: number
  number_questions_package: number
  rating_weight: number
  face_capture: boolean
  collect_data: CollectData
  disqualification: Disqualification
}

export interface SetMinimumValue {
  is_set: boolean
  minimum_value: number
}

export interface CollectData {
  multi_face_detection: boolean
  open_new_tab: boolean
  chat_detection: boolean
}

export interface Disqualification {
  multi_face_detection: MultiFaceDetection
  open_new_tab: OpenNewTab
  chat_detection: ChatDetection
}

export interface MultiFaceDetection {
  enabled: boolean
  max_violation: number
}

export interface OpenNewTab {
  enabled: boolean
  max_violation: number
}

export interface ChatDetection {
  enabled: boolean
  max_violation: number
}

export interface Theory {
  file: File
  description: string
  link_embed: LinkEmbed
  meta_data: any[]
  meeting: Meeting
  embed_youtube: any[]
}

export interface File {
  id: string
  type: string
  url?: string
}

export interface LinkEmbed {
  is_showing: boolean
  url: string
}

export interface Meeting {
  is_clicked: boolean
  is_day: boolean
  dates: any[]
  link: string
  is_must_participate: boolean
  days: any[]
}

export interface Upload {
  note: Note
  file: File2
}

export interface Note {
  company_user: CompanyUser
  text: string
  score: any
}

export interface CompanyUser {
  id: string
  email: string
}

export interface File2 {}

export interface Violation {
  multi_face_detection: MultiFaceDetection2
  open_new_tab: OpenNewTab2
  chat_detection: ChatDetection2
}

export interface MultiFaceDetection2 {
  total: number
  data: any[]
}

export interface OpenNewTab2 {
  total: number
  data: any[]
}

export interface ChatDetection2 {
  total: number
  data: any[]
}
