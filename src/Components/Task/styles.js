import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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

export default styles;