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
        <Text style={RestaurantStyle.headerText}>Menus</Text>
        { this.props.items.length === 0 ? 
          <Text style={{ marginTop: 20 }}>No Menus</Text>
          :
          <FlatList
            data={this.props.items}
            renderItem={({ item }) => <RestaurantCard restaurant={item} />}
            keyExtractor={(restaurant) => restaurant.id}
          />
        } 
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