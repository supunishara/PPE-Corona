/**
 * Author : Akila Devinda Rathnayaka
 * Copyrights: Veracity Dev
 * Version:
 * Description: Main Root Point of the Application
 * Date:
 */

import * as React from 'react';
import AppContainer from '../routes/AppContainer';
import {Provider} from 'react-redux';
import Store from '../Redux/Store/Store';
// import PushNotification from 'react-native-push-notification';
import {fcmService} from '../config/FCMService';

const store = Store();
console.disableYellowBox = true; //Deisbale yellow box
class Main extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    fcmService.register(this.onRegister, this.onNotification, this.onOpenNotification);
  }

  onRegister(token){
    console.log("[NotificationFCM] onRegister", token);
  }

  onNotification(notify){
    console.log("[NotificationFCM] onNotification=============>", notify);

    //For Android
    const channelObj = {
      channelId: "SampleChannelID",
      channelName: "SampleChannelName",
      channelDes:"SampleChannelDes"
    }

    const channel = fcmService.buildChannel(channelObj);

    const buildNotify = {
      notificationId: notify._notificationId,
      dataId: notify._notificationId,
      title: notify.title,
      content: notify._body,
      sound: 'default',
      channel: channel,
      data:{},
      colorBgIcon: "#1A243B",
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_launcher',
      vibrate: true,
    }

    const notification = fcmService.buildNotification(buildNotify);
    fcmService.displayNotification(notification);
  }

  onOpenNotification(notify){
    console.log("[NotificationFCM] onOpenNotification", notify);
    alert(notify._notificationId);
  }
  

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default Main;
