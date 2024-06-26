import { configureStore,getDefaultMiddleware  } from "@reduxjs/toolkit";
import { userReducer } from "./feature/auth/userReducer";
import { catReducer } from "./feature/category/catReducer";
import { productReducer } from "./feature/product/productReducer";
import { productDetailsReducer } from "./feature/productDetails/productDetailsReducer";
import { cartReducer } from "./feature/cart/cartReduce";

export default configureStore({
  reducer: {
    user: userReducer,
    category : catReducer,
    product: productReducer,
    productDetails: productDetailsReducer,
    carts:cartReducer,
   
  },
});

// HOST
export const server = "https://ecommerce-rn.onrender.com/api/v1";
