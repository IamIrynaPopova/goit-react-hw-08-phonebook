export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsAuth = state => state.auth.token;
export const selectUser = state => state.auth.user;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserName = state => state.auth.user.name;
export const selectIsRefreshing = state => state.auth.isRefreshing;
