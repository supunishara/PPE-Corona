/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Searching screen for Report Pharmacy
 * Date:
 */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AppStyles from '../../config/AppStyles';
import Metrics from '../../config/Metrics';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Images from '../../config/Images';
import {connect} from 'react-redux';
import {sendReportSearchData} from '../../Redux/Actions/ReportSearch.actions';

class ReportSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 8,
        },
        {
          id: 9,
        },
        {
          id: 10,
        },
      ],
      selected_category: '',
    };
  }

  //Pass the selected category id from FlatList
  _handleCategorySelect = (id) => {
    this.setState({selected_category: id});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Search for Pharmacy to Report</Text>

        <View style={{marginTop: 20, alignSelf: 'center'}}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              value={this.state.email}
              keyboardType="default"
              placeholder="Caring  Pharmacy"
              underlineColorAndroid="transparent"
              onChangeText={(email) => this.setState({email})}
            />
          </View>
        </View>

        <FlatList
          style={styles.listViewContainer}
          data={this.state.data}
          extraData={this.state}
          keyExtractor={(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return <View style={{marginTop: 10}} />;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={
                  this.state.selected_category === item.id
                    ? styles.cardSelected
                    : styles.card
                }
                onPress={() => {
                  this._handleCategorySelect(item.id);
                }}>
                <View style={styles.cardContent}>
                  <Image
                    source={
                      this.state.selected_category === item.id
                        ? Images.PHARMACY_SELECTED
                        : null
                    }
                    style={{
                      width: 25,
                      height: 25,
                      marginLeft: 20,
                      marginTop: 5,
                    }}
                  />
                  <Text style={styles.address}>
                    Caring Pharamacy USJ 10,Talpan
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
        <View
          style={{
            height: Metrics.DEVICE_HEIGHT / 7,
            width: Metrics.DEVICE_WIDTH,
            marginBottom: 20,
          }}>
          <PrimaryButton
            title="Report Overcharging"
            color={AppStyles.colorRed}
            onPress={() => this.props.navigation.navigate('AddReportDetails')}
          />
          <PrimaryButton
            title="Report Quality Issue"
            color={AppStyles.colorRed}
            onPress={() => this.props.navigation.navigate('AddReportQuality')}
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
    sendReportSearchData : () =>  dispatch(sendReportSearchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportSearch);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppStyles.colorWhite,
  },
  headerText: {
    fontSize: 23,
    textAlign: 'center',
    marginTop: 20,
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
  cardSelected: {
    marginTop: 5,
    width: Metrics.DEVICE_WIDTH / 1.1,
    height: 50,
    backgroundColor: AppStyles.colorRed,
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
  },
  away: {
    fontSize: 15,
    marginLeft: 10,
    alignSelf: 'center',
    color: AppStyles.colorWhite,
  },
  address: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center',
    color: AppStyles.colorWhite,
    fontSize: 13,
    width: 150,
    top: 5,
  },
});
