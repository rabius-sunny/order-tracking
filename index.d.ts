export type TLoginData = {
  email: string
  password: string
}
export type TStatus =
  | 'LISTED'
  | 'PLACED'
  | 'PROCESSING'
  | 'DELIVERED'
  | 'CANCELLED'
