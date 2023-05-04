import { createSlice } from '@reduxjs/toolkit';
import { createUser } from './operations';
import { logIn } from './operations';
import { logOut } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      // state.isLoggedIn = true;
    });
    builder.addCase(logIn.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    });
    // [refreshUser.pending](state) {
    //   state.isRefreshing = true;
    // },
    // [refreshUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // },
    // [refreshUser.rejected](state) {
    //   state.isRefreshing = false;
    // },
  },
});

export const authReducer = authSlice.reducer;
