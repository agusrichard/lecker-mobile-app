import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import { BASE_URL } from 'react-native-dotenv'
import { connect } from 'react-redux'
import UserStyle from '../../assets/styles/UserStyle'
import { TouchableOpacity } from 'react-native-gesture-handler'

class Profile extends Component {
  render() {
    const image = { uri: `${BASE_URL}/${this.props.userProfile.profile_picture}` }
    const editIcon = require('../../assets/images/userPage/edit-icon.png')
    console.log(this.props.navigation)

    return (
      <ScrollView contentContainerStyle={{ flex: 1 }} >
        <View style={UserStyle.headerBg}>
          <View style={UserStyle.headerContent}>
            <View style={UserStyle.contentImg}>
              <Image source={image} style={UserStyle.userImg} />
            </View>
            <View style={UserStyle.contentText}>
              <Text style={UserStyle.fullnameText}>{this.props.userProfile.full_name}</Text>
              <Text style={UserStyle.usernameText}>{this.props.userProfile.username}</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('UpdateProfile')}>
                <Image source={editIcon} style={UserStyle.editIcon}/>
              </TouchableOpacity>
            </View>
          </View> 
        </View>
        <View style={UserStyle.body}>
          <Text>Something in here that i don't know what to write</Text>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({ userProfile: state.user.userProfile })

export default connect(mapStateToProps)(Profile)