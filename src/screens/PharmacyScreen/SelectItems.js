/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Search Screen of the Application
 * Date:
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Metrics from '../../config/Metrics';
import Images from '../../config/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../../components/Button/PrimaryButton';
import {connect} from 'react-redux';
import {sendSelectItemData} from '../../Redux/Actions/SelectItems.actions';

class SelectItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemOne: '',
      itemTwo: '',
      itemThree: '',
      itemFour: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.pharmacyName}>
              Carring Pharmacy - USJ 20, Taipan
            </Text>
          </View>
          <View style={{justifyContent: 'center', marginTop: 40}}>
            <View style={styles.selectionContainer}>
              <View
                style={{
                  backgroundColor: '#98F73A',
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.SEARCH_3PLYMASK}
                  style={styles.imageView}
                />
              </View>
              <View style={styles.inputContainerView}>
                <Text style={styles.itemName}>3-Ply Mask</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.inputs}
                      value={this.state.itemOne}
                      keyboardType="number-pad"
                      underlineColorAndroid="transparent"
                      onChangeText={(itemOne) => this.setState({itemOne})}
                    />
                  </View>
                  <Text style={styles.itemQty}>Max 20</Text>
                </View>
              </View>
            </View>
            <View style={{height: 20}}></View>
            <View style={styles.selectionContainer}>
              <View
                style={{
                  backgroundColor: '#FFBA5C',
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.SEARCH_N95MASK}
                  style={styles.imageView}
                />
              </View>
              <View style={styles.inputContainerView}>
                <Text style={styles.itemName}>N95 Mask</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.inputs}
                      value={this.state.itemTwo}
                      keyboardType="number-pad"
                      underlineColorAndroid="transparent"
                      onChangeText={(itemTwo) => this.setState({itemTwo})}
                    />
                  </View>
                  <Text style={styles.itemQty}>Max 20</Text>
                </View>
              </View>
            </View>
            <View style={{height: 20}}></View>
            <View style={styles.selectionContainer}>
              <View
                style={{
                  backgroundColor: '#FB68C0',
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.SEARCH_SANITISERS}
                  style={styles.imageView}
                />
              </View>
              <View style={styles.inputContainerView}>
                <Text style={styles.itemName}>Sanitisers</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.inputs}
                      value={this.state.itemThree}
                      keyboardType="number-pad"
                      underlineColorAndroid="transparent"
                      onChangeText={(itemThree) => this.setState({itemThree})}
                    />
                  </View>
                  <Text style={styles.itemQty}>Max 20</Text>
                </View>
              </View>
            </View>
            <View style={{height: 20}}></View>
            <View style={styles.selectionContainer}>
              <View
                style={{
                  backgroundColor: '#31F3F9',
                  width: 100,
                  height: 100,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.SEARCH_SURGICALGLOVES}
                  style={styles.imageView}
                />
              </View>
              <View style={styles.inputContainerView}>
                <Text style={styles.itemName}>Surgical Gloves</Text>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.inputs}
                      value={this.state.itemFour}
                      keyboardType="number-pad"
                      underlineColorAndroid="transparent"
                      onChangeText={(itemFour) => this.setState({itemFour})}
                    />
                  </View>
                  <Text style={styles.itemQty}>Max 20</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 20}}></View>
          <PrimaryButton
            title="Chose Time & Date"
            color={AppStyles.primaryColor}
            onPress={() => this.props.navigation.navigate('SelectTime')}
          />
          {/* <PrimaryButton title="Confirm" color={AppStyles.primaryColor} /> */}
          <View style={{height: 20}}></View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendSelectItemData: () => dispatch(sendSelectItemData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectItems);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  headerContainer: {
    width: Metrics.DEVICE_WIDTH / 1.1,
    height: 50,
    backgroundColor: AppStyles.primaryColor,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  pharmacyName: {
    fontSize: 18,
    color: AppStyles.colorWhite,
    textAlign: 'center',
  },
  inputContainer: {
    borderColor: '#979797',
    backgroundColor: AppStyles.colorWhite,
    borderRadius: 5,
    borderBottomWidth: 1,
    width: 100,
    height: 45,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
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
  selectionContainer: {
    flexDirection: 'row',
    marginLeft: Metrics.DEVICE_WIDTH / 10,
  },
  imageContainer: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
  },
  imageView: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  inputContainerView: {
    flexDirection: 'column',
    position: 'absolute',
    right: 30,
    top: 5,
  },
  itemName: {
    fontFamily: AppStyles.fontRegular,
    fontSize: 20,
    marginLeft: 20,
  },
  itemQty: {
    fontFamily: AppStyles.fontRegular,
    fontSize: 15,
    marginLeft: 10,
    marginTop: 30,
  },
});