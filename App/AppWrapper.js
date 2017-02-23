import React from 'react'
import {
  View,
  Text,
  TextInput,
} from 'react-native'
import {
  connect,
} from 'react-redux'
import Store from '../redux/Store'

export const AppWrapper = props =>
  <View style={{ marginTop: 20, justifyContent: 'center', }}>
    <Text>Foobar</Text>
  </View>

const mapStateToProps = state => ({
  app: state.app,
  forms: state.forms,
})

export default connect(mapStateToProps)(AppWrapper)
