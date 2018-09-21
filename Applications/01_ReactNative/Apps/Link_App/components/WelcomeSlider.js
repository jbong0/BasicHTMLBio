// Added to Login Page Directly
//
// import React, { Component } from 'react';
// import {
//   View,
//   Dimensions,
//   StyleSheet,
//   Image
// } from 'react-native';
// import SwiperFlatList from 'react-native-swiper-flatlist';
// import {Container, Button, Content, Icon} from 'native-base';
//
//
//
// export default class WelcomeSlider extends Component {
//   render() {
//     return (
//       <View>
//           <SwiperFlatList
//             autoplay
//             autoplayDelay={3}
//             autoplayLoop
//             index={0}>
//             <View style={[styles.child, { backgroundColor: '#45afdf' }]}>
//                 <Image
//                    style={styles.image}
//                    source={require('../assets/images/talking.png')} />
//             </View>
//             <View style={[styles.child, { backgroundColor: '#a1e2fd' }]}>
//               <Image
//                  style={styles.image}
//                  source={require('../assets/images/thinking.png')} />
//             </View>
//             <View style={[styles.child, { backgroundColor: '#45afdf' }]}>
//               <Image
//                  style={styles.image}
//                  source={require('../assets/images/idea.png')} />
//             </View>
//             <View style={[styles.child, { backgroundColor: '#a1e2fd' }]}>
//               <Image
//                  style={styles.image}
//                  source={require('../assets/images/topic1.png')} />
//             </View>
//             <View style={[styles.child, { backgroundColor: '#45afdf' }]}>
//               <Image
//                  style={styles.image}
//                  source={require('../assets/images/topic2.png')} />
//             </View>
//             <View style={[styles.child, { backgroundColor: '#a1e2fd' }]}>
//               <Image
//                  style={styles.image}
//                  source={require('../assets/images/couple.png')} />
//             </View>
//           </SwiperFlatList>
//       </View>
//     );
//   }
// }
//
// export const { width, height } = Dimensions.get('window');
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   child: {
//     height: height * 0.5,
//     width,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   child2: {
//     height: height * 0.4,
//     width,
//     justifyContent: 'center',
//     textAlign: 'center'
//   },
//   loginButtons:{
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   text: {
//     fontSize: width * 0.5,
//     textAlign: 'center'
//   },
//   image: {
//     width: 200,
//     height: 200,
//     justifyContent: 'center'
//   },
//   spacer:{
//     height: 100,
//   },
// });
