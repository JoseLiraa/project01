import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import CheckBox from '@react-native-community/checkbox';

export default Task = (props) => {   
   
    return(
        <View style={style.item}>
            <View style={style.leftItem}>
            <CheckBox style={style.box} 
            value = {props.isSelected}
            onValueChange={(value) => props.setIsSelected(props.index, value)}
            />               
                <Text style={style.textItem}>{props.text} </Text>
            </View>
            <TouchableOpacity style={style.circular} disabled = {props.isSelected} onLongPress={() => props.deleteItem(props.index)}></TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    leftItem:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    box:{
        borderColor: '#C0C0C0',
        borderWidth: 1,
        opacity: 0.9,
        borderRadius:15,
        marginRight: 10,
    },
    textItem:{
        maxWidth: '80%',
    },
    circular:{
        width: 12,
        height: 12,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 6,
    },
});