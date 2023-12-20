export interface ListQuestion {
  status: number
  message: string
  validation: Validation
  data: Daum[]
}

export interface Validation {}

export interface Daum {
  group_id: string
  is_group: boolean
  list_question: ListQuestion[]
  instruction: Instruction
}

export interface ListQuestion {
  question_id: string
  answer: any[]
  is_correct: boolean
  is_answered: boolean
  point: number
}

export interface Instruction {
  text: string
  media: any[]
}