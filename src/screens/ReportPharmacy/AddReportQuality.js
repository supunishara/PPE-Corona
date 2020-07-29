/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Add Report about Quality of Items Screen
 * Date:
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Platform,
} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Images from '../../config/Images';
import Metrics from '../../config/Metrics';
import ImagePicker from 'react-native-image-picker';
import PrimaryButton from '../../components/Button/PrimaryButton';
import {connect} from 'react-redux';
import {sendAddReportData} from '../../Redux/Actions/AddReportQuality.actions';

const options = {
  title: 'Select Recipt Photo',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

class AddReportQuality extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      imageOne: '',
      imageTwo: '',
      imageThree: '',
      imageFour: '',
    };
  }

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

  //Open Camera -> Image Picker
  openCamera = (id) => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        if (Platform.OS == 'android') {
          //Check the camera selection with id passed
          if (id == 1) {
            this.setState({
              imageOne: source,
            });
          } else if (id == 2) {
            this.setState({
              imageTwo: source,
            });
          } else if (id == 3) {
            this.setState({
              imageThree: source,
            });
          } else if (id == 4) {
            this.setState({
              imageFour: source,
            });
          }
        } else {
          if (
            typeof response.fileName === 'undefined' ||
            response.fileName === null
          ) {
            // on iOS, using camera returns undefined fileName. This fixes that issue, so API can work.
            var getFilename = response.uri.split('/');
            imgName = getFilename[getFilename.length - 1];
            //Check the camera selection with id passed
            if (id == 1) {
              this.setState({
                imageOne: source,
              });
            } else if (id == 2) {
              this.setState({
                imageTwo: source,
              });
            } else if (id == 3) {
              this.setState({
                imageThree: source,
              });
            } else if (id == 4) {
              this.setState({
                imageFour: source,
              });
            }
          } else {
            //Check the camera selection with id passed
            if (id == 1) {
              this.setState({
                imageOne: source,
              });
            } else if (id == 2) {
              this.setState({
                imageTwo: source,
              });
            } else if (id == 3) {
              this.setState({
                imageThree: source,
              });
            } else if (id == 4) {
              this.setState({
                imageFour: source,
              });
            }
          }
        }
      }
    });
  };
  //
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.headerText}>Select Items Overcharged</Text>
          <View>
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
          </View>
          <View style={styles.separator}></View>

          <Text style={styles.headerText}>
            Please Take a Photo of Your Recipt
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => this.openCamera(1)}
              style={styles.uploadAvatar}>
              {this.state.imageOne ? (
                <Image
                  source={this.state.imageOne}
                  style={styles.uploadedImage}
                />
              ) : (
                <Image
                  source={Images.REPORT_IMAGE_UPLOAD}
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
            <View style={{width: 20}}></View>
            <TouchableOpacity
              onPress={() => this.openCamera(2)}
              style={styles.uploadAvatar}>
              {this.state.imageTwo ? (
                <Image
                  source={this.state.imageTwo}
                  style={styles.uploadedImage}
                />
              ) : (
                <Image
                  source={Images.REPORT_IMAGE_UPLOAD}
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={() => this.openCamera(3)}
              style={styles.uploadAvatar}>
              {this.state.imageThree ? (
                <Image
                  source={this.state.imageThree}
                  style={styles.uploadedImage}
                />
              ) : (
                <Image
                  source={Images.REPORT_IMAGE_UPLOAD}
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
            <View style={{width: 20}}></View>
            <TouchableOpacity
              onPress={() => this.openCamera(4)}
              style={styles.uploadAvatar}>
              {this.state.imageFour ? (
                <Image
                  source={this.state.imageFour}
                  style={styles.uploadedImage}
                />
              ) : (
                <Image
                  source={Images.REPORT_IMAGE_UPLOAD}
                  style={styles.icon}
                />
              )}
            </TouchableOpacity>
          </View>
          <PrimaryButton
            title="Submit Report"
            color="#FE6766"
            onPress={() => this.props.navigation.navigate('SuccessSubmit')}
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
    sendAddReportData: () => dispatch(sendAddReportData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReportQuality);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
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
  separator: {
    height: 2,
    backgroundColor: '#888989',
    width: Metrics.DEVICE_WIDTH,
    marginTop: 20,
  },
  uploadAvatar: {
    width: 100,
    height: 100,
    backgroundColor: '#F3B965',
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
  },
  uploadedImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
});
