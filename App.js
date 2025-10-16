import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Choose Condition' }} />
      <Stack.Screen name="log-vitals" options={{ title: 'Log Vitals' }} />
      <Stack.Screen name="emotion-response" options={{ title: 'EmPathRx Response' }} />
      <Stack.Screen name="dashboard" options={{ title: 'Health Dashboard' }} />
      <Stack.Screen name="Chatbox" component={chatboxScreen} options={{ title: 'Talk to EmPathRx' }} />

    </Stack>
  );
}
