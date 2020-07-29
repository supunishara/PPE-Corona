/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Application Container for All Screen
 * Date:
 */

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { navigationRef } from '../config/RootNavigation';


//Navigation Screens
import Signup from '../screens/AuthScreens/Signup/Signup';
import Login from '../screens/AuthScreens/Login/Login';
import SelectLocation from '../screens/AuthScreens/Signup/SelectLocation';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import ViewPharmacyList from '../screens/PharmacyScreen/ViewPharmacyList';
import PharmacyDetail from '../screens/PharmacyScreen/PharmacyDetail';
import OrderComplete from '../screens/PharmacyScreen/OrderComplete';
import ReportSearch from '../screens/ReportPharmacy/ReportSearch';
import AddReportDetails from '../screens/ReportPharmacy/AddReportDetails';
import SuccessSubmit from '../screens/ReportPharmacy/SuccessSubmit';
import ForgotPassword from '../screens/AuthScreens/ForgotPassword/ForgotPassword';
import SelectItems from '../screens/PharmacyScreen/SelectItems';
import Images from '../config/Images';
import SelectTime from '../screens/PharmacyScreen/SelectTime';
import ConfirmTime from '../screens/PharmacyScreen/ConfirmTime';
import AddReportQuality from '../screens/ReportPharmacy/AddReportQuality';
import UserProfile from '../screens/UserProfile/UserProfile';

//React Navigation Version 5.X - UPDATED
const Stack = createStackNavigator();

function AppContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        {/* <Stack.Screen
          name="AuthMain"
          component={AuthMain}
          options={{
            headerShown: true,
            title: '',
            // headerRight: () => (
            //   <Button
            //     onPress={() => alert('This is a button!')}
            //     title="Info"
            //     color="#fff"
            //   />
            // ),
          }}
        /> */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            title: '',
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
          }}
        />

        <Stack.Screen
          name="SelectLocation"
          component={SelectLocation}
          options={{
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="ViewPharmacyList"
          component={ViewPharmacyList}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerTintColor: '#757575',
            title: '',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="PharmacyDetail"
          component={PharmacyDetail}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerTintColor: '#757575',
            title: '',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="SelectItems"
          component={SelectItems}
          options={({ navigation, route }) => ({
            headerShown: true,
            headerTintColor: '#757575',
            title: '',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="OrderComplete"
          component={OrderComplete}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="ReportSearch"
          component={ReportSearch}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="AddReportDetails"
          component={AddReportDetails}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="AddReportQuality"
          component={AddReportQuality}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="SuccessSubmit"
          component={SuccessSubmit}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="SelectTime"
          component={SelectTime}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="ConfirmTime"
          component={ConfirmTime}
          options={({ navigation, route }) => ({
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
            headerRight: () => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                  <Image
                    source={Images.MENU_ICON}
                    style={{height: 24, width: 24, marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            ),
            })}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            headerShown: true,
            title: '',
            headerTintColor: '#757575',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
