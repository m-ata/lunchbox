import React from 'react';
import {
    Button
} from 'react-native';
import { color } from 'react-native-reanimated';

const Home = ({ navigation }) => {

    return (
      <>
        <Button
          title="SignUppp"
          style={{backgroundColor: '#D85E44'}}
          onPress={() =>
            navigation.navigate('SignUp')
          }
        />
        <Button
          title="SignIn"
          style={{backgroundColor: '#D85E44'}}
          onPress={() =>
            navigation.navigate('SignIn')
          }

        />
      </>
    )
}

export default Home;