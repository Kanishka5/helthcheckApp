import * as React from 'react';
import {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';

const NewEntry: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [bloodpressure, setBloodPressure] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');
  const [hrsOfSleep, setHrsofSleep] = useState('');

  const saveData = async () => {
    try {
      const todaysDate =
        new Date().getFullYear() +
        '-' +
        (new Date().getMonth() + 1) +
        '-' +
        new Date().getDate();
      const userInfo = {
        date: todaysDate,
        weight: weight,
        bloodPressure: bloodpressure,
        bloodSugar: bloodSugar,
        hrsOfSleep: hrsOfSleep,
      };
      await AsyncStorage.setItem('userData', JSON.stringify(userInfo));
      console.log('done');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.sideSpace}>
      <Text style={styles.spacing}>Add todays Entry:</Text>
      <Text>Weight:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setWeight(text)}
        value={weight}
      />
      <Text>Blood Pressure: </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setBloodPressure(text)}
        value={bloodpressure}
      />
      <Text>Blood Sugar Level:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setBloodSugar(text)}
        value={bloodSugar}
      />
      <Text>Hours of Sleep:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setHrsofSleep(text)}
        value={hrsOfSleep}
      />
      <Button title="submit" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 30,
  },
  spacing: {
    marginTop: 20,
    marginBottom: 40,
  },
  sideSpace: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default NewEntry;
