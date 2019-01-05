import { NativeModules, NativeEventEmitter } from 'react-native';

const calendarManagerEmitter = new NativeEventEmitter(NativeModules.CalendarManager);
const subscription = calendarManagerEmitter.addListener(
  'EventReminder',
  (reminder) => {
    console.log('EVENT')
    console.log('name: ' + reminder.name)
    console.log('location: ' + reminder.location)
    console.log('date: ' + reminder.date)
  }
);

export default NativeModules.CalendarManager;
