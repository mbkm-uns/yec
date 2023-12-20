export interface DetailResponse {
  status: number
  message: string
  validation: Validation
  data: Data
}

export interface Validation {}

export interface Data {
  id: string
  company_certificate: CompanyCertificate
  member: Member
  license: string
  licenses: Licenses
  program: Program
  topics: Topic[]
  is_complete: boolean
  is_lock: boolean
  is_from_subscribe: boolean
  is_disqualified: boolean
  results: Results
  start_test_at: string
  end_test_at: any
  meta: any
  created_at: string
  updated_at: string
}

export interface CompanyCertificate {
  participant: Participant
  graduation: Graduation
  logo: Logo
  show_competence: boolean
  signature: Signature
  pattern_number: string
}

export interface Participant {
  title: string
  sub_title: string
  url: string
}

export interface Graduation {
  title: string
  sub_title: string
  url: string
}

export interface Logo {}

export interface Signature {
  title: string
  image: Image
  name: string
}

export interface Image {}

export interface Member {
  id: string
  email: string
  phone: string
  fullname: string
  date_of_birth: string
  meta: Meta
}

export interface Meta {}

export interface Licenses {
  id: string
  merchant: Merchant
}

export interface Merchant {
  id: string
  name: string
}

export interface Program {
  id: string
  type: string
  title: string
  program_benefits: string
  learning_targets: LearningTargets
  program_information: ProgramInformation
  fasilitator: Fasilitator[]
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
  is_complete: boolean
  is_lock: boolean
  is_disqualified: boolean
  score: number
  activities: Activity[]
}

export interface Activity {
  id: string
  title: string
  repeat_test: number
  type: 'membaca-e-book' | 'menonton_video' | 'pre_test' | 'berdiskusi_daring' | 'quiz' | 'evaluasi' | 'praktek_mandiri' | 'evaluasi_praktek_mandiri'| 'post_test'
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
  start_test_at?: string
  end_test_at?: string
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
  meta_data: MetaDaum[]
  meeting: Meeting
  embed_youtube: any[]
}

export interface File {
  id?: string
  type?: string
  url?: string
}

export interface LinkEmbed {
  is_showing: boolean
  url: string
}

export interface MetaDaum {
  title: string
  content: string
}

export interface Meeting {
  is_clicked: boolean
  is_day: boolean
  dates: Date[]
  link: string
  is_must_participate: boolean
  days: any[]
}

export interface Date {
  date: string
  times: Time[]
}

export interface Time {
  start_time: string
  end_time: string
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

export interface Results {
  score: number
  progress: number
  total_activity: number
  total_activity_completed: number
  total_topic: number
  total_topic_completed: number
  certificates: Certificates
  scores: Scores
}

export interface Certificates {
  number: string
  graduation: Graduation2
  participant: Participant2
}

export interface Graduation2 {}

export interface Participant2 {}

export interface Scores {
  test: Test[]
  post_test: PostTest
  pre_test: PreTest
}

export interface Test {
  activity_id: string
  set_minimum_value: SetMinimumValue2
  type: string
  score: number
  section: any[]
}

export interface SetMinimumValue2 {
  is_set: boolean
  minimum_value: number
}

export interface PostTest {
  activity_id: string
  set_minimum_value: SetMinimumValue3
  type: string
  scores: any[]
  score: number
  final_score: number
  section: any
}

export interface SetMinimumValue3 {
  is_set: boolean
  minimum_value: number
}

export interface PreTest {
  activity_id: string
  set_minimum_value: SetMinimumValue4
  type: string
  score: number
  section: any
}

export interface SetMinimumValue4 {
  is_set: boolean
  minimum_value: number
}


