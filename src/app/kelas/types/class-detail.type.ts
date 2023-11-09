
export interface ClassDetailResponse {
  status: number
  message: string
  validation: Validation
  data: Data
}

export interface Validation {}

export interface Data {
  id: string
  title: string
  program_benefits: string
  learning_targets: LearningTargets
  program_information: ProgramInformation
  fasilitator: Fasilitator[]
  topic: Topic[]
  status: string
  total_participants: number
  is_prakerja: boolean
  created_at: string
  updated_at: string
}

export interface LearningTargets {
  age_level: string
  studies: Studies
  learning_objectives: string
  competence: string[]
}

export interface Studies {
  id: string
  title: string
}

export interface ProgramInformation {
  cover: Cover
  discount_price: number
  selling_price: number
  learning_duration: number
  selling_link: SellingLink[]
}

export interface Cover {
  id: string
  type: string
  url: string
}

export interface SellingLink {
  title: string
  url: string
}

export interface Fasilitator {
  name: string
  description: string
  picture: Picture
}

export interface Picture {
  id: string
  type: string
  url: string
}

export interface Topic {
  id: string
  name: string
  activities: Activity[]
}

export interface Activity {
  id: string
  title: string
  type: string
  settings: Settings
  theory: Theory
  total_question: number
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
  meta_data: any
  meeting: Meeting
  embed_youtube: any
}

export interface File {}

export interface LinkEmbed {
  is_showing: boolean
  url: string
}

export interface Meeting {
  is_clicked: boolean
  is_day: boolean
  dates: any
  link: string
  is_must_participate: boolean
  days: any
}
