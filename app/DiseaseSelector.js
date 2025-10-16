import React from 'react';
import { View, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function DiseaseSelector() {
  const router = useRouter();
  const diseases = ['Diabetes', 'Asthma', 'PCOS'];

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Select a condition to track:</Text>
      {diseases.map((disease) => (
        <Button
          key={disease}
          title={disease}
          onPress={() => router.push({
            pathname: '/LogVitalsScreen',
            params: { disease }
          })}
        />
      ))}
    </View>
  );
}
