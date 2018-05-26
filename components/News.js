import React, { Component } from 'react'
import { Text, View } from 'react-native'

var lat=0, lon = 0
export default class News extends Component {
  constructor(props){
    super(props)
    this.state={
      location :{
        latitude: 0,
        longitude : 0
      },
      weather:{
        country : '',
        city : '',
        temperature_c:0,
        humidity: 0
      }
    }
    
  }

  getWeather=()=>{
    var weatherURL = 'http://api.wunderground.com/api/'+
                      'bf2dd8bc49ed6a27/'+
                      'conditions/q/'+this.state.location.latitude+
                      ','+this.state.location.longitude+'.json'
    fetch(weatherURL)
      .then(res=>res.json())
      .then(res=>{
        var currentWeather = {
          country : res.current_observation.display_location.state_name,
          city : res.current_observation.observation_location.city,
          temperature_c : res.current_observation.temp_c,
          humidity : res.current_observation.relative_humidity   
        }
        this.setState({
          weather : currentWeather
        })
      })
  }

  getNews=()=>{
    
  } 

  getLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      lat = position.coords.latitude
      lon = position.coords.longitude
      var currentLocation = {
        latitude: lat,
        longitude : lon
      }
      this.setState({
        location : currentLocation
      })
      this.getWeather()
    })
    
    

    this.getNews()
  }

  componentDidMount(){
    this.getLocation()
    this.getNews()
  }
  render() {
    return (
      <View>
        <Text> . </Text>
        <Text> . </Text>
        <Text> Welcome to {this.state.weather.city}, {this.state.weather.country} </Text>
        <Text>Here the </Text>
        <Text> Temperature is {this.state.weather.temperature_c}C</Text>
        <Text> With humidity being at {this.state.weather.humidity}</Text>
        <Text> Latitude : {this.state.location.latitude} and Longitude : {this.state.location.longitude} </Text>

      </View>
    )
  }
}