import React, { Component } from 'react'
import { View, Text, ScrollView, Image, Modal, TextInput, TouchableOpacity } from 'react-native'
import { BASE_URL } from 'react-native-dotenv'
import { connect } from 'react-redux'
import UserStyle from '../../assets/styles/UserStyle'
import { Overlay } from 'react-native-elements'
import { topUp } from '../../redux/actions/user'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      modalVisible: false,
      balance: 0
    }
  }

  handleSubmit = () => {
    this.props.topUp(this.props.loginToken, this.state.balance)
    this.setState({ modalVisible: false })
  }

  render() {
    const placeholderImg = require('../../assets/images/profile-picture-placeholder.png')
    const image = { uri: `http://3.88.30.184:5000/${this.props.userProfile.profile_picture}` }
    const editIcon = require('../../assets/images/userPage/edit-icon.png')
    const topupIcon = require('../../assets/images/userPage/topup-icon.png')

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }} >
        <View style={UserStyle.headerBg}>
          <View style={UserStyle.headerContent}>
            <View style={UserStyle.contentImg}>
              <Image source={this.props.userProfile.profile_picture === null ? placeholderImg : image} style={UserStyle.userImg} />
            </View>
            <View style={UserStyle.contentText}>
              <Text style={UserStyle.fullnameText}>{this.props.userProfile.full_name}</Text>
              <Text style={UserStyle.usernameText}>{this.props.userProfile.username}</Text>
              <Text style={UserStyle.balanceText}>Rp. {this.props.userProfile.balance}</Text>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateProfile')}>
                  <View>
                    <Image source={editIcon} style={UserStyle.editIcon}/>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({modalVisible: true})}>
                  <View>
                    <Image source={topupIcon} style={UserStyle.topupIcon}/>
                  </View>
                </TouchableOpacity>
                <Overlay isVisible={this.state.modalVisible} height={250}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={UserStyle.modalHeader}>Topup</Text>
                    <View>
                      <Text style={[UserStyle.inputLabel, { marginTop: 35 }]}>Amount</Text>
                      <TextInput 
                        defaultValue={this.props.userProfile.address}
                        style={UserStyle.balanceInput}
                        keyboardType={'numeric'}
                        onChangeText={(balance) => this.setState({balance: parseInt(balance)})}
                      />
                      <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => this.handleSubmit()} style={[UserStyle.updateBtn, { marginBottom: 10 }]}>
                          { this.props.isLoading ?
                            <ActivityIndicator size="small" color="#fff" />
                            :
                            <Text style={UserStyle.updateBtnText}>Submit</Text>
                          }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ modalVisible: false })} style={[UserStyle.cancelBtn, { marginBottom: 10 }]}>
                          <Text>Cancel</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Overlay>
              </View>
            </View>
          </View> 
        </View>
        <View style={UserStyle.body}>
          <Text style={{ textAlign: 'center' }}>Please enjoy this app</Text>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({ 
  userProfile: state.user.userProfile,
  loginToken: state.auth.loginToken
})
const mapDispatchToProps = { topUp }

export default connect(mapStateToProps, mapDispatchToProps)(Profile)