import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";

import Layout from "../compnents/Layout/Layout";
import Header from "../compnents/Layout/Header";
import Categories from "../compnents/category/Categories";
import Banner from "../compnents/Banner/Banner";
import Products from "../compnents/Products/Products";
import { getUserData } from "../redux/feature/auth/userActions";
import { useDispatch } from "react-redux";

const Home = () => {
  const disptach = useDispatch();

  useEffect(() => {
    disptach(getUserData());
  }, [disptach]);

  return (
    <Layout>
    
      <Header />
      <ScrollView style={styles.scrollView}>
        <Categories />
        <Banner />
        <Products />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
