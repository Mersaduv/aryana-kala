import { ICategory } from "@/types"

export type ICategoryForm = Omit<ICategory, 'id' | 'children' | 'createdAt' | 'updatedAt'>

export type ILoginForm = {
  email: string
  password: string
}

export type IRegisterForm = {
  name: string
  email: string
  password: string
  confirmPassword: string
}
