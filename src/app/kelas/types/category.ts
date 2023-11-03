export interface CategoryResponse {
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
  company: Company
  company_user: CompanyUser
  title: string
  created_at: string
  updated_at: any
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
