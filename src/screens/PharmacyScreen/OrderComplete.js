/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Order Completed Screen of the Application
 * Date:
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Images from '../../config/Images';
import Metrics from '../../config/Metrics';
import PrimaryButton from '../../components/Button/PrimaryButton';

export default class OrderComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item_data: [
        {
          id: 1,
          title: '3-Ply Mask',
          color: '#98F73A',
          image: Images.SEARCH_3PLYMASK,
        },
        {
          id: 2,
          title: 'N95 Mask',
          color: '#FFB95C',
          image: Images.SEARCH_N95MASK,
        },
        {
          id: 3,
          title: 'Sanitisers',
          color: '#FB68C0',
          image: Images.SEARCH_SANITISERS,
        },
        {
          id: 4,
          title: 'Surgical Gloves',
          color: '#31F3F9',
          image: Images.SEARCH_SURGICALGLOVES,
        },
      ],
    };
  }

  //Open Google Maps
  openGoogleMaps = () => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${3.064650},${101.694572}`;
    const label = 'Jalan Inovasi 3, Taman Teknologi Malaysia, 57000 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>Your Booking is Confirmed</Text>
          </View>
          <View style={styles.headerContainer}>
            <Text style={styles.pharmacyName}>
              Carring Pharmacy - USJ 20, Taipan
            </Text>
            <Text style={styles.time}>3:30 PM onn Monday 13th 2020</Text>
          </View>
          <View style={{alignSelf: 'center', marginTop: 20}}>
            <Text style={styles.infoText}>
              Please arrive at your pre-booked time slot.
            </Text>
            <Text style={styles.infoText}>
              You have one (1) hour grace period to pick up your PPE.
            </Text>
            <Text style={styles.infoText}>
              After one (1) hour , the order will be cancelled.
            </Text>
            <Text style={styles.infoText}>
              This is to maintain social distancing.
            </Text>
          </View>

          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.item_data}
            horizontal={false}
            scrollEnabled={false}
            numColumns={2}
            extraData={this.state}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={[styles.card, {backgroundColor: item.color}]}>
                    {item.selected == true ? (
                      <Image
                        style={{
                          width: 30,
                          height: 30,
                          position: 'absolute',
                          right: 5,
                          top: -10,
                        }}
                        source={Images.SELECT_ICON}
                      />
                    ) : (
                      <View></View>
                    )}
                    <Image style={styles.cardImage} source={item.image} />
                    <Text style={styles.quantity}>120</Text>

                    {/* <View
                        style={item.selected == true ? styles.overlay : {}}
                      /> */}
                  </TouchableOpacity>

                  <View style={styles.cardHeader}>
                    <View
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <View style={{height: 20}}></View>
          <Text style={styles.infoTextFooter}>
            You are required to present your IC Card at your pick-up
            appointment.
          </Text>

          <View style={{height: 20}}></View>

          <PrimaryButton
            title="Navigate to Pharmacy"
            color={AppStyles.primaryColor}
            onPress={() => this.openGoogleMaps()}
          />

          <PrimaryButton title="Cancel Booking" color="#FF6666" />

          <View style={{height: 20}}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  headerView: {
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT / 11,
    backgroundColor: '#83D432',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: AppStyles.fontMedium,
    color: AppStyles.colorWhite,
    fontSize: 22,
    textAlign: 'center',
  },
  headerContainer: {
    width: Metrics.DEVICE_WIDTH / 1.1,
    height: Metrics.DEVICE_HEIGHT / 9,
    backgroundColor: AppStyles.primaryColor,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  pharmacyName: {
    fontSize: 18,
    color: AppStyles.colorWhite,
    textAlign: 'center',
  },
  time: {
    fontSize: 22,
    color: AppStyles.colorWhite,
    textAlign: 'center',
  },
  infoText: {
    fontFamily: AppStyles.fontMedium,
    fontSize: 13,
    textAlign: 'center',
    color: AppStyles.colorRed,
  },
  infoTextFooter: {
    fontFamily: AppStyles.fontRegular,
    fontSize: 18,
    textAlign: 'center',
    color: AppStyles.colorRed,
  },
  /******** card **************/
  list: {
    paddingHorizontal: 5,
    marginTop: 20,
  },
  listContainer: {
    alignItems: 'center',
  },
  card: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#e2e2e2',
    //flexBasis: '42%',
    width: 100,
    height: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeader: {
    paddingVertical: 2,
    paddingHorizontal: 2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    height: 50,
    width: 50,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 13,
    alignSelf: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  bottomInfoText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    width: 200,
    alignSelf: 'center',
  },
  quantity: {
    fontSize: 25,
    fontFamily: AppStyles.fontMedium,
  },
});
