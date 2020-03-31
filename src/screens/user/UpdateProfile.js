import React from 'react'
import { View, Text, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import UserStyle from '../../assets/styles/UserStyle'
import { changeProfile } from '../../redux/actions/user'

class UpdateProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      address: ''
    }
  }

  handleSubmit = () => {
    const newData = { 
      fullName: this.state.fullName, 
      email: this.state.email, 
      address: this.state.address
    }
    this.props.changeProfile(this.props.loginToken, this.props.userProfile,  newData)
    this.props.navigation.navigate('Profile')
  }

  render() {
    return (
      <View style={{ padding: 20 }}>
        <View>
          <Text style={UserStyle.inputLabel}>Full Name</Text>
          <TextInput 
            defaultValue={this.props.userProfile.full_name}
            style={UserStyle.inputText}
            onChangeText={(fullName) => this.setState({fullName})}
          />
        </View>
        <View>
          <Text style={UserStyle.inputLabel}>Email</Text>
          <TextInput 
            defaultValue={this.props.userProfile.email}
            style={UserStyle.inputText}
            onChangeText={(email) => this.setState({email})}
          />
        </View>
        <View>
          <Text style={UserStyle.inputLabel}>Address</Text>
          <TextInput 
            defaultValue={this.props.userProfile.address}
            style={UserStyle.inputText}
            onChangeText={(address) => this.setState({address})}
          />
        </View>
        <TouchableOpacity onPress={() => this.handleSubmit()} style={UserStyle.updateBtn}>
          { this.props.isLoading ?
            <ActivityIndicator size="small" color="#fff" />
            :
            <Text style={UserStyle.updateBtnText}>Submit</Text>
          }
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({ 
  userProfile: state.user.userProfile,
  loginToken: state.auth.loginToken,
  isLoading: state.user.isLoading
})

export default connect(mapStateToProps, { changeProfile })(UpdateProfile)