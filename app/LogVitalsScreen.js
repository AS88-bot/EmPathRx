import { useMachine } from '@xstate/react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { asthmaMachine } from '../state/asthmaMachine';
import { diabetesMachine } from '../state/diabetesMachine';
import { pcosMachine } from '../state/pcosMachine';

const machineMap = {
  Diabetes: diabetesMachine,
  Asthma: asthmaMachine,
  PCOS: pcosMachine,
};

export default function LogVitalsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { disease } = params;
  const [form, setForm] = useState({ mood: '', vital1: '', vital2: '' });
  const [state, send] = useMachine(machineMap[disease]);

  const handleSubmit = () => {
    send('LOG');
    send('SUBMIT');
    router.push({
      pathname: '/EmotionResponseScreen',
      params: { disease, form: JSON.stringify(form) }
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>{disease} Tracker</Text>
      <TextInput placeholder="Mood" onChangeText={(text) => setForm({ ...form, mood: text })} />
      <TextInput placeholder="Vital 1" onChangeText={(text) => setForm({ ...form, vital1: text })} />
      <TextInput placeholder="Vital 2" onChangeText={(text) => setForm({ ...form, vital2: text })} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

