import React, {useEffect} from 'react';
import {Alert, View, Text} from 'react-native';
import messaging from '@react-native-firebase/messaging';

function App() {
  const getToken = async () => {
    const token = await messaging().getToken();
    console.log(JSON.stringify(token));
  };
  // foreground notif
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);
  useEffect(() => {
    getToken();
  }, []);

  return (
    <View>
      <Text>kau menghilang</Text>
    </View>
  );
}
export default App;
