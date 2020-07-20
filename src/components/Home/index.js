import React from 'react';
import {
    Button
} from 'react-native';

const Home = ({ navigation }) => {

    return (
        <Button
      title="SignUp"
      onPress={() =>
        navigation.navigate('SignUp')
      }
    />
    )
}

export default Home;