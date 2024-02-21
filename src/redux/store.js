import {configureStore} from "@reduxjs/toolkit"
import ecommerseSlice, {fetchData} from "./features/ecommerseSlice"
export const store = configureStore({
  reducer: {
    ecommerse: ecommerseSlice,
  },
})
