import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../../redux/feature/auth/userActions";

const Account = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user, loading, error, message } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserData()); // Fetch user data when component mounts
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      Alert.alert("Error", error);
    }
    if (message) {
      Alert.alert("Message", message);
    }
  }, [error, message]);

  const defaultProfilePic = "https://example.com/default-profile-pic.jpg";

  // Check if user or user.profilePic is not available
  if (!user || !user.profilePic) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.profilePic.url || defaultProfilePic }} style={styles.image} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.name}>
          Hi
          <Text style={{ color: "green" }}> {user.name}</Text>
          {"\uD83D\uDC4B"} {/* Hand wave emoji */}
        </Text>
        <Text>email : {user.email}</Text>
        <Text>contact : {user.phone}</Text>
      </View>
      <View style={styles.btnContainer}>
        <Text style={styles.heading}>Account Setting</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("profile", { id: user._id })}
        >
          <Text style={styles.btnText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("myorders", { id: user._id })}
        >
          <Text style={styles.btnText}>My Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("notifications")}
        >
          <Text style={styles.btnText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("adminPanel", { id: user._id })}
        >
          <Text style={styles.btnText}>Admin Panel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: "100%",
    resizeMode: "contain",
    marginBottom: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
  },
  btnContainer: {
    backgroundColor: "#ffffff",
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: "100%",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  btnText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default Account;
