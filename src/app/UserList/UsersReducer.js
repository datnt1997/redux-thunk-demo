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
          action.payload.map(item => state.push(item));
        }
      )
  },
}
);

export default usersSlice.reducer