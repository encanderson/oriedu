import { ADD_STUDENT, REMOVE_STUDENT } from "./actions";

export const initialState = {
  student: null,
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT: {
      const { forms } = action.payload;
      return {
        ...state,
        student: forms,
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        student: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default studentReducer;
