import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {CameraScreen, Camera, CameraType} from 'react-native-camera-kit';

export default function Qr() {
  function onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `"${event.type}" Button Pressed`,
      `${captureImages}`,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  }

  return (
    <View style={{height: 740}}>
      {/* <Camera
        ref={ref => (this.camera = ref)}
        cameraType={CameraType.Back} // front/back(default)
      /> */}
      <CameraScreen
        actions={{rightButtonText: 'Done', leftButtonText: 'Qr scan'}}
        onBottomButtonPressed={event => onBottomButtonPressed(event)}
        style={{flex: 1}}
        flashImages={{
          // optional, images for flash state
          on: require('../images/flashOn.png'),
          off: require('../images/flashOff.png'),
          auto: require('../images/flashAuto.png'),
        }}
        cameraFlipImage={require('../images/cameraFlipIcon.png')} // optional, image for flipping camera button
        captureButtonImage={require('../images/cameraButton.png')} // optional, image capture button
        torchOnImage={require('../images/torchOn.png')} // optional, image for toggling on flash light
        torchOffImage={require('../images/torchOff.png')} // optional, image for toggling off flash light
        hideControls={false} // (default false) optional, hides camera controls
        showCapturedImageCount={false} // (default false) optional, show count for photos taken during that capture session
        scanBarcode={true}
        onReadCode={event =>
          Alert.alert(`url : ${event.nativeEvent.codeStringValue}`)
        } // optional
        showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
        laserColor="red" // (default red) optional, color of laser in scanner frame
        frameColor="white" // (default white) optional, color of border of scanner frame
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
