import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';

const SignUp = () => {

    let [userName, setUserName] = useState('');
    let [userEmail, setUserEmail] = useState('');
    let [userAge, setUserAge] = useState('');
    let [userAddress, setUserAddress] = useState('');
    let [loading, setLoading] = useState(false);
    let [errortext, setErrortext] = useState('');
    let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);
    const [bgColor, setBgColor] = useState('');
    const [borderColor, setBorderColor] = useState('');

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView enabled>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50}}>
            <Text style={{height: 18, fontSize: 15, lineHeight: 18, fontWeight: '500', color: 'black'}}>
              Register Here
            </Text>
            <TouchableOpacity >
              <Image source={require('./../../../public/icons/cross_icon.png')}
                    style={{width: 38, height: 38, 
                    position: 'absolute',
                    top: -20,
                    bottom: 0,
                    right: 0,
                    left: (Dimensions.get('window').width/4) + 20,
                    marginRight: 16
                  }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              borderBottomColor: 'rgb(248, 248, 248)',
              borderBottomWidth: 2,
          }}
          />
          <View style={styles.SectionStyle}>
            <Text style={styles.textStyle} >Full Name</Text>
            <TextInput
              style={styles.inputStyle}
            //   onChangeText={UserName => setUserName(UserName)}
              placeholderTextColor="#000000"
              placeholder="Eg. Jhon Smith"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
          <Text style={styles.textStyle} >Mobile No </Text>
            <TextInput
              style={styles.inputStyle}
            //   onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#F6F6F7"
              placeholderTextColor="#000000"
              keyboardType="email-address"
              placeholder="Eg. +966 56 999 4324"
            //   ref={ref => {
            //     this._emailinput = ref;
            //   }}
              returnKeyType="next"
            //   onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <Text style={styles.textStyle} >Email </Text>
            <TextInput
              style={styles.inputStyle}
            //   onChangeText={UserAge => setUserAge(UserAge)}
              underlineColorAndroid="#F6F6F7"
              placeholderTextColor="#000000"
              keyboardType="numeric"
              placeholder="Example@lunchbox.com"
            //   ref={ref => {
            //     this._ageinput = ref;
            //   }}
            //   onSubmitEditing={() =>
            //     this._addressinput && this._addressinput.focus()
            //   }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
          <Text style={styles.textStyle} >Password </Text>
            <TextInput
              style={styles.inputStyle}
            //   onChangeText={UserAddress => setUserAddress(UserAddress)}
              underlineColorAndroid="#FFFFFF"
              placeholderTextColor="#000000"
              secureTextEntry={true}
              placeholder="Example@lunchbox.com"
            //   ref={ref => {
            //     this._addressinput = ref;
            //   }}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            // onPress={handleSubmitButton}
            >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
  SectionStyle: {
    marginTop: 16,
    marginLeft: 32,
    marginRight: 32,
  },
  buttonStyle: {
    backgroundColor: '#f0a56c',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#f0a56c',
    height: 50,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    // marginLeft: 35,
    // marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#0d0d0c',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#c4c4c4',
    height: 50,
    marginTop: 10,
    fontSize: 13,
    lineHeight: 15,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  textStyle: {
    color: 'black',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '500'
  }
});