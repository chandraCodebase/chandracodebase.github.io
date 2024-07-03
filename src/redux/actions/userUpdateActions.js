// actions/userActions.js
export const SET_USER_DETAIL = 'SET_USER_DETAIL';

export const setUserDetails = (user) => ({
  type: SET_USER_DETAIL,
  payload: user,
});
