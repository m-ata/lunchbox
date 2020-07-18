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
} from 'react-native';

const SignUp = () => {

    let [userName, setUserName] = useState('');
    let [userEmail, setUserEmail] = useState('');
    let [userAge, setUserAge] = useState('');
    let [userAddress, setUserAddress] = useState('');
    let [loading, setLoading] = useState(false);
    let [errortext, setErrortext] = useState('');
    let [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

    return (
        <View 
            style={{ flex: 1, backgroundColor: '#307ecc' }}>
      {/* <Loader loading={loading} /> */}
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center' }}>
          <Image
            // source={require('../Image/aboutreact.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
            //   onChangeText={UserName => setUserName(UserName)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Enter Name"
              placeholderTextColor="#F6F6F7"
              autoCapitalize="sentences"
              returnKeyType="next"
            //   onSubmitEditing={() =>
            //     this._emailinput && this._emailinput.focus()
            //   }
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
            //   onChangeText={UserEmail => setUserEmail(UserEmail)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Enter Email"
              placeholderTextColor="#F6F6F7"
              keyboardType="email-address"
            //   ref={ref => {
            //     this._emailinput = ref;
            //   }}
              returnKeyType="next"
            //   onSubmitEditing={() => this._ageinput && this._ageinput.focus()}
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
            //   onChangeText={UserAge => setUserAge(UserAge)}
              underlineColorAndroid="#F6F6F7"
              placeholder="Enter Phone Number"
              placeholderTextColor="#F6F6F7"
              keyboardType="numeric"
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
            <TextInput
              style={styles.inputStyle}
            //   onChangeText={UserAddress => setUserAddress(UserAddress)}
              underlineColorAndroid="#FFFFFF"
              placeholder="Enter Password"
              placeholderTextColor="#F6F6F7"
              secureTextEntry={true}
            //   ref={ref => {
            //     this._addressinput = ref;
            //   }}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorTextStyle}> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            // onPress={handleSubmitButton}
            >
            <Text style={styles.buttonTextStyle}>SIGNUP</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
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
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
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
});