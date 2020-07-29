/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Confirm Time Screen of the Application
 * Date:
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Metrics from '../../config/Metrics';
import TagSelect from '../../components/TagSelect/TagSelect';
import PrimaryButton from '../../components/Button/PrimaryButton';
import {sendConfirmTimeData} from '../../Redux/Actions/ConfirmTime.actions';
import {connect} from 'react-redux';

 class ConfirmTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousDates: [
        {id: 1, label: '10.00 am'},
        {id: 2, label: '10:15 am'},
        {id: 3, label: '11:30 am'},
        {id: 4, label: '11:45 am'},
        {id: 5, label: '12:00 pm'},
        {id: 6, label: '10.00 am'},
        {id: 7, label: '10:15 am'},
        {id: 8, label: '11:30 am'},
        {id: 9, label: '11:45 am'},
        {id: 10, label: '12:00 pm'},
      ],
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
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontFamily: AppStyles.fontRegular,
                fontSize: 20,
                marginLeft: 10,
                marginTop: 20,
                marginBottom: 10,
              }}>
              Sunday 10th May
            </Text>
            <TagSelect
              data={this.state.previousDates}
              ref={(tag) => {
                this.tag = tag;
              }}
              itemStyle={styles.item}
              itemLabelStyle={styles.label}
              itemStyleSelected={styles.itemSelected}
              itemLabelStyleSelected={styles.labelSelected}
              containerStyle={styles.nationDataContainer}
              max={1}
              //   onItemPress={() => this.handleUserSlectedDateByTag()}
              onMaxError={() => {}}
            />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontFamily: AppStyles.fontRegular,
                fontSize: 20,
                marginLeft: 10,
                marginTop: 20,
                marginBottom: 10,
              }}>
              Sunday 10th May
            </Text>
            <TagSelect
              data={this.state.previousDates}
              ref={(tag) => {
                this.tag = tag;
              }}
              itemStyle={styles.item}
              itemLabelStyle={styles.label}
              itemStyleSelected={styles.itemSelected}
              itemLabelStyleSelected={styles.labelSelected}
              containerStyle={styles.nationDataContainer}
              max={1}
              //   onItemPress={() => this.handleUserSlectedDateByTag()}
              onMaxError={() => {}}
            />
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text
              style={{
                fontFamily: AppStyles.fontRegular,
                fontSize: 20,
                marginLeft: 10,
                marginTop: 20,
                marginBottom: 10,
              }}>
              Sunday 10th May
            </Text>
            <TagSelect
              data={this.state.previousDates}
              ref={(tag) => {
                this.tag = tag;
              }}
              itemStyle={styles.item}
              itemLabelStyle={styles.label}
              itemStyleSelected={styles.itemSelected}
              itemLabelStyleSelected={styles.labelSelected}
              containerStyle={styles.nationDataContainer}
              max={1}
              //   onItemPress={() => this.handleUserSlectedDateByTag()}
              onMaxError={() => {}}
            />
          </View>
        </ScrollView>
        <View
          style={{
            height: 50,
            width: Metrics.DEVICE_WIDTH,
            marginBottom: 20,
          }}>
          <PrimaryButton
            title="Confirm Time & Date"
            color={AppStyles.primaryColor}
            onPress={() => this.props.navigation.navigate('OrderComplete')}
          />
        </View>
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
    sendConfirmTimeData : () =>  dispatch(sendConfirmTimeData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmTime);

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
  item: {
    borderWidth: 1,
    backgroundColor: AppStyles.colorWhite,
    width: Metrics.DEVICE_WIDTH / 4,
    borderColor: AppStyles.primaryColor,
  },
  label: {
    color: '#333',
    fontSize: 16,
    fontFamily: AppStyles.primaryFontBold,
    textAlign: 'center',
  },
  itemSelected: {
    backgroundColor: AppStyles.primaryColor,
  },
  labelSelected: {
    color: AppStyles.colorWhite,
    fontFamily: AppStyles.fontRegular,
  },
  nationDataContainer: {
    flexDirection: 'row',
    width: Metrics.DEVICE_WIDTH / 1.1,
  },
});
