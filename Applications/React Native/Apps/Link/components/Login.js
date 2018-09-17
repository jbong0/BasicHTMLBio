import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon, Button } from 'react-native-elements';

export default () => (
  <View style={styles.container}>
    <ScrollView>
      <View>
        <Image
          source={require('../assets/images/link.png')}
          />
          <SocialIcon
            button
            type='facebook'
            raised
            textStyle={{textAlign: 'center'}}
            title={`Log In with Facebook`}
          />
        <Button
          raised
          icon={{name: 'phone'}}
          buttonStyle={{backgroundColor: '#45afdf', borderRadius: 100, width: 250, }}
          textStyle={{textAlign: 'center', }}
          title={`Log In with Phone`}
        />

      </View>
    </ScrollView>
    <View style={styles.footerContainer}>
      <Text>
        We don't post anything to Facebook.
      </Text>
      <Text>
        By creating an account, you agree to our
      </Text>
      <Text>
        Terms of Service and Privacy Policy.
      </Text>
    </View>
  </View>
  )

var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    contentContainer:{

    },
    footerContainer:{
      height: 150,
      alignItems: 'center',
    }

});
