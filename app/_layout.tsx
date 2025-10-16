import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      <Stack.Screen name="DiseaseSelector" options={{ title: 'Select Condition' }} />
      <Stack.Screen name="LogVitalsScreen" options={{ title: 'Log Vitals' }} />
      <Stack.Screen name="DashboardScreen" options={{ title: 'Dashboard' }} />
      <Stack.Screen name="chatboxScreen" options={{ title: 'Chatbox' }} />
      <Stack.Screen name="EmotionResponseScreen" options={{ title: 'AI Response' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
