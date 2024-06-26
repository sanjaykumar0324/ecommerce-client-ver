// productDetailsAction.js
import axios from 'axios';
import { server } from '../../store';

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: 'getProductDetailsRequest' });

    const { data } = await axios.get(`${server}/product/${id}`);

    dispatch({ type: 'getProductDetailsSuccess', payload: data.product });
  } catch (error) {
    dispatch({
      type: 'getProductDetailsFail',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
