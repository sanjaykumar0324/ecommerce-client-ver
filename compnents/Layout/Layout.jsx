import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <View style={styles.content}>
          {children}
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 60, 
    // Adjust this value based on the footer height
  },
  footer: {
    height: 60, // Adjust this value based on the desired footer height
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    backgroundColor: '#fff',
    justifyContent : 'center'
  },
});

export default Layout;
