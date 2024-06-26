import axios from 'axios';
import { server } from '../../store';

export const getAllProducts = (keyword = '', category = '') => async (dispatch) => {
  try {
    dispatch({ type: 'getAllProductRequest' });

    const { data } = await axios.get(`${server}/product/get-all`, {
      params: { keyword, category },
    });

    dispatch({ type: 'getAllProductSuccess', payload: data.products });
  } catch (error) {
    dispatch({
      type: 'getAllProductFail',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
