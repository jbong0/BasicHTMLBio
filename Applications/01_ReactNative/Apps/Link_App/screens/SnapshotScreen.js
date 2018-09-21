// Matches
import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import {
  Button , Text, Container,
  Header, Left, Right,
  Body, Footer, FooterTab,
  Badge
    } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import LogOutButton from '../components/LogOutButton.js'
import SwiperFlatList from 'react-native-swiper-flatlist';
import UserSummary from '../components/UserSummary.js';
import { Col, Row, Grid } from 'react-native-easy-grid';





export default class SnapshotScreen extends Component {
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
            <Button transparent >
              <Icon
                color='red'
                onPress={() => this.props.navigation.navigate('Matches')}
                size={30}
                name='heart' />
            </Button>
          </Left>
          <Body>
              <Text>Snapshot</Text>
          </Body>
          <Right>
            <Button transparent >
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
        <Body>
          // Grid Start
          <Grid>
            <Row size={4}>
              // Photo Slider
              <SwiperFlatList
                index={0}>
                <View style={styles.child}>
                  <Image
                     style={styles.image}
                     source={require('../assets/images/girl1.jpg')} />
                </View>
                <View style={styles.child}>
                  <Image
                     style={styles.image}
                     source={require('../assets/images/girl2.jpg')} />
                </View>
                <View style={styles.child}>
                  <Image
                     style={styles.image}
                     source={require('../assets/images/girl3.jpg')} />
                </View>
              </SwiperFlatList>
            </Row>
            <Row size={1}>
              <UserSummary />
            </Row>
            <Row size={2}>
              <Col>
                <View style={{width: 200, height: 400}}>
                  <Button
                    onPress={() => this.props.navigation.navigate('InfoDisplay')}
                    bordered info block block>
                    <Icon
                      size={30}
                      name='plane'/>
                    <Text> Travel </Text>
                </Button>

                <Button bordered info block block>
                  <Icon
                    size={30}
                    name='cutlery'/>
                    <Text> Food </Text>
                  </Button>

                  <Button bordered info block block>
                    <Icon
                      size={30}
                      name='music'/>
                    <Text> Music </Text>
                    </Button>

                    <Button bordered info block block>
                      <Icon
                        size={30}
                        name='video-camera'/>
                      <Text> Movies </Text>
                    </Button>
              </View>
            </Col>

              <Col>
                <View style={{width: 200, height: 400}}>
                  <Button
                    onPress={() => this.props.navigation.navigate('InfoDisplay')}
                    bordered info block block>
                    <Icon
                      size={30}
                      name='television'/>
                    <Text> Shows </Text>
                </Button>

                <Button bordered info block block>
                  <Icon
                    size={30}
                    name='user'/>
                  <Text> Influencers </Text>
                  </Button>

                  <Button bordered info block block>
                    <Icon
                      size={30}
                      name='instagram'/>
                    <Text> Instagram </Text>
                    </Button>

                    <Button bordered info block block>
                      <Icon
                        size={30}
                        name='facebook'/>
                      <Text> Facebook </Text>
                    </Button>
                </View>
              </Col>
            </Row>
          </Grid>
        </Body>
        //Body End

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
    width: 400,
    height: 400,
    alignSelf: 'center'
  },
  button1:{
    backgroundColor: '#a1e2fd'
  },
  button1:{
    backgroundColor: '#45afdf'
  }
});
