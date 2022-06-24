import React, {useState, useEffect} from 'react';
import {
  ScrollView,  
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  Platform,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert,
} from 'react-native';
import Task from './src/Components/Task';

export default function App(){
  const [task, setTask] = useState("");
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = (text) => {
    Keyboard.dismiss();
    if(task == "" ){
      alert("Please type something");
    }else if(taskItem.length <= 9){
      setTaskItem(prev => [{value: task, isCompleted: false}, ...prev])
      setTask("");
    }else{
      alert("You can only enter 10 task at a time!")
}}

function deleteItem(index){
  Alert.alert(
      "Delete Item",
      "Are you sure you want to delete this item?",
      [
          {
              text: "Cancel",
              style: "Cancel"
          },
          {
              text: "Yes", onPress: () => {
              let itemsCopy = [...taskItem];
              itemsCopy.splice(index,1);
              setTaskItem(itemsCopy);
              }
          }
      ])
}

  const markCompleted = (index) => {
    const localCopy  = [...taskItem];
    localCopy[index].isCompleted = !localCopy[index].isCompleted;
    localCopy.sort((a, b) => a.isCompleted - b.isCompleted);
    setTaskItem(localCopy);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.taskContainer}>
        <Text style={styles.titleSection}>Today's tasks</Text>
        <View style={styles.items}>
          {            
            taskItem.map(({value, isCompleted}, index) => {
              return <Task key={`${index}-${value}`} setIsCompleted={markCompleted} isCompleted={isCompleted} index={index} text={value} deleteItem={deleteItem}/>
            })
          }
        </View>
      </ScrollView>


      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style = {styles.typedTaskWrapper}      
        >
        <TextInput style = {styles.input} 
        placeholder = {'Write a task'} value = {task} onChangeText={text => setTask(text)}>          
        </TextInput>
        <TouchableOpacity onPress={() => handleAddTask(task)}>
          <View style = {styles.buttonWrapper}>
            <Text style = {styles.buttonText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskContainer:{
    paddingTop: 70,
    paddingHorizontal: 20,    
  },
  titleSection:{
    fontWeight: 'bold',
    fontSize: 20,    
  },
  items:{
    marginTop: 35,
  },
  typedTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input:{
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  buttonWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  buttonText:{

  },
});