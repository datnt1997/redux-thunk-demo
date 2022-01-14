import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUsers = createAsyncThunk(
  'users',
  async (thunkAPI) => {
    const response = await fetch('http://localhost:3000/users').then(res => res.json());
    return response;
  }
)

export { fetchUsers };