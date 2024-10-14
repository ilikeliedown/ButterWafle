import React from 'react';
import { Button, View, Alert } from 'react-native';
import axios from 'axios';

const ControlServo = () => {
  const esp8266Ip = 'http://10.150.150.92'; 

  const moveServo = async (angle) => {
    try {
      await axios.get(`${esp8266Ip}/servo?angle=${angle}`);
      Alert.alert(`서보 모터가 ${angle}도로 이동했습니다.`);
    } catch (error) {
      console.error(error);
      Alert.alert('모터 제어 실패');
    }
  };

  return (
    <View>
      <Button title="모터를 90도로" onPress={() => moveServo(90)} />
      <Button title="모터를 180도로" onPress={() => moveServo(180)} />  
    </View>
  );
};

export default ControlServo;
