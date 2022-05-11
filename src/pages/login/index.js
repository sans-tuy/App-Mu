import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Button,
} from 'react-native';
import React, {useState} from 'react';
var LocalAuth = require('react-native-local-auth');
import auth from '@react-native-firebase/auth';
import analytics from '@react-native-firebase/analytics';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import * as navigation from '../../config/router/rootNavigation';

export default function Login() {
  GoogleSignin.configure({
    webClientId:
      '94039806051-29go69e7e2qk0mftrr88oa1kvqrl1js9.apps.googleusercontent.com',
  });
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const onChangeEmail = input => {
    setemail(input);
  };
  const onChangePassword = input => {
    setpassword(input);
  };
  function pressHandler() {
    LocalAuth.authenticate({
      reason: 'this is a secure area, please authenticate yourself',
      fallbackToPasscode: true, // fallback to passcode on cancel
      suppressEnterPassword: true, // disallow Enter Password fallback
    })
      .then(success => {
        return navigation.navigate('Main');
      })
      .catch(error => {
        Alert.alert('Authentication Failed', error.message);
      });
  }

  async function onGoogleButtonPress() {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  }

  return (
    <View style={styles.container}>
      <Text>App Mu</Text>
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={onChangeEmail}
        style={styles.inputForm}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={onChangePassword}
        style={styles.inputForm}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN WITH GOOGLE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => pressHandler()}>
        <Text style={styles.buttonText}>Authenticate with Touch ID</Text>
      </TouchableOpacity>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() => navigation.navigate('Main'))
        }
      />
      <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputForm: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 10,
  },
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'blue',
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
