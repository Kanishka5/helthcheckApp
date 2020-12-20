import * as React from 'react';
import {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const History: React.FC = () => {
  const [allEntries, setAllEntries] = useState('no entries');

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      console.log(data);
      if (data !== null) {
        setAllEntries(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View>
      <Text>Past Entries:</Text>
      <Text>{allEntries}</Text>
    </View>
  );
};

export default History;
