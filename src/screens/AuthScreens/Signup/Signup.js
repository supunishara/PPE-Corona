/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: SignUp Screen of the Application
 * Date:
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Alert} from 'react-native';
import Metrics from '../../../config/Metrics';
import AppStyles from '../../../config/AppStyles';
import Images from '../../../config/Images';
import PrimaryButton from '../../../components/Button/PrimaryButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {Dropdown} from 'react-native-material-dropdown';
import {CheckBox} from 'react-native-elements';
import Spinner from 'react-native-loading-spinner-overlay';


//SignUp actions
import {sendSignUpData} from '../../../Redux/Actions/SignUp.actions';

///Formik for Validation
import {Formik} from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  fullname: yup.string().required('Please Enter a Full Name'),
  identificationNo: yup.string().required('Please Enter a Identification No'),
  Email: yup.string().email().required('Please Enter a Email'),
  password: yup
    .string()
    // .min(10, 'Please enter a password')
    .required('Please Enter a password'),
  phoneNo: yup.string().required('Please Enter a Phone No'),
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      identificationNo: '',
      Email: '',
      password: '',
      phoneNo: '',
      isNric: false,
      DropDownvalue: 'English',
      data: [
        {
          value: 'English',
        },
        {
          value: 'Spanish',
        },
        {
          value: 'Tamil',
        },
      ],
    };
  }

  onChangeText = (text) => {
    this.setState({
      DropDownvalue: text,
    });
  };

  validateIdentification = () => {
    let {identificationNo} = this.state;
    var re = /^(([[1-9]{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01]))-([0-9]{2})-([0-9]{4})$/;
    return re.test(identificationNo);
  };

  handleSubmit = async () => {
    // this.props.navigation.navigate('SelectLocation');
    let {fullname, identificationNo, Email, phoneNo, password} = this.state;
    if (!this.validateIdentification(identificationNo)) {
      Alert.alert(
        'Error',
        'Please Enter Correct Identification No',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      if (!fullname) {
        Alert.alert(
          'Error',
          'Please Fill Full Name',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (!identificationNo) {
        Alert.alert(
          'Error',
          'Please Fill Identification Number',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (!Email) {
        Alert.alert(
          'Error',
          'Please Fill Email',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (!phoneNo) {
        Alert.alert(
          'Error',
          'Please Fill Phone Number',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (!password) {
        Alert.alert(
          'Error',
          'Please Fill Password',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else {
        let {fullname, identificationNo, Email, phoneNo, password} = this.state;
        let values = {
          fullname:fullname,
          identificationNo: identificationNo,
          Email: Email,
          phoneNo: phoneNo,
          password: password
        };
        this.props.sendSignUpData(values);
        // this.props.navigation.navigate('SelectLocation');
      }
    }
  };

  render() {
    return (
      <KeyboardAwareScrollView>
      <Spinner
          visible={this.props.isLoading}
        />

        <Formik
          initialValues={{
            fullname: '',
            identificationNo: '',
            Email: '',
            password: '',
            phoneNo: '',
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            this.handleSubmit(values);
          }}
          validationSchema={validationSchema}
          render={({values, handleChange, handleSubmit, errors}) => {
            return (
              <>
                <View style={styles.container}>
                  <View style={styles.headerBaseView}>
                    <Text style={styles.headerTitle}>Sign-Up</Text>
                    <Image
                      source={Images.SIGN_UP_ICON}
                      style={styles.landingImage}
                    />
                  </View>
                  <View style={{alignItems: 'center', marginTop: 20}}>
                    <View style={styles.itemTextStyleMainmain}>
                      <View style={styles.itemTextStyleMain}>
                        <Dropdown
                          onChangeText={this.onChangeText}
                          dropdownPosition={0}
                          lineWidth={0}
                          rippleInsets={{top: 2, bottom: -10}}
                          dropdownOffset={{top: 10, left: 10}}
                          // containerStyle={styles.selectionDropdownContainer}
                          itemTextStyle={{
                            fontFamily: AppStyles.fontRegular,
                            paddingLeft: 10,
                          }}
                          selectedItemColor={AppStyles.colorBlack}
                          disabledItemColor={'4F4F4F'}
                          data={this.state.data}
                          animationDuration={0}
                          // label={this.state.DropDownvalue}
                          itemTextStyle={{paddingLeft: 10}}
                          overlayStyle={styles.containerStyle}
                          itemPadding={10}
                          containerStyle={styles.itemTextStyle}
                        />
                      </View>
                    </View>

                    <View style={{marginTop: 10}}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.inputs}
                          value={this.state.fullname}
                          keyboardType="email-address"
                          placeholder="Enter your full name"
                          underlineColorAndroid="transparent"
                          onChangeText={(fullname) =>
                            this.setState({fullname: fullname})
                          }
                        />
                        <Text style={styles.inputHeading}>Full Name</Text>
                      </View>
                      <Text style={styles.exampleText}>
                        eg : Jhon Maynard Keynes
                      </Text>
                      {/* <Text style={{color: 'red', marginTop: 7}}>{errors.fullname}</Text> */}
                    </View>
                    <View style={styles.dateBaseViewOther}>
                      <View style={{flexDirection: 'row'}}>
                        <View
                          style={{
                            flexDirection: 'row',
                            // position: 'absolute',
                            // left: -60,
                          }}>
                          <CheckBox
                            checked={this.state.isNric}
                            disabled={false}
                            containerStyle={{marginTop: -9}}
                            checkedColor={AppStyles.primaryColor}
                            onIconPress={() =>
                              this.setState({isNric: !this.state.isNric})
                            }
                          />
                        </View>
                        <Text style={styles.dateText}>Malaysian with NRIC</Text>
                      </View>
                    </View>
                    <View style={{marginTop: 0}}>
                      <View style={styles.inputContainer}>
                        {this.state.isNric == false ? (
                          <TextInput
                            style={styles.inputs}
                            value={this.state.identificationNo}
                            keyboardType="email-address"
                            placeholder="Enter your identification number"
                            underlineColorAndroid="transparent"
                            onChangeText={(identificationNo) =>
                              this.setState({
                                identificationNo: identificationNo,
                              })
                            }
                          />
                        ) : (
                          <TextInput
                            style={styles.inputs}
                            value={this.state.identificationNo}
                            keyboardType="email-address"
                            placeholder="Enter your NRIC number"
                            underlineColorAndroid="transparent"
                            onChangeText={(identificationNo) =>
                              this.setState({
                                identificationNo: identificationNo,
                              })
                            }
                          />
                        )}
                        {this.state.isNric == false ? (
                          <Text style={styles.inputHeading}>
                            Identification Number
                          </Text>
                        ) : (
                          <Text style={styles.inputHeading}>NRIC Number</Text>
                        )}
                      </View>
                      {this.state.isNric == false ? (
                        <View>
                          <Text style={styles.exampleText}>
                            Passport / Refugee Card / Identification Number
                          </Text>
                          <Text style={styles.exampleText}>
                            This document must be presented upon PPE Pickup
                          </Text>
                        </View>
                      ) : (
                        <View>
                          <Text style={styles.exampleText}>
                            Malaysian NRIC Number. This document must be
                            presented upon PPE Pickup
                          </Text>
                        </View>
                      )}
                      {/* <Text style={{color: 'red', marginTop: 7}}>{errors.identificationNo}</Text> */}
                    </View>
                    <View style={{marginTop: 20}}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.inputs}
                          value={this.state.Email}
                          keyboardType="email-address"
                          placeholder="Enter your e-mail address"
                          underlineColorAndroid="transparent"
                          onChangeText={(Email) =>
                            this.setState({Email: Email})
                          }
                        />
                        <Text style={styles.inputHeading}>Email Address</Text>
                      </View>
                      <Text style={styles.exampleText}>
                        eg : IC Number , Passport Number or others
                      </Text>
                      {/* <Text style={{color: 'red', marginTop: 7}}>{errors.Email}</Text> */}
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
                          onChangeText={(password) =>
                            this.setState({password: password})
                          }
                        />
                        <Text style={styles.inputHeading}>Password</Text>
                      </View>
                      {/* <Text style={{color: 'red', marginTop: 7}}>{errors.password}</Text> */}
                      {/* <Text style={styles.exampleText}>
                            eg : IC Number , Passport Number or others
                          </Text> */}
                    </View>
                    <View style={{marginTop: 20}}>
                      <View style={styles.inputContainer}>
                        <TextInput
                          style={styles.inputs}
                          value={this.state.phoneNo}
                          keyboardType="number-pad"
                          placeholder="Enter your mobile phone number"
                          underlineColorAndroid="transparent"
                          onChangeText={(phoneNo) =>
                            this.setState({phoneNo: phoneNo})
                          }
                        />
                        <Text style={styles.inputHeading}>Phone Number</Text>
                      </View>
                      <Text style={styles.exampleText}>eg : 012 345 6769</Text>
                      {/* <Text style={{color: 'red', marginTop: 7}}>{errors.phoneNo}</Text> */}
                    </View>
                  </View>
                  <View style={{marginTop: 40}}>
                    <PrimaryButton
                      title="Next"
                      color={AppStyles.primaryColor}
                      onPress={this.handleSubmit}
                    />
                  </View>
                  <View style={{height: 20}}></View>
                </View>
              </>
            );
          }}
        />
      </KeyboardAwareScrollView>
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
    sendSignUpData : (values) =>  dispatch(sendSignUpData(values))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  headerBaseView: {
    backgroundColor: '#FB68C0',
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT / 3,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    color: AppStyles.colorWhite,
    textAlign: 'center',
    marginTop: 20,
    width: 250,
  },
  landingImage: {
    width: Metrics.DEVICE_WIDTH / 6,
    height: Metrics.DEVICE_HEIGHT / 6,
    resizeMode: 'contain',
    marginTop: 10,
  },
  inputHeading: {
    fontSize: 12,
    color: '#979797',
    backgroundColor: 'white',
    // width: 50,
    marginLeft: 10,
    position: 'absolute',
    top: -9,
  },
  exampleText: {
    fontSize: 12,
    color: '#979797',
    marginLeft: 5,
    width: Metrics.DEVICE_WIDTH / 1.2,
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
    marginTop: 0,
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
  selectionDropdownContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 50,
    width: Metrics.DEVICE_WIDTH / 2.2,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 5,
  },
  itemTextStyleMain: {
    backgroundColor: '#D3D3D3',
    paddingLeft: 30,
    width: Metrics.DEVICE_WIDTH / 1.2 - 30,
  },
  itemTextStyleMainmain: {
    backgroundColor: 'white',
    width: Metrics.DEVICE_WIDTH / 1.2,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  itemTextStyle: {
    // marginLeft: 20,
    backgroundColor: '#D3D3D3',
  },
  dateBaseViewOther: {
    marginTop: 20,
    width: Metrics.DEVICE_WIDTH / 1.1,
  },
  dateText: {
    fontFamily: AppStyles.fontRegular,
    fontSize: 13,
    marginTop: 3,
    marginLeft: -10,
  },
});
