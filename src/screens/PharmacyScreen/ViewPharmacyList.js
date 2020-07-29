/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: View All the Pharmacy List Screen
 * Date:
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Metrics from '../../config/Metrics';

export default class ViewPharmacyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Caring Pharmacy USJ 10, Taipan',
          kmAway: '6',
          color: '#67ACB2',
        },
        {
          id: 2,
          name: 'Guardian Pharmacy Sunway Pyramid',
          kmAway: '14',
          color: '#579297',
        },
        {
          id: 3,
          name: 'Caring Pharmacy USJ 10, Taipan',
          kmAway: '19',
          color: '#437175',
        },
        {
          id: 4,
          name: 'Caring Pharmacy USJ 10, Taipan',
          kmAway: '23',
          color: '#345659',
        },
        {
          id: 5,
          name: 'Guardian Pharmacy Sunway Pyramid',
          kmAway: '29',
          color: '#1F3335',
        },
        {
          id: 6,
          name: 'Caring Pharmacy USJ 10, Taipan',
          kmAway: '34',
          color: '#152324',
        },
        {
          id: 7,
          name: 'Caring Pharmacy USJ 10, Taipan',
          kmAway: '38',
          color: '#152324',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>
          Pharmacies with available stock of your chosen items
        </Text>

        <FlatList
          style={styles.listViewContainer}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={{marginTop: 10}} />;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  marginTop: 5,
                  width: Metrics.DEVICE_WIDTH / 1.1,
                  height: 50,
                  backgroundColor: item.color,
                  alignSelf: 'center',
                  borderRadius: 30,
                }}
                onPress={() => {
                  this.props.navigation.navigate('PharmacyDetail');
                }}>
                <View style={styles.cardContent}>
                  <Text style={styles.distance}>{item.kmAway}</Text>
                  <Text style={styles.away}>km away</Text>
                  <Text style={styles.address}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  listViewContainer: {
    marginTop: 20,
  },
  card: {
    marginTop: 5,
    width: Metrics.DEVICE_WIDTH / 1.1,
    height: 50,
    backgroundColor: '#579297',
    alignSelf: 'center',
    borderRadius: 30,
  },
  cardContent: {
    flexDirection: 'row',
  },
  distance: {
    fontSize: 30,
    marginLeft: 20,
    justifyContent: 'center',
    color: AppStyles.colorWhite,
    fontFamily: AppStyles.fontMedium,
  },
  away: {
    fontSize: 15,
    marginLeft: 10,
    alignSelf: 'center',
    color: AppStyles.colorWhite,
  },
  address: {
    position: 'absolute',
    right: 5,
    alignSelf: 'center',
    color: AppStyles.colorWhite,
    fontSize: 12,
    top: 5,
    width: 140,
    fontFamily: AppStyles.fontMedium,
  },
})