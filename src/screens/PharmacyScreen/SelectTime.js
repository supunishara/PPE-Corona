/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Select Time Screen of the Application
 * Date:
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Metrics from '../../config/Metrics';
import {CheckBox} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import PrimaryButton from '../../components/Button/PrimaryButton';
import {sendTimeData} from '../../Redux/Actions/SelectTime.actions';
import {connect} from 'react-redux';

class SelectTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sun_am: false,
      sun_pm: false,
      mon_am: false,
      mon_pm: false,
      tue_am: false,
      tue_pm: false,
      wed_am: false,
      wed_pm: false,
      thur_am: false,
      thur_pm: false,
      fri_am: false,
      fri_pm: false,
      sat_am: false,
      sat_pm: false,
      anytime: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.pharmacyName}>
              Carring Pharmacy - USJ 20, Taipan
            </Text>
          </View>
          <Text style={styles.headerText}>
            Select your preferred pick-up time in the next 7 days
          </Text>

          <View style={styles.dateBaseView}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dateText}>Sun</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2,
                  position: 'absolute',
                  right: 10,
                }}>
                <CheckBox
                  checked={this.state.s_am}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() => this.setState({s_am: !this.state.s_am})}
                />
                <Text style={styles.am}>am</Text>
                <CheckBox
                  checked={this.state.s_pm}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() => this.setState({s_pm: !this.state.s_pm})}
                />
                <Text style={styles.am}>pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.dateBaseViewOther}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dateText}>Mon</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2,
                  position: 'absolute',
                  right: 10,
                }}>
                <CheckBox
                  checked={this.state.mon_am}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({mon_am: !this.state.mon_am})
                  }
                />
                <Text style={styles.am}>am</Text>
                <CheckBox
                  checked={this.state.mon_pm}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({mon_pm: !this.state.mon_pm})
                  }
                />
                <Text style={styles.am}>pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.dateBaseViewOther}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dateText}>Tue</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2,
                  position: 'absolute',
                  right: 10,
                }}>
                <CheckBox
                  checked={this.state.tue_am}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({tue_am: !this.state.tue_am})
                  }
                />
                <Text style={styles.am}>am</Text>
                <CheckBox
                  checked={this.state.tue_pm}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({tue_pm: !this.state.tue_pm})
                  }
                />
                <Text style={styles.am}>pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.dateBaseViewOther}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dateText}>Wed</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2,
                  position: 'absolute',
                  right: 10,
                }}>
                <CheckBox
                  checked={this.state.wed_am}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({wed_am: !this.state.wed_am})
                  }
                />
                <Text style={styles.am}>am</Text>
                <CheckBox
                  checked={this.state.wed_pm}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({wed_pm: !this.state.wed_pm})
                  }
                />
                <Text style={styles.am}>pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.dateBaseViewOther}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dateText}>Thu</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2,
                  position: 'absolute',
                  right: 10,
                }}>
                <CheckBox
                  checked={this.state.thur_am}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({thur_am: !this.state.thur_am})
                  }
                />
                <Text style={styles.am}>am</Text>
                <CheckBox
                  checked={this.state.thur_pm}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({thur_pm: !this.state.thur_pm})
                  }
                />
                <Text style={styles.am}>pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.dateBaseViewOther}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dateText}>Fri</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2,
                  position: 'absolute',
                  right: 10,
                }}>
                <CheckBox
                  checked={this.state.fri_am}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({fri_am: !this.state.fri_am})
                  }
                />
                <Text style={styles.am}>am</Text>
                <CheckBox
                  checked={this.state.fri_pm}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({fri_pm: !this.state.fri_pm})
                  }
                />
                <Text style={styles.am}>pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.dateBaseViewOther}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dateText}>Sat</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2,
                  position: 'absolute',
                  right: 10,
                }}>
                <CheckBox
                  checked={this.state.sat_am}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({sat_am: !this.state.sat_am})
                  }
                />
                <Text style={styles.am}>am</Text>
                <CheckBox
                  checked={this.state.sat_pm}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({sat_pm: !this.state.sat_pm})
                  }
                />
                <Text style={styles.am}>pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.dateBaseViewOther}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.dateText}>Anytime</Text>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 2,
                  position: 'absolute',
                  right: 10,
                }}>
                <CheckBox
                  checked={this.state.anytime}
                  disabled={false}
                  containerStyle={{marginTop: -5}}
                  checkedColor={AppStyles.primaryColor}
                  onIconPress={() =>
                    this.setState({anytime: !this.state.anytime})
                  }
                />
              </View>
            </View>
          </View>
          <View style={{height: 20}}></View>
          <PrimaryButton
            title="Search Time Slot"
            color={AppStyles.primaryColor}
            onPress={() => this.props.navigation.navigate('ConfirmTime')}
          />
          <View style={{height: 20}}></View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendTimeData: () => dispatch(sendTimeData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTime);

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
  headerText: {
    fontFamily: AppStyles.fontRegular,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
  dateBaseView: {
    alignSelf: 'center',
    marginTop: 40,
    width: Metrics.DEVICE_WIDTH / 1.5,
  },
  dateBaseViewOther: {
    alignSelf: 'center',
    marginTop: 10,
    width: Metrics.DEVICE_WIDTH / 1.5,
  },
  separator: {
    height: 2,
    width: Metrics.DEVICE_WIDTH / 1.5,
    backgroundColor: '#808080',
    alignSelf: 'center',
    marginTop: 10,
  },
  dateText: {
    fontFamily: AppStyles.fontRegular,
    fontSize: 25,
  },
  am: {
    fontFamily: AppStyles.fontRegular,
    fontSize: 22,
  },
});
