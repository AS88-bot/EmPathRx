import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getEmpatheticResponse } from '../services/bedrockService';

export default function EmotionResponseScreen() {
  const params = useLocalSearchParams();
  const { disease, form } = params;
  const parsedForm = JSON.parse(form);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const prompt = `User with ${disease} feels ${parsedForm.mood} and logged vitals: ${parsedForm.vital1}, ${parsedForm.vital2}. Respond empathetically.`;
    getEmpatheticResponse(prompt).then(setResponse);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>EmPathRx Response</Text>
      {response ? <Text>{response}</Text> : <ActivityIndicator />}
    </View>
  );
}
