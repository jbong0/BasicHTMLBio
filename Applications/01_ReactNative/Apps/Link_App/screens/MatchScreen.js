// Matches
import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
  Button , Text, Container,
  Header, Left, Right,
  Body, Footer, FooterTab,
  Badge
    } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import LogOutButton from '../components/LogOutButton.js'



export default class MatchScreen extends Component {
  constructor(props) {
   super(props);

   this.state = {
     name: 'Jessica',
     imageUrl: '../assets/images/girl1.png'
   };
  }

  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <Container>
        // Header
        <Header>
          <Left>
            <Button transparent>
              <Icon
                color='red'
                onPress={() => this.props.navigation.navigate('Matches')}
                size={30}
                name='heart' />
            </Button>
          </Left>
          <Body>
              <Text> My Matches</Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                color='#45afdf'
                size={30}
                onPress={() => this.props.navigation.navigate('ViewMessages')}
                name='comments' />
            </Button>
          </Right>
        </Header>
        // Header End

        // Body Start
        <View style={styles.spacer} />
        <Body style={styles.matchBox}>
        // Matches Layout
        <View style={styles.matchCase}>
          <Button
          onPress={() => this.props.navigation.navigate('Snapshot')}>
          <Image
             style={styles.matchImage}
             source={require('../assets/images/girl1.jpg')} />
          </Button>
          <View style={styles.spacer3} />
          <View>
            <Text style={styles.matchName}> Jessica </Text>
          </View>
        </View>

        <View style={styles.spacer2} />


        <View style={styles.matchCase}>
          <Button>
          <Image
             style={styles.matchImage}
             onPress={() => this.props.navigation.navigate('Snap')}
             source={require('../assets/images/girl2.jpg')} />
          </Button>
          <View style={styles.spacer3} />
          <View>
            <Text style={styles.matchName}> Karen </Text>
          </View>
        </View>

      <View style={styles.spacer2} />


      <View style={styles.matchCase}>
        <Button>
        <Image
           style={styles.matchImage}
           onPress={() => this.props.navigation.navigate('Matches')}
           source={require('../assets/images/girl2.jpg')} />
        </Button>
        <View style={styles.spacer3} />
        <View>
          <Text style={styles.matchName}> Anne </Text>
        </View>
      </View>>

      <View style={styles.spacer2} />

      <View style={styles.matchCase}>
        <Button>
        <Image
           style={styles.matchImage}
           source={require('../assets/images/girl2.jpg')} />
        </Button>
        <View style={styles.spacer3} />
        <View>
          <Text style={styles.matchName}> Ashley </Text>
        </View>
      </View>

     <View style={styles.spacer2} />

     </Body> // Body End

        // Footer Start
        <Footer>
          <FooterTab>
            <Button
              onPress={() => this.props.navigation.navigate('Matches')}
              active badge vertical>
              <Badge ><Text>4</Text></Badge>
              <Icon active name="heart" />
              <Text>Matches</Text>
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Login')}
              vertical>
              <LogOutButton />
              <Text>Log Out</Text>
            </Button>
          </FooterTab>
      </Footer>
      // Footer End

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
  matchBox:{
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around'
  },
  matchImage:{
    width: 75,
    height: 75,
  },
  matchCase:{
    alignItems: 'center',
  },
  spacer:{
    height: 20,
  },
  spacer2:{
    width: 10,
  },
  spacer3:{
    height: 15,
  },
  matchName:{
    flex: 1,
    justifyContent: 'space-around'
  },


});
