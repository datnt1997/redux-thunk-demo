import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getDataSuccess(state, action) {
      return {
        ...state,
        ...action.payload
      }
    },
  }
})

export const { getDataSuccess } = usersSlice.actions

export default usersSlice.reducer