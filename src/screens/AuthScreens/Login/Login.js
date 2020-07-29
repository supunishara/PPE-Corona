/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Login Screen of the Application
 * Date:
 */
//
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput,Alert} from 'react-native';
import Metrics from '../../../config/Metrics';
import AppStyles from '../../../config/AppStyles';
import Images from '../../../config/Images';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CheckBox} from 'react-native-elements';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import {connect} from 'react-redux';
import {sendLoginData} from '../../../Redux/Actions/login.actions';

import Spinner from 'react-native-loading-spinner-overlay';

import LocalStorage from '../../../Helpers/LocalStorage';

let localStorage = new LocalStorage();

////Formik for Validation
import {Formik} from 'formik';
import * as yup from 'yup';


const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Please Enter a Email'), 
  password: yup
    .string()
    // .min(10, 'Please enter a password')
    .required('Please Enter a password'), 
});



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      email:'',
      password:''
    };
  }
//
  async componentDidMount(){
    let clientAuthToken = await localStorage.getData("clientAuthToken");  
    if(clientAuthToken && clientAuthToken != null ){
      this.props.navigation.navigate('SelectLocation');
    }
    // PushNotification.configure({

    //   onRegister: function (token) {
    //     console.log("TOKEN==========:", token);
    //   },
    //   // (required) Called when a remote or local notification is opened or received
    //   onNotification: function (notification) {
    //     console.log("NOTIFICATION:", notification);
    //   },
     
    //   // ANDROID ONLY: FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
    //   senderID: "661637180211",
    //   requestPermissions: true,
    // });
  }

    handleSubmit = async() => {

      let {email, password} = this.state;
        if(!email){
            Alert.alert(
              "Error",
              "Please Fill Email",
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ],
              { cancelable: false }
            );
        }else if(!password){
          Alert.alert(
            "Error",
            "Please Fill Password",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        }
        else{
          // this.props.navigation.navigate('SearchScreen')
          // this.props.navigation.navigate('SelectLocation');
          this.props.sendLoginData(email, password);
        }
      
    }

  render() {
    return (
      <View style={styles.container}>
      <Spinner
          visible={this.props.isLoading}
        />

        <KeyboardAwareScrollView>
          <View style={{alignSelf: 'center'}}>
            <Image
              source={Images.APP_LANDING_ICON}
              style={styles.landingImage}
            />
          </View>

          <Formik
              initialValues={{email: '', password:''}}
              enableReinitialize={true}
              onSubmit={values => {
                this.handleSubmit(values);
              }}
              validationSchema={validationSchema}
              render={({values, handleChange, handleSubmit, errors}) => {
                return (
                  <>
                    <View style={{alignItems: 'center'}}>
                      <View style={{marginTop: 10}}>
                        <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.inputs}
                            value={this.state.email}
                            keyboardType="email-address"
                            placeholder="Enter your e-mail address"
                            underlineColorAndroid="transparent"
                            onChangeText={(email) => this.setState({email: email})}
                          />
                          <Text style={styles.inputHeading}>Email Address</Text>
                        </View>
                        <Text style={styles.exampleText}>eg : jhon@test.com</Text>
                        {/* <Text style={{color: 'red', marginTop: 7}}>{errors.email}</Text> */}
                      </View>
                      <View style={{marginTop: 20}}>
                        <View style={styles.inputContainer}>
                          <TextInput
                            style={styles.inputs}
                            value={this.state.password}
                            secureTextEntry={true}
                            keyboardType="default"
                            placeholder="Enter your password"
                            underlineColorAndroid="transparent"
                            onChangeText={(password) => this.setState({password: password})}
                          />
                          <Text style={styles.inputHeading}>Password</Text>
                        </View>
                        {/* <Text style={styles.exampleText}>
                        eg : IC Number , Passport Number or others
                      </Text> */}
                      {/* <Text style={{color: 'red', marginTop: 7}}>{errors.password}</Text> */}
                      </View>
                      <CheckBox
                        title="Remember Password"
                        titleProps={{fontFamily: AppStyles.fontRegular}}
                        checked={this.state.checked}
                        onPress={() => this.setState({checked: !this.state.checked})}
                        checkedColor={AppStyles.primaryColor}
                        containerStyle={{backgroundColor:'white', borderColor:'white'}}
                      />

                      <PrimaryButton
                        title="Login"
                        color={AppStyles.primaryColor}
                        onPress={this.handleSubmit}
                      />
                      <SecondaryButton
                        title="Forgot Password"
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                      />
                      <SecondaryButton
                        title="Sign Up"
                        onPress={() => this.props.navigation.navigate('Signup')}
                      />

                      <View style={{height: 20}}></View>
                    </View>
                  </>
                );
              }}
            /> 
        </KeyboardAwareScrollView>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    isLoading: state.Login.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendLoginData : (email,password) =>  dispatch(sendLoginData(email,password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  landingImage: {
    width: 270,
    height: 270,
    resizeMode: 'contain',
    marginTop: Metrics.DEVICE_HEIGHT / 7,
  },
  inputHeading: {
    fontSize: 12,
    color: '#979797',
    backgroundColor: 'white',
    // width: 50,
    marginLeft: 10,
    position: 'absolute',
    top: -9,
    fontFamily: AppStyles.fontRegular,
  },
  exampleText: {
    fontSize: 12,
    color: '#979797',
    marginLeft: 5,
    fontFamily: AppStyles.fontRegular,
  },
  inputContainer: {
    borderColor: '#979797',
    backgroundColor: AppStyles.colorWhite,
    borderRadius: 5,
    borderWidth: 1,
    width: Metrics.DEVICE_WIDTH / 1.2,
    height: 45,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    fontSize: 15,
    fontFamily: AppStyles.primaryFont,
    color: 'black',
  },
});
