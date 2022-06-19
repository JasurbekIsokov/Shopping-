import { actionType } from "../Constants/Constants";

// export const postRegister = (todoItem) => async (dispatch) => {
//   dispatch({
//     type: actionType.POST_REGISTER,
//   });
//   try {
//     const { data } = await axios.post("http://localhost:3004/todos", todoItem);
//     dispatch({ type: TODO.TODO_ADD_SUCESS });
//   } catch (error) {
//     dispatch({ type: TODO.TODO_ADD_FAIL, payload: error.message });
//   }

//   return {
//     type: TODO.ADD_TODO,
//     payload: {
//       ...todoItem,
//     },
//   };
// };

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
