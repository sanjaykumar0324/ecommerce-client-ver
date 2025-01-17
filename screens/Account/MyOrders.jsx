import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { orderData } from "../../data/OrderData";
import OrderItem from "../../compnents/Form/OrderItem";
import Layout from "../../compnents/Layout/Layout";

const MyOrders = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>My Orders</Text>
        <ScrollView>
          {orderData.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  heading: {
    textAlign: "center",
    color: "gray",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default MyOrders;
