import React from 'react';
import {
    Button
} from 'react-native';

const Home = ({ navigation }) => {

    return (
        <>
        <Button
      title="SignUp"
      onPress={() =>
        navigation.navigate('SignUp')
      }
    />
    <Button
      title="SignIn"
      onPress={() =>
        navigation.navigate('SignIn')
      }
    />
        </>
    )
}

export default Home;