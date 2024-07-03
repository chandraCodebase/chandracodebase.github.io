// reducers/userReducer.js
import { SET_USER_DETAIL } from '../actions/userUpdateActions';

const initialState = {
  user: {
    name: '',
    email: '',
    phone: '',
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAIL:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
