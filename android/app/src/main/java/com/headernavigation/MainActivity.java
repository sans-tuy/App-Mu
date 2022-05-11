package com.headernavigation;

import com.facebook.react.ReactActivity;

import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;

import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "HeaderNavigation";
  }
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // protected List<ReactPackage> getPackages() {
  //   return Arrays.asList(
  //     new MainReactPackage(),
  //     new ReactNativeFirebaseMessagingPackage(),
  //   );
  // }
}
