export interface NotificationResponse {
  status: number
  message: string
  validation: Validation
  data: Data
}

export interface Validation {}

export interface Data {
  list: List[]
  limit: number
  page: number
  total_page: number
  total_data: number
}

export interface List {
  created_at: string
  id: string
  notification: Notification
  read: boolean
  updated_at: any
}

export interface Notification {
  description: string
  id: string
  link: string
  title: string
  type: string
}
