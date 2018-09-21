// Splash Screen
import React, { Component } from 'react';
 import {
   View,
   Text,
   StyleSheet,
   Image
 } from 'react-native';
 import {Container, Button } from 'native-base';


 export default class SplashScreen extends Component {
   static navigationOptions = {
     header: null
   }

   render() {
     return (
       <Container>
         <View style={styles.container}>
           <View style={styles.spacer} />
           <View style={styles.logo}>
             <Button
               transparent
               onPress={() => this.props.navigation.navigate('Login')}>
             <Image
                style={{width: 200, height: 200}}
                source={require('../assets/images/link.png')} />
             </Button>
           </View>
           <View style={styles.logo2}>
             <Button
               transparent
               onPress={() => this.props.navigation.navigate('Login')}>
             <Image
                style={{width: 250, height: 125}}
                source={require('../assets/images/linkFont.png')}/>
             </Button>
           </View>
         </View>
       </Container>

     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo2: {
    flex: 1,
    alignItems: 'center'
  },
  spacer: {
    height: 100,
  }
 });
