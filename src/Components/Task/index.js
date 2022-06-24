import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

const Task = ({isCompleted, text, index, setIsCompleted, deleteItem }) => {   
    return(
        <View style={styles.item}>
            <View style={styles.leftItem}>
            <CheckBox style={styles.box} 
            value = {isCompleted}
            onValueChange={() => setIsCompleted(index)}
            />               
                <Text style={styles.textItem}>{text} </Text>
            </View>
            <TouchableOpacity style={styles.circular} disabled = {isCompleted} onPress={() => deleteItem(index)}></TouchableOpacity>
        </View>
    )
}

export default Task;

