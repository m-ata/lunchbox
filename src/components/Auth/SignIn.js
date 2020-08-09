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

    const { onClose, onLoggedIn} = props
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)

      return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 50}}>
            <Text style={{height: 18, fontSize: 15, lineHeight: 18, fontWeight: '500', color: 'black'}}>Login Here</Text>
            <TouchableOpacity onPress={onClose} >
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
        {/* <ScrollView keyboardShouldPersistTaps="handled"> */}
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <Text style={styles.textStyle} >Email / Phone Number</Text>
              <View style={{flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputStyle}
                //   onChangeText={UserName => setUserName(UserName)}
                  placeholderTextColor="#000000"
                  placeholder="Eg. +966 56 999 4324"
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
                    placeholderTextColor="#000000"
                    secureTextEntry={!showPassword}
                    placeholder="Must be at least 6 characters"
                  //   ref={ref => {
                  //     this._addressinput = ref;
                  //   }}
                    // onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={true}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} 
                  >
                  <Image 
                    source={require('./../../../public/icons/Hide.png')}
                    style={{position: 'absolute', right: 0, marginRight: 8, marginTop: 24, width: 16, height: 16}}
                  />
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{
              height:20,
              marginTop: 20,
              marginLeft: 35,
              marginRight: 35,
              margin: 10,
            }}>
                <Text style={styles.textStyle} >Forgot Password ? </Text>
            </View>
            <View style={{
              marginTop: 20,
              marginLeft: 35,
              marginRight: 35,
              height: 30
            }}>
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
            <View style={{
              height: 40,
              marginTop: 20,
              marginLeft: 35,
              marginRight: 35,
              marginBottom: 10,
            }}>
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
                  <Image source={require('./../../../public/icons/facebook.png')}
                      style={{width: 24, height: 24}}
                  />
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
                        borderColor: '#c4c4c4',
                        borderWidth: 1
              }}
              activeOpacity={0.5}
              // onPress={handleSubmitButton}
              >
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                  <Image source={require('./../../../public/icons/google.png')}
                      style={{width: 24, height: 24}}
                  />
                  <Text style={{
                    fontSize: 12,
                    lineHeight: 15,
                    fontWeight: 'bold',
                    color: '#696969',
                    marginLeft:  8
                  }}>SIGN UP WITH GOOGLE</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 14, lineHeight: 16, color: 'black', fontWeight: '600'}}>Don't Have Account ?</Text>
                <TouchableOpacity>
                  <Text style={{fontSize: 14, lineHeight: 16, color: '#17b39e', fontWeight: '600', marginLeft: 8}}>Register Now</Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        {/* </ScrollView> */}
        <View style={{
              justifyContent: 'flex-end', alignItems: 'center', 
             marginLeft: 35,
            marginRight: 35,
            marginTop: 'auto',
            position: 'absolute',
            width: Dimensions.get('window').width - 70,
            bottom: 120
            }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#f0a56c',
                  // borderWidth: 0,
                  color: '#FFFFFF',
                  borderColor: '#f0a56c',
                  height: 50,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  
                }}
                activeOpacity={0.5}
                onPress={onLoggedIn}
                >
                <Text style={styles.buttonTextStyle}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
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
      marginBottom: 10,
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
      marginLeft: 8
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
      lineHeight: 15
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
      height: 15,
      fontWeight: '600'
    }
  });