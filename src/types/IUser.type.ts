import type { IAddress } from '@/types'

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  mobile: string
  address?: IAddress
}