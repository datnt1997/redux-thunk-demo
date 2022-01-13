import { configureStore } from '@reduxjs/toolkit';
import UsersReducer from './UserList/UsersReducer';

export const store = configureStore({
  reducer: {
    users: UsersReducer
  },
});
