import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to EmPathRx 👩‍⚕️</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Navigate to:</ThemedText>
        <Link href="/DiseaseSelector" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <ThemedText style={styles.linkText}>Select Condition</ThemedText>
          </TouchableOpacity>
        </Link>
        <Link href="/LogVitalsScreen" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <ThemedText style={styles.linkText}>Log Vitals</ThemedText>
          </TouchableOpacity>
        </Link>
        <Link href="/DashboardScreen" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <ThemedText style={styles.linkText}>Dashboard</ThemedText>
          </TouchableOpacity>
        </Link>
        <Link href="/chatboxScreen" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <ThemedText style={styles.linkText}>Chatbox</ThemedText>
          </TouchableOpacity>
        </Link>
        <Link href="/EmotionResponseScreen" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <ThemedText style={styles.linkText}>AI Response</ThemedText>
          </TouchableOpacity>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 12,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  linkButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
