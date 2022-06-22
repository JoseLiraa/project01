import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Task from './components/Task';

export default function App(){
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.titleSection}>Today's tasks</Text>

        <View style={styles.items}>
          <Task text= {'first task'} />
          <Task text= {'second task'} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskContainer:{
    paddingTop: 80,
    paddingHorizontal: 20,    
  },
  titleSection:{
    fontWeight: 'bold',
    fontSize: 20
  },
  items:{

  },
});