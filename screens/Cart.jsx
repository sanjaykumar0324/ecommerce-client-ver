import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../compnents/Layout/Layout';
import CartItem from '../compnents/cart/CartItem';
import Pricetable from '../compnents/cart/PriceTable';
import { getAllCartItems } from '../redux/feature/cart/cartAction';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.carts);

  useEffect(() => {
    dispatch(getAllCartItems());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const cartItems = cart?.items || [];
  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const tax = 0.1 * totalPrice;
  const shipping = cartItems.length > 0 ? 10 : 0;
  const grandTotal = totalPrice + tax + shipping;

  return (
    <Layout>
      <Text style={styles.heading}>
        {cartItems.length > 0
          ? `You have ${cartItems.length} items in your cart`
          : 'Oops! Your cart is empty'}
      </Text>
      {cartItems.length > 0 && (
        <>
          <ScrollView>
            {cartItems.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>
          <View>
            <Pricetable title="Price" price={totalPrice.toFixed(2)} />
            <Pricetable title="Tax" price={tax.toFixed(2)} />
            <Pricetable title="Shipping" price={shipping.toFixed(2)} />
            <View style={styles.grandTotal}>
              <Pricetable title="Grand Total" price={grandTotal.toFixed(2)} />
            </View>
            <TouchableOpacity
              style={styles.btnCheckout}
              onPress={() => navigation.navigate('checkout')}
            >
              <Text style={styles.btnCheckoutText}>Check Out</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    color: 'green',
    marginTop: 10,
  },
  grandTotal: {
    borderWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: '#ffffff',
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'black',
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 20,
  },
  btnCheckoutText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Cart;
