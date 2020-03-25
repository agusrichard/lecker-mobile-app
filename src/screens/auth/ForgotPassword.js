import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { Item, Label, Input } from 'native-base'
import { Button } from 'galio-framework'
import MainStyle from '../../assets/styles/MainStyle'
import { forgotPasswordUser } from '../../redux/actions/auth'

function ForgotPassword(props) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')

  handleSubmit = () => {
    props.forgotPasswordUser(username, email)
  }

  return (
    <View style={[MainStyle.container, {alignContent: 'center'}]}>
      <Text style={MainStyle.headerText}>Forgot Password</Text>
      <View style={{alignContent: 'center'}}>
        <Item floatingLabel style={MainStyle.formGroup}>
          <Label>Email</Label>
          <Input 
            style={MainStyle.inputText}
            onChangeText={(email) => setEmail(email)}
          />
        </Item>
        <Item floatingLabel style={MainStyle.formGroup}>
          <Label>Username</Label>
          <Input 
            style={MainStyle.inputText}
            onChangeText={(username) => setUsername(username)}
          />
        </Item>
        <Button onPress={handleSubmit} >Submit</Button>
      </View>
    </View>
  )
}

export default connect(null, { forgotPasswordUser })(ForgotPassword)
