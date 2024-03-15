import { configureStore } from '@reduxjs/toolkit'

// ? Reducers
import cartReducer from './slices/cart.slice'
import alertReducer from './slices/alert.slice'

import apiSlice from '@/services/baseApi'
import { setupListeners } from '@reduxjs/toolkit/query'

// ? Actions
export * from './slices/cart.slice'
export * from './slices/alert.slice'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    alert : alertReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (gDM) => gDM().concat(apiSlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)