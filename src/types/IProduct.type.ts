import type { ISize, IColor, ICategory } from '@/types'

export interface IProduct {
  id: string
  title: string
  slug: string
  price: number
  description: string
  discount: number
  imagesSrc: string[]
  sizes: ISize[] | []
  colors: IColor[] | []
  category: string[]
  category_levels: {
    level_one: ICategory
    level_two: ICategory
    Level_three: ICategory
  }
  inStock: number
  sold: number
  info: { title: string; value?: string }[]
  specification: { title: string; value?: string }[]
  rating: number
  numReviews: number
  optionsType: 'colors' | 'sizes' | 'none'
}