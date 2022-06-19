import { actionType } from "../Containers/Constants";

export const getProducts = (products) => {
  return {
    type: actionType.GET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: actionType.SELECT_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionType.REMOVE_SELECTED_PRODUCT,
  };
};
