import React, {useState} from 'react'
import styles from './FinishView.style'
import { View,Text, SafeAreaView, TextInput} from 'react-native'
import ActionBtn from '../layout/actionBtn/ActionBtn'
import i18n from '../../i18n/i18n'
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment';
const FinishView = ({route,navigation:{goBack}}) => {
  const [name, setName] = useState('')
  const { spentTime } = route.params;

  const saveTime = async () => {
    const storageKey = '@activities';
    let activities = await AsyncStorage.getItem(storageKey)
    if(activities === null || activities === undefined){
      activities = []
    }
    else{
      activities = JSON.parse(activities)
    }
    const date = new Date().getTime()
    activities.push({ name ,spentTime ,date })
    await AsyncStorage.setItem(storageKey, JSON.stringify(activities));
    console.log(activities);
    goBack()
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:3, justifyContent:'space-between'}}>
        <Text style={styles.header}>{
          i18n.FV.header
        }</Text>
        <Text style={styles.subHeader}>{
          moment.utc(spentTime).format('HH:mm:ss')
        }</Text>
        <View style={{flex:0.2 }}/>
      </View>
      <View style={{flex:1}}>
        <Text style={styles.label}>{i18n.FV.name}</Text>
        <TextInput 
          style={styles.input}
          value={name}
          onChangeText={e => setName(e)}
        />
      </View>
      <View style={styles.btnSection} >
        <ActionBtn 
          label={i18n.FV.save} 
          backgroundColor={'#f32343'} 
          textColor={'#fff'} 
          onPress={saveTime}
        />
        <ActionBtn 
          label={i18n.FV.cancel} 
          backgroundColor={'green'} 
          textColor={'#fff'}
          onPress={goBack} 
        />
      </View>
    </SafeAreaView>
  )
}

export default FinishView
