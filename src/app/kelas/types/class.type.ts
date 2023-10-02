export interface ClassResponse {
  status: number
  message: string
  validation: Validation
  data: Daum[]
}

export interface Validation {}

export interface Daum {
  id: string
  company: Company
  company_user: CompanyUser
  title: string
  created_at: string
  updated_at: any
  programs: Program[]
}

export interface Company {
  id: string
  name: string
  email: string
}

export interface CompanyUser {
  id: string
  email: string
}

export interface Program {
  id: string
  type: string
  title: string
  program_benefits: string
  learning_targets: LearningTargets
  program_information: ProgramInformation
  fasilitator: Fasilitator[]
  status: string
  is_free: boolean
  is_prakerja: boolean
  total_participants: number
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
