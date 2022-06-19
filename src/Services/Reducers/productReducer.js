import { actionType } from "../Containers/Constants";

const initialState = {
  product: [
    {
      id: 1,
      title: "title",
      category: "category",
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
