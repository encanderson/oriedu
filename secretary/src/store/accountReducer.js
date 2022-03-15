import { ACCOUNT_INITIALIZE, LOGIN, LOGOUT, EDIT_USER } from "./actions";

export const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_INITIALIZE: {
      const { isLoggedIn, user } = action.payload;
      return {
        ...state,
        isLoggedIn: isLoggedIn,
        isInitialized: true,
        user: user,
      };
    }
    case LOGIN: {
      const { user } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        user: user,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case EDIT_USER: {
      const { user } = action.payload;
      return {
        ...state,
        user: user,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
