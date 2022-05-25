import { ADD_EMPLOYEE, REMOVE_EMPLOYEE } from "./actions";

export const initialState = {
  employee: null,
};

//-----------------------|| ACCOUNT REDUCER ||-----------------------//

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE: {
      const { forms } = action.payload;
      return {
        ...state,
        employee: forms,
      };
    }
    case REMOVE_EMPLOYEE: {
      return {
        ...state,
        employee: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default employeeReducer;
