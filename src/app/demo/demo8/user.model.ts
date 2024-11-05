export interface User {
  id: number
  email: string
  isAdmin: boolean
  nickname: string
}

export interface RegisterUser {

  email: string
  password: string
  nickname: string
}
