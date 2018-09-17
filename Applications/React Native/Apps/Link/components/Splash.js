import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default () => (
  <View style={{flexDirection: 'column', alignItems: 'center', justifyContent:'space-between', flex:.5}}>
    <Image
      source={require('../assets/images/link.png')}
    />
    <Image
      style={{padding: 1, alignSelf: 'flex-start'}}
      style={{width: 250, height: 125}}
      source={require('../assets/images/linkFont.png')}
    />
  </View>
)
