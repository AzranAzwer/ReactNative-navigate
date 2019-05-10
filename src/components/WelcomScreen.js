import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class WelcomScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World....!</Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('loginScreen')} >
          Login
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('signupScreen')} >
          Signup
        </Text>

        <Text
          style={styles.linky}
          onPress={() => this.props.navigation.navigate('drawerStack')} >
          Home
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linky: {
    fontWeight: 'bold',
    color: '#4C3E54',
    paddingTop: 10
  }
})
