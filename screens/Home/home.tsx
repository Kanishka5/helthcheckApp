import * as React from 'react';
import {useState, useEffect} from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home: React.FC = () => {
  const [currDate, setCurrDate] = useState(
    new Date().getFullYear() +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getDate(),
  );
  const [userData, setUserData] = useState('no data');

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      console.log(data);
      if (data !== null) {
        setUserData(JSON.parse(data));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.sideSpace}>
      <Text style={styles.spacing}>Home</Text>
      <Calendar
        onDayPress={(day) => {
          setCurrDate(day.dateString);
          console.log('selected date', day.dateString);
        }}
        onDayLongPress={(day) => {
          setCurrDate(day.dateString);
          console.log('selected day', day);
        }}
        monthFormat={'MMM yyyy'}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        disableMonthChange={true}
        firstDay={1}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
        enableSwipeMonths={true}
      />
      <View style={styles.spacing}>
        <Text>Today's Date:</Text>
        <Text>{currDate}</Text>
      </View>

      <View style={styles.spacing}>
        {userData && userData.date == currDate ? (
          <>
            <Text>weight: {userData.weight}</Text>
            <Text>blood pressure: {userData.bloodPressure}</Text>
            <Text>blood sugar: {userData.bloodSugar}</Text>
            <Text>Hours of sleep: {userData.hrsOfSleep}</Text>
          </>
        ) : (
          <Text>No data available.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spacing: {
    marginTop: 20,
    marginBottom: 20,
  },
  sideSpace: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default Home;
