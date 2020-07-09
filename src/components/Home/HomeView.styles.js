import {StyleSheet} from 'react-native';
const homePg = StyleSheet.create({
  container: {
    alignItems:'center'
  },
  header:{
    marginTop: 35,
    textAlign:'center',
    fontSize:40,
    color:'black'
  },
  actionBtn:{
    width:284,
    height:284,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'red',
    borderRadius:142
  },
  textBtn:{
    fontSize:40,
    fontWeight:'bold'
  },
  pausedBtn:{
    fontSize:35
  }
})
export default homePg;