import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from "axios";

export default function App(){
  const [resLocation, setResLocation] = useState(null);
  useEffect(() => {
    axios.get('http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=ZisYsCSVYvx2taOqPPIFHBJwIFtvNCUx&q=-6.475032,106.749449')
    .then(res => {
      console.log(res);
      setResLocation(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, [])

  return(
    <View style={styles.rootContainer}>
      <Text>INI TEXT</Text>
      {
        resLocation !== null &&
        <Text>{resLocation?.AdministrativeArea?.LocalizedName}</Text>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})

//-6.475032, 106.749449