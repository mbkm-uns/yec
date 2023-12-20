export interface MyClassListResponse {
  status: number
  message: string
  validation: Validation
  data: Data
}

export interface Validation {}

export interface Data {
  limit: number
  list: List[]
  page: number
  total: number
  total_page: number
}

export interface List {
  id: string
  member: Member
  license: string
  licenses: Licenses
  program: Program
  is_complete: boolean
  is_lock: boolean
  is_from_subscribe: boolean
  is_disqualified: boolean
  results: Results
  start_test_at: string
  end_test_at?: string
  meta: Meta
  created_at: string
  updated_at: string
}

export interface Member {
  id: string
  email: string
  phone: string
  fullname: string
  date_of_birth: string
  meta: any
}

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
  graduation: Graduation
  participant: Participant
}

export interface Graduation {
  label?: string
  url?: string
  created_at?: string
}

export interface Participant {
  label?: string
  url?: string
  created_at?: string
}

export interface Scores {
  test: Test[]
  post_test: PostTest
  pre_test: PreTest
}

export interface Test {
  activity_id: string
  set_minimum_value: SetMinimumValue
  type: string
  score: number
  section: any[]
}

export interface SetMinimumValue {
  is_set: boolean
  minimum_value: number
}

export interface PostTest {
  activity_id: string
  set_minimum_value: SetMinimumValue2
  type: string
  score: number
  section: any
  scores?: Score[]
  final_score?: number
}

export interface SetMinimumValue2 {
  is_set: boolean
  minimum_value: number
}

export interface Score {
  score: number
  created_at: string
}

export interface PreTest {
  activity_id: string
  set_minimum_value: SetMinimumValue3
  type: string
  score: number
  section: any
}

export interface SetMinimumValue3 {
  is_set: boolean
  minimum_value: number
}

export interface Meta {
  gift: string
  pmo_voucher: string
}
