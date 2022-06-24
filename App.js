import React, {useState} from 'react';
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
import Task from './components/Task';

export default function App(){
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if(task == null ){
      alert("Please type something");
    }else if(taskItem.length <= 9){
      setTaskItem([...taskItem,task])
      setTask(null);
    }else{
      alert("You can only enter 10 task at a time!")
}}

function setIsSelected(index, value){
  let data = []
  
  for(let i=0; i < taskItem.length; i++){
    if(index === i){
      data.push({...taskItem, isSelected: value})
      console.log("estoy aqui 1",index, value);      
    }else{
      data.push(taskItem[i])    
      console.log("estoy aqui 2",index, value);  
    }
  }
}

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
              console.log("estoy aqui 3",index); 
              let itemsCopy = [...taskItem];
              itemsCopy.splice(index,1);
              setTaskItem(itemsCopy);
              }
          }
      ])
}

  return (
    <View style={styles.container}>
      <ScrollView style={styles.taskContainer}>
        <Text style={styles.titleSection}>Today's tasks</Text>
        <View style={styles.items}>
          {            
            taskItem.map((item, index) => {
              return <Task key = {index} text = {item} setIsSelected={setIsSelected} deleteItem={deleteItem}/>
            }).reverse()
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
        <TouchableOpacity onPress={() => handleAddTask()}>
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