import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

export const fetchData = createAsyncThunk(
  "ecommerse/fetchData",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3000/data")
      if (!response.ok) {
        throw new Error("Failed to fetch data")
      }
      return await response.json()
    } catch (error) {
      return thunkAPI.rejectWithValue({error: error.message})
    }
  }
)

const ecommerseSlice = createSlice({
  name: "ecommerse",
  initialState: {
    allData: null,
    loading: false,
    error: null,
  },
  reducers: {},
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

export default ecommerseSlice.reducer
