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

  const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

      return (
          <View
          style={{ flex: 1, backgroundColor: '#307ecc' }}
          >
            <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView enabled>
              <View style={styles.SectionStyle}>
                <TextInput 
                  style={styles.inputStyle}
                  placeholder="Enter Email"
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput 
                  style={styles.inputStyle}
                  placeholder="Enter Password"
                />
              </View>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  activeOpacity={0.5}
                  // onPress={handleSubmitButton}
                >
                  <Text style={styles.buttonTextStyle} >SIGN IN</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
            </ScrollView>
          </View>
      )
  };

  export default SignIn;

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