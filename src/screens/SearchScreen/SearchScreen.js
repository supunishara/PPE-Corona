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
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Metrics from '../../config/Metrics';
import Slider from '@react-native-community/slider';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Images from '../../config/Images';
import {connect} from 'react-redux';
import {sendPharmacyData} from '../../Redux/Actions/SearchPharmacies.actions';

class SearchScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      renderData: [],
      data: [
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


  static navigationOptions = {
    header: null,
  };

  //OnPress Handler for Multi Select -> Flat List
  onPressHandler(id) {
    console.log('SearchScreen -> onPressHandler -> id', id);

    let renderData = [...this.state.data];
    for (let data of renderData) {
      if (data.id == id) {
        data.selected = data.selected == null ? true : !data.selected;
        break;
      }
    }
    this.setState({renderData});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.searchText}>
            Search for pharmacies with available stocks
          </Text>
          <View style={styles.searchDistanceView}>
            <View
              style={{
                flex: 1,
                alignItems: 'stretch',
                alignSelf: 'center',
                width: Metrics.DEVICE_WIDTH / 1.7,
              }}>
              <Slider
                value={this.state.distance}
                maximumValue={10}
                minimumValue={0}
                minimumTrackTintColor={AppStyles.primaryColor}
                thumbTintColor={AppStyles.primaryColor}
                thumbTouchSize={{width: 40, height: 40}}
                thumbStyle={{width: 20, height: 40}}
                //   onSlidingComplete={() => this.calculateBMI()}
                onValueChange={(distance) =>
                  this.setState({distance: Math.round(distance)})
                }
              />
              <Text style={styles.distanceText}>{this.state.distance} KM</Text>
            </View>
            <Text style={styles.inputHeading}>Search radius in km</Text>
          </View>

          <View style={styles.selectioBaseView}>
            <FlatList
              style={styles.list}
              contentContainerStyle={styles.listContainer}
              data={this.state.data}
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
                      style={[styles.card, {backgroundColor: item.color}]}
                      onPress={() => this.onPressHandler(item.id)}>
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
            <Text style={styles.bottomInfoText}>
              Selecting only items you need may improve search results
            </Text>
            <Text style={styles.searchItems}>Search Items</Text>
          </View>

          <View style={{marginTop: 20}}>
            <PrimaryButton
              title="Search"
              color={AppStyles.primaryColor}
              onPress={() => this.props.navigation.navigate('ViewPharmacyList')}
            />
            <PrimaryButton
              title="Report Overcharging"
              color="#FE6766"
              onPress={() => this.props.navigation.navigate('ReportSearch')}
            />
          </View>

          <View style={{height: 20}}></View>
        </ScrollView>
      </View>
    );
  }
}


//
const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendPharmacyData : () =>  dispatch(sendPharmacyData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  searchText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  searchDistanceView: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    width: Metrics.DEVICE_WIDTH / 1.2,
    height: Metrics.DEVICE_HEIGHT / 8,
    alignSelf: 'center',
    marginTop: 20,
  },
  inputHeading: {
    fontSize: 15,
    color: 'black',
    backgroundColor: 'white',
    position: 'absolute',
    top: Metrics.DEVICE_HEIGHT / 9,
    alignSelf: 'center',
    fontFamily: AppStyles.fontMedium,
  },
  distanceText: {
    fontSize: 15,
    textAlign: 'center',
  },
  selectioBaseView: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'black',
    width: Metrics.DEVICE_WIDTH / 1.2,
    height: Metrics.DEVICE_HEIGHT / 2,
    alignSelf: 'center',
    marginTop: 20,
  },
  searchItems: {
    fontSize: 20,
    color: 'black',
    backgroundColor: 'white',
    position: 'absolute',
    top: Metrics.DEVICE_HEIGHT / 2.1,
    alignSelf: 'center',
    fontFamily: AppStyles.fontMedium,
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
    resizeMode:'contain'
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
});