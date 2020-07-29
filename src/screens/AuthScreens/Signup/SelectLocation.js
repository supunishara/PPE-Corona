/**
 * Author : Akila Devinda Rathnayaka + Supun Ishara
 * Copyrights: Veracity Dev
 * Version:
 * Description: Get User Current Location Screen
 * Date:
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Image,FlatList, TouchableOpacity, Alert,Platform} from 'react-native';
import AppStyles from '../../../config/AppStyles';
import Metrics from '../../../config/Metrics';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import PrimaryButton from '../../../components/Button/PrimaryButton';
// import ArcGISMapView from 'react-native-arcgis-mapview';
import MapView, { Overlay, Marker } from "react-native-maps";
import {GOOGLE_API_KEY} from '../../../Helpers/URL';
import Images from '../../../config/Images';
import {LocationService} from '../../../Helpers/LocationService';
import {connect} from 'react-redux';
import {sendLocationData} from '../../../Redux/Actions/SelectLocation.actions';
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import Geolocation from '@react-native-community/geolocation';

 class SelectLocation extends Component {

  onChangeText_Location = () => null;

  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -1,
        longitude: -1,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      },
      formatted_address:"",
      locationList:[],
      searchMode: false
    };
  }

  componentDidMount() {
    if (Platform.OS == 'android') {
      //Test
      RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      })
        .then(data => {

          Geolocation.getCurrentPosition(
            position => {
              console.log('Current Position Coords ', position);
              let region = {
                latitude: parseFloat(position.coords.latitude),
                longitude: parseFloat(position.coords.longitude),
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              };
              // this.getAddressFromCoordinate(position.coords.longitude, position.coords.latitude);
              this.setState({
                region: region,
              });
            },
            error => console.log(error),
            {
              enableHighAccuracy: false,
              timeout: 10000,
            },
          );  
          
          
        })
        .catch(err => {
          Alert.alert(
            "Error",
            "Cannot get User Permission",
            [
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
        });
    } else {
      Geolocation.getCurrentPosition(
        position => {
          console.log('Current Position Coords ', position);
          let region = {
            latitude: parseFloat(position.coords.latitude),
            longitude: parseFloat(position.coords.longitude),
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
          };
          // this.getAddressFromCoordinate(position.coords.longitude, position.coords.latitude);
          this.setState({
            region: region,
          });
        },
        error => console.log(error),
        {
          enableHighAccuracy: false,
          timeout: 10000,
        },
      ); 
    }
  }

  // onChangeTextDebounced_Location(text) {
  //   this.setState({
  //     formatted_address: text,
  //     searchMode:true
  //   });
  //   LocationService.fetchLocations({
  //     locationText: text,
  //   })
  //     .then(data => {
  //       console.log("==========data=======================data",data);
  //       this.setState({ locationList: data });
  //     })
  //     .catch(error => { });
  // }

  getAddressFromCoordinate = (longitude, latitude) => {
    let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + latitude + "," + longitude + "&key=" + GOOGLE_API_KEY;

    fetch(url)
      .then(res => {
        res.json().then(data => {

          console.log("SUCESSSSSSS", data);

          const result = (data || {}).results || {};
          console.log("RESPONSE", result);

          console.log("RESPONSE", result[0].formatted_address);
          // formatted_address
          const { formatted_address } = result[0];
          this.setState({
            formatted_address: formatted_address,
            region: {
              latitude:latitude,
              longitude:longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            },
          });

        }).catch(function (error) {
          console.log('Data failed', error)
        });
      }).catch(function (error) {
        console.log('request failed', error)
      })
  }

  // _renderItem({ item }) {
  //   console.log("item",item.location_desc);
  //   return (
  //     <TouchableOpacity style={styles.renderinputs} onPress={this.onPress_LocationItem.bind(this, item)}>
  //       <Text>{item.location_desc}</Text>
  //     </TouchableOpacity>
  //   );
  // }


  // onPress_LocationItem(data) {

  //   LocationService.fetchAddressDetails({
  //     address: data.location_desc
  //   })
  //     .then(data => {
  //       console.log("=========>>>>>>>>>>>>>>>>>>", data);
  //       if (data) {
  //         this.setState({
  //           formatted_address: data.formatted_address,
  //           region: {
  //             latitude: data.geometry.location.lat,
  //             longitude: data.geometry.location.lng,
  //             latitudeDelta: 0.01,
  //             longitudeDelta: 0.01
  //           },
  //           searchMode: false
  //         });
  //       } else {
  //         console.log('no Data');
  //       }
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  onLocationPressed = () => {
    // this.props.sendLocationData();
     this.props.navigation.navigate('SearchScreen')
  }

  onLocationSearch = () => {
    let {formatted_address} = this.state;
    fetch(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?SingleLine=${formatted_address}&countryCode=MY&category=&outFields=*&forStorage=false&f=pjson`)
        .then(async response => {
            const data = await response.json();

            console.log("data", data);
            console.log("data.candidates[0].location.x",data.candidates[0].location.x);
            if(data.candidates.length > 0){
              let region = {
              latitude: data.candidates[0].location.y,
              longitude: data.candidates[0].location.x,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            };
              this.setState({
                region: region,
              });
            }else{
              Alert.alert(
                'Error',
                'Please Search from your full address',
                [{text: 'OK', onPress: () => console.log('OK Pressed')}],
                {cancelable: false},
              );
            }
            
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
  }

  render() {
    return (
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.topView}>
            <Text style={styles.topViewText}>Your Current Location</Text>
          </View>
          <View style={styles.mapView}>
                
                      <MapView
                        ref={ref => {
                          this.refMapView = ref;
                        }}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                        // showsUserLocation={true}
                        followsUserLocation={true}
                        showsMyLocationButton={false}
                        region={this.state.region}
                        pointerEvents="none"
                        pitchEnabled={false}
                        rotateEnabled={false}
                        scrollEnabled={false}
                        zoomEnabled={false}
                        // onRegionChangeComplete={this.onRegionChangeComplete}
                      >
                      </MapView>
                 

            <Image style={styles.draggableMarker} source={Images.DRAGGABLE_MARKER}/>

          </View>

          <Text style={styles.infoText}> Drag the map to adjust location</Text>

          <View style={{marginTop: 20, alignSelf: 'center', height:Metrics.DEVICE_HEIGHT/5, width: Metrics.DEVICE_WIDTH / 1.2}}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                value={this.state.formatted_address}
                keyboardType="email-address"
                placeholder="A-1-1 Jalan US 11/3 f"
                underlineColorAndroid="transparent"
                // onChangeText={text => {this.onChangeTextDebounced_Location(text)}}
                onChangeText={text => {this.setState({formatted_address:text})}}
              />

            </View>

            <PrimaryButton
              title="Search"
              color={AppStyles.primaryColor}
              onPress={this.onLocationSearch}
            />

            {/* {this.state.searchMode && <FlatList
                data={this.state.locationList}
                keyboardShouldPersistTaps="always"
                renderItem={this._renderItem.bind(this)}
                extraData={this.state}
                // keyExtractor={this._keyExtractor}
                keyExtractor={(item, index) => index.toString()}
              />} */}
          </View>

          <View style={{backgroundColor:'white'}}>
            <PrimaryButton
              title="Next"
              color={AppStyles.primaryColor}
              onPress={this.onLocationPressed}
            />
          </View>
        </View>
        <View style={{height: 20}}></View>
      </KeyboardAwareScrollView>
    );
  }
}


const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendLocationData : () =>  dispatch(sendLocationData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLocation);

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT,
    backgroundColor: AppStyles.colorWhite,
  },
  topView: {
    backgroundColor: '#83D432',
    width: Metrics.DEVICE_WIDTH,
    height: 60,
    justifyContent: 'center',
  },
  topViewText: {
    fontSize: 20,
    color: AppStyles.colorWhite,
    textAlign: 'center',
  },
  mapView: {
    backgroundColor: 'white',
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT / 2.5,
  },
  infoText: {
    textAlign: 'center',
  },
  inputContainer: {
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    width: Metrics.DEVICE_WIDTH / 1.2,
    height: 45,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
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
  renderinputs:{
    height: 45,
    borderColor: 'grey',
    borderWidth:0.5,
    flex: 1,
  },
  draggableMarker:{
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    height:40, 
    width: 40,
    position: 'absolute',
    top: '50%',
  },
  // markerFixed: {
  //   left: "50%",
  //   position: "absolute",
  //   top: "50%"
  // }
});
