/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Report Submitted Success Screen
 * Date:
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Images from '../../config/Images';
import Metrics from '../../config/Metrics';
import {connect} from 'react-redux';
import {sendSuccessfulData} from '../../Redux/Actions/SuccessSubmit.actions';

 class SuccessSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBaseView}>
          <Text style={styles.headerTitle}>Thank You</Text>
          <Image source={Images.REPORT_SUCCESS} style={styles.landingImage} />
        </View>
        <View style={{alignSelf: 'center', marginTop: 20}}>
          <Text style={styles.informationText}>
            Your report has been submitted.
          </Text>
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
    sendSuccessfulData : () =>  dispatch(sendSuccessfulData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SuccessSubmit);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  headerBaseView: {
    backgroundColor: '#65DEE2',
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
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginTop: 10,
  },
  informationText: {
    color: '#888989',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    width: Metrics.DEVICE_WIDTH / 1.5,
  },
});
