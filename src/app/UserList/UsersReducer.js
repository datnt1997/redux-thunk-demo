import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

function isFulfilled(action) {
  return action.type.endsWith('fulfilled')
}

const usersSlice = createSlice({
  name: 'usersReducer',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isFulfilled,
        (state, action) => {
          return [...state, ...action.payload];
        }
      )
  },
}
);

export default usersSlice.reducer