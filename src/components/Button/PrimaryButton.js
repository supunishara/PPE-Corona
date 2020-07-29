/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Resuable Button Component
 * Date:
 */

import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Metrics from '../../config/Metrics';
import AppStyles from '../../config/AppStyles';

export default class PrimaryButton extends Component {
  render() {
    const styles = StyleSheet.create({
      shareButton: {
        marginTop: 10,
        width: Metrics.DEVICE_WIDTH / 1.5,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: this.props.color,
      },
      shareButtonText: {
        fontFamily: AppStyles.fontRegular,
        color: '#FFFFFF',
        fontSize: 15,
      },
    });
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

PrimaryButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
};
