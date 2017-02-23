import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native'
import {
  connect,
} from 'react-redux'
import * as Actions from '../redux/Actions'
import Store from '../redux/Store'

const update = (params, props) => props.updateForm(params)

export const AppWrapper = props =>
  <View style={{ flex: 1, marginTop: 20, alignItems: 'center', }}>
    <Text>Foobar</Text>
    <TextInput
      // value={props.forms.myForm.input1} // NOTE the app breaks if you comment this out
      style={{ paddingLeft: 10, height: 40, borderColor: 'gray', borderWidth: 1, }}
      onChangeText={value => update({
        form: 'myForm',
        key: 'input1',
        value,
      }, props)}
      placeholder={'input1'} />
      <Button onPress={() => window.alert(JSON.stringify(props.forms))}
        title={'Get Forms State'} />
  </View>

const mapStateToProps = state => ({
  app: state.app,
  forms: state.forms,
})

const mapDispatchToProps = dispatch => ({
  updateForm: params => dispatch(Actions.updateForm(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper)
