import React, { useState } from 'react'
import { View } from 'react-native'
import { Calendar } from 'react-native-calendars';


const Calendar1 = ({navigation}) => {
  const [selected, setSelected] = useState('')
  return (
  <View>
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
  </View>
  )
}

export default Calendar1
