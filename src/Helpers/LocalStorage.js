import AsyncStorage from '@react-native-community/async-storage';

//clientAuthID


class LocalStorage {

    storeData = (key, value) => {
        AsyncStorage.setItem(key, JSON.stringify(value));
      }

    // getData = (key) => {
    //     AsyncStorage.getItem(key).then((value) => {
    //         return value;
    //     })
    // }

    getData = async (key) => {
        try {
          const retrievedItem =  await AsyncStorage.getItem(key);
          const item = JSON.parse(retrievedItem);
          return item;
        } catch (error) {
        }
        return
        }

}
export default LocalStorage;