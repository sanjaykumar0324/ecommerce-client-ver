import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { getAllCategories } from '../../redux/feature/category/catActions';

const Categories = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loading, categories, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No categories found</Text>
      </View>
    );
  }

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item._id}
            style={styles.catContainer}
            onPress={() => navigation.navigate(item.path)}>
            <AntDesign name="appstore-o" style={styles.catIcon} />
            <Text style={styles.catTitle}>{item.category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 5,
    flexDirection: 'row',
  },
  catContainer: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  catIcon: {
    fontSize: 30,
    marginRight: 10,
  },
  catTitle: {
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default Categories;
