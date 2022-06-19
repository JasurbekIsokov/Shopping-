import { actionType } from "../Constants/Constants";

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

export const selectProductReducer = (state = {}, action) => {
  switch (action.type) {
    case actionType.SELECT_PRODUCT:
      return { ...state, ...action.payload };
    case actionType.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
