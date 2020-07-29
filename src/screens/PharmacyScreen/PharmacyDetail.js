/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Detail View of the Selected
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
  ScrollView,
} from 'react-native';
import Metrics from '../../config/Metrics';
import AppStyles from '../../config/AppStyles';
import {ProgressChart} from 'react-native-chart-kit';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
import PrimaryButton from '../../components/Button/PrimaryButton';
import Images from '../../config/Images';
import {connect} from 'react-redux';
import {sendPharmacyDetailData} from '../../Redux/Actions/PharmacyDetail.actions';

const modules = ['highcharts-more', 'solid-gauge'];

class PharmacyDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartOptions: {
        title: {
          text: '',
        },

        chart: {
          type: 'solidgauge',
        },
        plotOptions: {
          solidgauge: {
            dataLabels: {
              enabled: false,
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true,
          },
        },
        series: [
          {
            name: 'Move',
            data: [
              {
                color: '#31F3F9',
                radius: '112%',
                innerRadius: '88%',
                y: 80,
              },
            ],
          },
          {
            name: 'Exercise',
            data: [
              {
                color: '#FB68C0',
                radius: '87%',
                innerRadius: '63%',
                y: 65,
              },
            ],
          },
          {
            name: 'Stand',
            data: [
              {
                color: '#FFBA5C',
                radius: '62%',
                innerRadius: '38%',
                y: 50,
              },
            ],
          },
          {
            name: 'Run',
            data: [
              {
                color: '#98F73A',
                radius: '37%',
                innerRadius: '20%',
                y: 20,
              },
            ],
          },
        ],
      },
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.pharmacyName}>
              Carring Pharmacy - USJ 20, Taipan
            </Text>
          </View>

          {/* <ProgressChart
            data={data}
            width={Metrics.DEVICE_WIDTH}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
          /> */}
          <HighchartsReactNative
            styles={styles.webViewChart}
            options={this.state.chartOptions}
            modules={modules}
            useCDN={true}
            useSSL={true}
          />

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

          <PrimaryButton
            title="Select Items"
            color={AppStyles.primaryColor}
            onPress={() => this.props.navigation.navigate('SelectItems')}
          />
          <View style={{height: 20}}></View>
        </ScrollView>
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
    sendPharmacyDetailData : () =>  dispatch(sendPharmacyDetailData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PharmacyDetail);

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
  },
  webViewChart: {
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT / 2,
  },
});
