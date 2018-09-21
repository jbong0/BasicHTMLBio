import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {Container, Button, Content, Icon, Text} from 'native-base';


export default class LoginScreen extends Component {
  render() {
    return (
      <Container>
      <View style={styles.container}>
        <View style={{height: 50}}></View>
        <View style={styles.logo}>
        <Button transparent block
          onPress={() => this.props.navigation.navigate('Splash')}>
          <Image
             style={{width: 250, height: 125}}
             source={require('../assets/images/linkFont.png')} />
        </Button>
        <View>
        </View>
        <View style={{height: 25}} />
          <SwiperFlatList
            autoplay
            autoplayDelay={3}
            autoplayLoop
            index={0}>
            <View style={[styles.child, { backgroundColor: '#45afdf' }]}>
                <Image
                   style={styles.image}
                   source={require('../assets/images/talking.png')} />
            </View>
            <View style={[styles.child, { backgroundColor: '#a1e2fd' }]}>
              <Image
                 style={styles.image}
                 source={require('../assets/images/thinking.png')} />
            </View>
            <View style={[styles.child, { backgroundColor: '#45afdf' }]}>
              <Image
                 style={styles.image}
                 source={require('../assets/images/idea.png')} />
            </View>
            <View style={[styles.child, { backgroundColor: '#a1e2fd' }]}>
              <Image
                 style={styles.image}
                 source={require('../assets/images/topic1.png')} />
            </View>
            <View style={[styles.child, { backgroundColor: '#45afdf' }]}>
              <Image
                 style={styles.image}
                 source={require('../assets/images/topic2.png')} />
            </View>
            <View style={[styles.child, { backgroundColor: '#a1e2fd' }]}>
              <Image
                 style={styles.image}
                 source={require('../assets/images/couple.png')} />
            </View>
          </SwiperFlatList>
          <View style={styles.container}>
              <Button
                full
                info
                onPress={() => this.props.navigation.navigate('Matches')}
                >
                <Text>Log In with Facebook</Text>
              </Button>
              <Button
                full
                light
                onPress={() => this.props.navigation.navigate('Splash')}
                >
                <Text>Log In with Phone Number</Text>
              </Button>
          </View>
          <View style={{height: 75}}></View>
        </View>
      </View>
      </Container>
    );
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 400
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  child2: {
    height: height * 0.4,
    width,
    justifyContent: 'center',
    textAlign: 'center'
  },
  loginButtons:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    justifyContent: 'center'

  }
});
