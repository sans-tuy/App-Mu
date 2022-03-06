import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>React Native School</Text>
          <TouchableOpacity
            onPress={() => alert('Anda mulai mengikuti React Native School')}>
            <Text style={styles.follow}>Follow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?cs=srgb&dl=pexels-michael-block-3225517.jpg',
            }}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.footerText}>
            <Text style={styles.textStrong}>React Native School</Text> This has
            been a tutorial on how to build a layout with Flexbox. i hope you
            enjoyed it!
          </Text>
        </View>
      </View>
    </View>
  );
};

const screen = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7CA1B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    width: screen.width * 0.8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  textHeader: {
    fontWeight: '700',
  },
  follow: {
    color: '#7CA1B4',
    fontWeight: 'bold',
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    resizeMode: 'cover',
  },
  imageWrapper: {
    height: screen.width * 0.8,
    width: '100%',
  },
  textWrapper: {
    padding: 8,
  },
  textStrong: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'justify',
  },
});

export default App;
