import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getProductDetails } from "../redux/feature/productDetails/productDetailsAction";
import Layout from "../compnents/Layout/Layout";
import { addToCartItems } from "../redux/feature/cart/cartAction";

const ProductDetails = ({ route }) => {
  const dispatch = useDispatch();
  const { id } = route.params; // Retrieve the ID from route parameters

  const { loading, product, error } = useSelector((state) => state.productDetails);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id]);

  const handleAddQty = () => {
    if (qty === 10) return alert("You can't add more than 10 quantity");
    setQty((prev) => prev + 1);
  };

  const handleRemoveQty = () => {
    if (qty <= 1) return;
    setQty((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCartItems(product._id, qty));
    alert(`${qty} items added to cart`);
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <Layout>
      <Image source={{ uri: product?.images?.[0]?.url }} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{product?.name}</Text>
        <Text style={styles.title}>Price: {product?.price} $</Text>
        <Text style={styles.desc}>{product?.description}</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnCart}
            onPress={handleAddToCart}
            disabled={product?.stock <= 0}
          >
            <Text style={styles.btnCartText}>
              {product?.stock > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </Text>
          </TouchableOpacity>
          <View style={styles.qtyContainer}>
            <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
              <Text style={styles.btnQtyText}>-</Text>
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
              <Text style={styles.btnQtyText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
  },
  desc: {
    fontSize: 12,
    textTransform: "capitalize",
    textAlign: "justify",
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000000",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
  },
});

export default ProductDetails;
