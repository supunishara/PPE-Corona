/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Button With Border Only - Secondary Button
 * Date:
 */
import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Metrics from '../../config/Metrics';
import AppStyles from '../../config/AppStyles';

export default class SecondaryButton extends Component {
  render() {
    return (
      <View style={{alignSelf: 'center'}}>
        <TouchableOpacity
          style={styles.shareButton}
          onPress={this.props.onPress}>
          <Text style={styles.shareButtonText}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shareButton: {
    marginTop: 10,
    width: Metrics.DEVICE_WIDTH / 1.5,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: AppStyles.primaryColor,
    backgroundColor: AppStyles.colorWhite,
  },
  shareButtonText: {
    color: '#6A6A6A',
    fontSize: 15,
    fontFamily: AppStyles.fontRegular,
  },
});

SecondaryButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
};
