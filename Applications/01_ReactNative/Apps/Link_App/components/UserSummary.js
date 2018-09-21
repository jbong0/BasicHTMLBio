import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card, CardItem, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class UserSummary extends Component {
  constructor(props){
    super(props)
    this.state ={
      name: 'Jessica',
      age: 26,
      hometown: ' Del Mar, CA',
      location: ' West Hollywood, CA',
      occupation: ' Model @ NEXT Models',
      school: ' Arizona State University'
    }
  }


  render() {
    return (
        <View>
          <Text style={styles.name}>
            {this.state.name} | {this.state.age}
          </Text>
          <Row style={{height: 10}} />
            <View style={styles.userInfoFlex}>
              <Row style={styles.centerRow}>
                <Col style={{width: 10, height: 20}}></Col>
                <Col style={{ height: 50, width: 180 }}>
                          <Text style={styles.userInfoText}>
                            <Icon
                            size={15}
                            name='home'/>
                            {this.state.hometown}
                          </Text>

                          <Text style={styles.userInfoText}>
                            <Icon
                            size={15}
                            name='map-marker'/>
                            {this.state.location}
                          </Text>

                      </Col>

                      <Col style={{ height: 50, width: 180 }}>
                        <Text style={styles.userInfoText}>
                          <Icon
                          size={15}
                          name='briefcase'/>
                          {this.state.occupation}
                        </Text>

                        <Text style={styles.userInfoText}>
                          <Icon
                          size={15}
                          name='graduation-cap'/>
                          {this.state.school}
                        </Text>
                      </Col>
                    </Row>
                  </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  centerRow:{
    justifyContent:'center'
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
  },
  userInfoText:{
    fontSize: 15,
    textAlign: 'left',
  },
  userInfoFlex: {
    alignItems: 'center',
    alignSelf: 'center'
  }
});
