import * as React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const Home: React.FC = () => {
  const [currDate, setCurrDate] = useState(
    new Date().getFullYear() +
      '-' +
      (new Date().getMonth() + 1) +
      '-' +
      new Date().getDate(),
  );
  return (
    <View>
      <Text>Home</Text>
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
      <Text>Today's Date:</Text>
      <Text>{currDate}</Text>
    </View>
  );
};

export default Home;
