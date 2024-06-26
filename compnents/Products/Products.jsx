import React, { useEffect } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductsCard';
import { getAllProducts } from '../../redux/feature/product/productAction';

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (loading) {
    return <View><Text>Loading...</Text></View>;
  }
  if (error) {
    return <View><Text>Error: {error}</Text></View>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        {products.map(p => (
          <ProductCard key={p._id} p={p} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  scrollViewContent: {
    paddingBottom: 80, // Adjust this value to ensure footer does not cover products
  },
});

export default Products;
