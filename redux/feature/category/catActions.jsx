import axios from 'axios';
import { server } from '../../store';

export const getAllCategories = () => async (dispatch) => {
  try {
    console.log('Dispatching getCategoryRequest');
    dispatch({ type: 'getCategoryRequest' });

    const { data } = await axios.get(`${server}/cat/get-all`);
    console.log('API Response:', data); // Log the response structure
    dispatch({ type: 'getCategorySuccess', payload: data.categories });

  } catch (error) {
    console.error('API Error:', error);
    dispatch({
      type: 'getCategoryFail',
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};