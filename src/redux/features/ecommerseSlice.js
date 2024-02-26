import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getAuth, signOut} from "firebase/auth"
import {Navigate} from "react-router-dom"
export const fetchData = createAsyncThunk(
  "ecommerse/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://render-json-server-8q4k.onrender.com/data"
      )
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue({error: error.message})
    }
  }
)

const initialState = () =>
  JSON.parse(localStorage.getItem("ecommerse")) || {
    allData: null,
    userData: null,
    loading: false,
    error: null,
    allSelectData: [],
    allCount: 0,
    allPrice: 0,
  }

const ecommerseSlice = createSlice({
  name: "ecommerse",
  initialState,
  reducers: {
    // logout: (state, {payload}) => {
    //   const auth = getAuth()
    //   signOut(auth)
    //     .then(() => {
    //       console.log("signout")
    //       localStorage.removeItem("ecommerse")
    //     })
    //     .catch((error) => {
    //       console.log(error.message)
    //     })
    // },

    setUser: (state, {payload}) => {
      state.userData = payload
      localStorage.setItem("ecommerse", JSON.stringify(state))
    },
    deleteAll: (state, {payload}) => {
      state.allSelectData = []
      state.allCount = 0
      localStorage.setItem("ecommerse", JSON.stringify(state))
    },
    addToCard: (state, {payload}) => {
      const item = state.allSelectData.find(
        (select) => select.id === payload.id
      )
      if (item) {
        item.amount += 1
      } else {
        state.allSelectData = [...state.allSelectData, payload]
      }
      ecommerseSlice.caseReducers.globalCounter(state)
    },
    incrementData: (state, {payload}) => {},
    decrementData: (state, {payload}) => {
      const item = state.allSelectData.find(
        (select) => select.id === payload.id
      )

      item && item.amount--
      ecommerseSlice.caseReducers.globalCounter(state)
    },
    globalCounter: (state) => {
      let price = 0
      let total = 0
      state.allSelectData.forEach((select) => {
        price = select.amount * select.price
        total = select.amount
      })
      state.allPrice = price
      state.allCount = total
      localStorage.setItem("ecommerse", JSON.stringify(state))
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false
        state.allData = action.payload
        state.error = null
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
        console.log(state.error)
      })
  },
})

export const {addToCard, deleteAll, globalCounter, setUser, decrementData} =
  ecommerseSlice.actions

export default ecommerseSlice.reducer
