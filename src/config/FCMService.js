import firebase from 'react-native-firebase';
import  {Notification, NotificationOpen} from 'react-native-firebase';

class FCMService  {

    register = (onRegister, onNotification, onOpenNotification) => {
        this.checkPermission(onRegister);
        this.createNotificationListners(onRegister, onNotification, onOpenNotification)
    }

    checkPermission = (onRegister) => {
        firebase.messaging().hasPermission()
        .then(enabled =>{
            if(enabled){
                //User has Permission
                this.getToken(onRegister);
            }else{
                //User don't have Permission
                this.requestPermission(onRegister);
            }
        }).catch(error => {
            console.log("Permission Rejected", error);
        })
    }

    getToken = (onRegister) => {
        firebase.messaging().getToken()
        .then(fcmToken => {
             if(fcmToken){
                 onRegister(fcmToken);
             }else{
                console.log("User does not have device token");
             }
        }).catch(error => {
            console.log("getToken Rejected", error);
        })
    }

    requestPermission = (onRegister) => {
        firebase.messaging().requestPermission()
        .then(() => {
             this.getToken(onRegister)
        }).catch(error => {
            console.log("Request Permission Rejected", error);
        })
    }

    deleteToken = () => {
        firebase.messaging().deleteToken()
        .catch(error => {
            console.log("Delete Token Error", error);
        })
    }

    createNotificationListners = (onRegister, onNotification, onOpenNotification) => {
        //triggered when a particular notification has been received in foreground
        this.notificationListner = firebase.notifications()
        .onNotification((notification) => {
            onNotification(notification);
            this.removeDeliveredNotification(notification);
        })

        //If your app is in background, you can listen for notification when is clicked // tapped // opened as follows
        this.notificationOpenedListner = firebase.notifications()
        .onNotificationOpened((notificationOpen) => {
            // onOpenNotification(notificationOpen)
            if(notificationOpen){
                const notification = notificationOpen.notification
                onOpenNotification(notification)
            }
        })

        //If your app is closed , you cna check if it was opened by a Notification being clicked // Tapped // opened as follows
        firebase.notifications().getInitialNotification()
        .then(notificationOpen => {
            if(notificationOpen){
                const notification = notificationOpen.notification
                onOpenNotification(notification)
                this.removeDeliveredNotification(notification);
            }
        })

        //Triggered for data only payload in foreground
        this.messageListner = firebase.messaging().onMessage((message) => {
            onNotification(message)
        })

        //Triggered when we have new token
        this.onTokenRefreshListner =  firebase.messaging().onTokenRefresh(fcmToken => {
            console.log("New Token Refresh", fcmToken);
            onRegister(fcmToken)
        })
    }

    unRegister = () => {
        this.notificationListner();
        this.notificationOpenedListner()
        this.messageListner();
        this.onTokenRefreshListner();
    }

    buildChannel = (obj) => {
        return new firebase.notifications.Android.Channel(
            obj.channelId, obj.channelName,
            firebase.notifications.Android.Importance.High)
            .setDescription(obj.channelDes)
    }

    buildNotification = (obj) => {
        console.log("--------obj-------------",obj);
        //For Android
        firebase.notifications().android.createChannel(obj.channel)

        //For Android and IOS
        return new firebase.notifications.Notification()
        .setSound(obj.sound)
        .setNotificationId(obj.dataId)
        .setTitle(obj.title)
        .setBody(obj.content)
        .setData(obj.data)
        //For Android
        .android.setChannelId(obj.channel.channelId)
        .android.setLargeIcon(obj.largeIcon)
        .android.setSmallIcon(obj.smallIcon)
        .android.setColor(obj.colorBgIcon)
        .android.setPriority(firebase.notifications.Android.Priority.High)
        .android.setVibrate(obj.vibrate)
    }

    scheduleNotification = (notification, days, minutes) => {
        const date = new Date();
        if(days){
            date.setDate(date.getDate() + days);
        }
        if(minutes){
            date.setMinutes(date.getMinutes() + minutes)
        }

        firebase.notifications()
        .scheduleNotification(notification, {fireDate: date.getTime()})
    }

    displayNotification = (notification) => {
        console.log("Display IOS NOtification")
        firebase.notifications().displayNotification(notification)
        .catch(error => console.log("Display Notification Error", error))
    }

    removeDeliveredNotification = (notification) => {
        firebase.notifications()
        .removeDeliveredNotification(notification.notificationId)
    }
}

export const fcmService = new FCMService()