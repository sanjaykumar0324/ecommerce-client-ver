import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCartItems } from '../../redux/feature/cart/cartAction';

const ProductCard = ({ p }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const defaultImage = 'https://via.placeholder.com/150';
  const imageUrl = p?.images?.[0]?.url || defaultImage;

  const handleDetailsBtn = (id) => {
    navigation.navigate('productDetails', { id });
  };

  const handleCartBtn = () => {
    dispatch(addToCartItems(p._id, 1));
    Alert.alert("Item Added to Cart");
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleDetailsBtn(p._id)}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>
          {p?.description.substring(0, 30)}....more
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleDetailsBtn(p._id)}
        >
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnCart}
          onPress={handleCartBtn}
        >
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: 5,
    marginHorizontal: 5,
    width: '45%',
    aspectRatio: 0.9,
    backgroundColor: '#fff',
  },
  cardImage: {
    height: '60%',
    width: '100%',
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: 'left',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  btn: {
    backgroundColor: 'black',
    borderRadius: 5,
    height: 20,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCart: {
    backgroundColor: 'orange',
    borderRadius: 5,
    height: 20,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ProductCard;
