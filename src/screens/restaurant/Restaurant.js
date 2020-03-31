import React, { Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import { connect } from 'react-redux'
import { getRestaurants } from '../../redux/actions/restaurant'
import RestaurantStyle from '../../assets/styles/RestaurantStyle'
import RestaurantCard from '../../components/RestaurantCard'

class Restaurant extends Component {
  componentDidMount() {
    this.props.getRestaurants()
  }

  render() {
    const image = require('../../assets/images/foto.jpg')

    console.log(this.props.restaurants)
    return (
      <View>
        <Text style={RestaurantStyle.headerText}>Restaurants</Text>
        { this.props.restaurants.length === 0 ? 
          <Text style={{ marginTop: 20 }}>No restaurants</Text>
          :
          <FlatList
            data={this.props.restaurants}
            renderItem={({ item }) => <RestaurantCard restaurant={item} />}
            keyExtractor={(restaurant) => restaurant.id}
          />
        } 
      </View>
    )
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants
})

const mapDispatchToProps = {
  getRestaurants
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)