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
      Dimensions,
  } from 'react-native';

  const SignIn = (props) => {

    const { onClose} = props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50}}>
            <Text style={{height: 18, fontSize: 15, lineHeight: 18, fontWeight: '500', color: 'black'}}>Login Here</Text>
            <TouchableOpacity onPress={onClose} style={{alignItems: 'flex-end', justifyContent: 'flex-end'}} >
              <Image source={require('./../../../public/icons/cross_icon.png')}
                    style={{width: 30, height: 30, 
                    // position: 'absolute',
                    // top: 0,
                    // bottom: 0,
                    // right: 0,
                    // left: Dimensions.get('window').width - 20
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
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <Text style={styles.textStyle} >Email / Phone Number</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputStyle}
                //   onChangeText={UserName => setUserName(UserName)}
                  placeholderTextColor="#F6F6F7"
                  autoCapitalize="sentences"
                  returnKeyType="next"
                  blurOnSubmit={false}
                />
              </View>
            </View>
            <View style={styles.SectionStyle}>
              <Text style={styles.textStyle} >Password </Text>
                <View style={{flexDirection: 'row'}}>
                  <TextInput
                    style={styles.inputStyle}
                  //   onChangeText={UserAddress => setUserAddress(UserAddress)}
                    underlineColorAndroid="#FFFFFF"
                    placeholderTextColor="#F6F6F7"
                    secureTextEntry={true}
                  //   ref={ref => {
                  //     this._addressinput = ref;
                  //   }}
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                  />
                  <TouchableOpacity>
                  <Image 
                    source={require('./../../../public/icons/Hide.png')}
                    style={{position: 'absolute', right: 0, marginRight: 8, marginTop: 24}}
                  />
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{
              height:30,
              marginTop: 20,
              marginLeft: 35,
              marginRight: 35,
              margin: 10,
            }}>
                <Text style={styles.textStyle} >Forgot Password ? </Text>
            </View>
            <View style={styles.SectionStyle}>
              <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width: '45%'
                }}
                />
                <Text style={{color: '#9d9d9d', fontSize: 13, lineHeight: 15, fontWeight: '500', marginLeft: 8}}>OR</Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    width: '45%',
                    marginLeft: 8
                }}
                />
              </View>
            </View>
            <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={{
                        height: 48,
                        padding: 10,
                        width: '100%',
                        backgroundColor: '#3a5998',
                        color: '#FFFFFF',
                        borderRadius: 6,
                        justifyContent: 'center'
              }}
              activeOpacity={0.5}
              // onPress={handleSubmitButton}
              >
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={styles.socialBtnText}>SIGN UP WITH FACEBOOK</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={{
                        height: 48,
                        padding: 10,
                        width: '100%',
                        backgroundColor: '#fcfcfc',
                        color: '#FFFFFF',
                        borderRadius: 6,
                        justifyContent: 'center',
                        borderColor: '#c4c4c4'
              }}
              activeOpacity={0.5}
              // onPress={handleSubmitButton}
              >
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{
                    fontSize: 12,
                    lineHeight: 15,
                    fontWeight: 'bold',
                    color: '#696969'
                  }}>SIGN UP WITH GOOGLE</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={styles.SectionStyle}>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              // onPress={handleSubmitButton}
              >
              <Text style={styles.buttonTextStyle}>SIGN IN</Text>
            </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
      )
  };

  export default SignIn;

  const styles = StyleSheet.create({
    SectionStyle: {
      height: 60,
      marginTop: 20,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
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
      // marginTop: 20,
      // marginBottom: 20,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    socialBtnText: {
      fontSize: 12,
      lineHeight: 15,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    inputStyle: {
      flex: 1,
      color: '#0d0d0c',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#B0A8A6',
      height: 50,
      marginTop: 10,
      fontSize: 16
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
      height: 15
    }
  });