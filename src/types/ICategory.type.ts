export interface ICategory {
  _id: string
  name: string
  slug: string
  parent?: string
  image: string
  children?: ICategory[]
}