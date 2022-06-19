import { actionType } from "../Containers/Constants";

const initialState = {
  product: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS:
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
