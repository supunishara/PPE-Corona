handleSubmit = async () => {
    // this.props.navigation.navigate('SelectLocation');
    let {fullname, identificationNo, Email, phoneNo, password, isNric} = this.state;
    // if (!this.validateIdentification(identificationNo)) {
    //   Alert.alert(
    //     'Error',
    //     'Please Enter Correct Identification No',
    //     [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    //     {cancelable: false},
    //   );
    // } else {

    if(isNric){

    }else{
      if (!fullname) {
        Alert.alert(
          'Error',
          'Please Fill Full Name',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (!identificationNo) {
        Alert.alert(
          'Error',
          'Please Fill Identification Number',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (!Email) {
        Alert.alert(
          'Error',
          'Please Fill Email',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (!phoneNo) {
        Alert.alert(
          'Error',
          'Please Fill Phone Number',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else if (!password) {
        Alert.alert(
          'Error',
          'Please Fill Password',
          [{text: 'OK', onPress: () => console.log('OK Pressed')}],
          {cancelable: false},
        );
      } else {
        this.props.navigation.navigate('SelectLocation');
      }
    }
  };