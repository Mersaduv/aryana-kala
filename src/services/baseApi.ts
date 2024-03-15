import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:7261/',
    timeout: 60000,
  }),

  tagTypes: ['User', 'Review', 'Details', 'Order', 'Product', 'Category', 'Slider', 'Banner'],
  endpoints: (builder) => ({}),
})

export default apiSlice