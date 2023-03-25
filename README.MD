vector-icon

android/app/build.gradle

copy apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"


Installation
* Step 1.

npm install react-native-google-places-autocomplete --save
or

yarn add react-native-google-places-autocomplete
* Step 2.

Get your Google Places API keys and enable "Google Places API Web Service" (NOT Android or iOS) in the console. Billing must be enabled on the account.

* Step 3.

Enable "Google Maps Geocoding API" if you want to use GoogleReverseGeocoding for Current Location


* react-native-maps


Add your API key to your manifest file (android/app/src/main/AndroidManifest.xml):

<application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>
</application>


FROM WHERE TO WHERE



* npm install react-native-geolocation-service


* npm install @react-native-community/geolocation --save


Android
To request access to location, you need to add the following line to your app's AndroidManifest.xml:

<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />



If you need to have geolocation API aligned with the browser (cross-platform apps), or want to support backward compatibility, please consider adding following lines at the root level, for example at the top of your App.js file (only for react native):

navigator.geolocation = require('@react-native-community/geolocation');

futher refer https://github.com/michalchudziak/react-native-geolocation



* android\app\src\debug\AndroidManifest.xml

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
     <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

    <application
        android:usesCleartextTraffic="true"
        tools:targetApi="28"
        tools:ignore="GoogleAppIndexingWarning">
        <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" android:exported="false" />
    </application>
</manifest>







* Install the required packages in your React Native project: react navigation

    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context
    The libraries we will install now are react-native-screens and react-native-safe-area-context. If you already have these libraries installed and at the latest version



    react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.

Add the highlighted code to the body of MainActivity class:

public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}








Installing the native stack navigator library
The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install @react-navigation/native-stack :

npm
Yarn
npm install @react-navigation/native-stack


* Drawer

npm install @react-navigation/drawer

npm install react-native-gesture-handler 
npm i react-native-reanimated

Installing the package
First step is to install react-native-reanimated alpha as a dependency in your project:

yarn add react-native-reanimated

Babel plugin
Add Reanimated's babel plugin to your babel.config.js:

  module.exports = {
    presets: [
      ...
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
  and after run 

  yarn start --reset-cache
npm start -- --reset-cache
expo start -c




To finalize installation of react-native-gesture-handler, add the following at the top (make sure it's at the top and there's nothing else before it) of your entry file, such as index.js or App.js:

import 'react-native-gesture-handler';







