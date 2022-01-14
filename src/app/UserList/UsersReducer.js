import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const fetchUserById = createAsyncThunk(
  'users',
  async (thunkAPI) => {
    const response = await fetch()
    return response.data
  }
)

function isFulfilledAction(action) {
  return action.type.endsWith('fulfilled')
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilledAction,
        (state, action) => {}
      )
      .addDefaultCase((state, action) => {})
  },
  }
})


export default usersSlice.reducer