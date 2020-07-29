/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Forgot Password Screen of the Application
 * Date:
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import Metrics from '../../../config/Metrics';
import AppStyles from '../../../config/AppStyles';
import Images from '../../../config/Images';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CheckBox} from 'react-native-elements';
import SecondaryButton from '../../../components/Button/SecondaryButton';
import {connect} from 'react-redux';

import {sendForgetPasswordData} from '../../../Redux/Actions/ForgetPassword.actions';


////Formik for Validation
import {Formik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('Please Enter a Email'), 
});

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  handleSubmit = async values => {
    // this.props.navigation.navigate('UserProfile')
    console.log(values);
    this.props.sendForgetPasswordData(values);
    }

  render() {
    return (
      <View style={styles.container}>

            <Formik
              initialValues={{ email:''}}
              enableReinitialize={true}
              onSubmit={values => {
                this.handleSubmit(values);
              }}
              validationSchema={validationSchema}
              render={({values, handleChange, handleSubmit, errors}) => {
                return (
                  <>
                    <KeyboardAwareScrollView>
                      <View style={{alignSelf: 'center'}}>
                        <Image
                          source={Images.APP_LANDING_ICON}
                          style={styles.landingImage}
                        />
                      </View>

                      <View style={{alignItems: 'center'}}>
                        <View style={{marginTop: 10}}>
                          <View style={styles.inputContainer}>
                            <TextInput
                              style={styles.inputs}
                              value={values.email}
                              keyboardType="email-address"
                              placeholder="Enter your e-mail address"
                              underlineColorAndroid="transparent"
                              onChangeText={handleChange('email')}
                            />
                            <Text style={styles.inputHeading}>Email Address</Text>
                          </View>
                          <Text style={styles.exampleText}>eg : jhon@test.com</Text>
                          <Text style={{color: 'red', marginTop: 7}}>{errors.email}</Text>
                        </View>

                        <Text style={styles.resetInfoText}>
                          A Link to reset your password will be sent to your email address
                        </Text>
                        <View style={{marginTop: 50}}>
                          <PrimaryButton
                            title="Send Recovery Email"
                            color={AppStyles.primaryColor}
                            onPress={handleSubmit}
                          />
                        </View>
                        <View style={{height: 20}}></View>
                      </View>
                    </KeyboardAwareScrollView>

                  </>
                );
              }}
            /> 

      </View>
    );
  }
}


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendForgetPasswordData : (values) =>  dispatch(sendForgetPasswordData(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  landingImage: {
    width: 270,
    height: 270,
    resizeMode: 'contain',
    marginTop: 20,
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
  resetInfoText: {
    fontFamily: AppStyles.fontRegular,
    fontSize: 20,
    textAlign: 'center',
    width: Metrics.DEVICE_WIDTH / 1.2,
    marginTop: 50,
  },
});
