import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { getItems } from '../../redux/actions/item'

class Menu extends Component {
  componentDidMount() {
    this.props.getItems()
  }

  render() {
    console.log(this.props.items.results.length)
    this.props.items.results.forEach(item => console.log(item))
    return (
      <View>
        <Text>Menu screen</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  items: state.item.items
})
const mapDispatchToProps = {
  getItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)