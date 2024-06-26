import axios from 'axios';
import { server } from '../../store';

export const getAllCartItems = () => async (dispatch) => {
  try {
    dispatch({ type: 'getAllCartItemsRequest' });

    const { data } = await axios.get(`${server}/cart/get-all`);
    dispatch({ type: 'getAllCartItemsSuccess', payload: data.cart });

  } catch (error) {
    dispatch({
      type: 'getAllCartItemsFail',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};

export const addToCartItems = (productId, quantity) => async (dispatch) => {
  try {
    dispatch({ type: 'addToCartItemsRequest' });

    const { data } = await axios.post(`${server}/cart/add`, { productId, quantity });
    dispatch({ type: 'addToCartItemsSuccess', payload: data.cart });

  } catch (error) {
    dispatch({
      type: 'addToCartItemsFail',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
