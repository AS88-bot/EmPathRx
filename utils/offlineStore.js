import AsyncStorage from '@react-native-async-storage/async-storage';

const OFFLINE_KEY_PREFIX = 'offline_';

export async function saveOfflineLog(key, data) {
  try {
    const prefixedKey = `${OFFLINE_KEY_PREFIX}${key}`;
    await AsyncStorage.setItem(prefixedKey, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving offline log:', error);
    throw error;
  }
}

export async function getOfflineLogs() {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const offlineKeys = keys.filter(key => key.startsWith(OFFLINE_KEY_PREFIX));
    const stores = await AsyncStorage.multiGet(offlineKeys);
    return stores.map(([key, value]) => {
      try {
        return JSON.parse(value);
      } catch (parseError) {
        console.error(`Error parsing offline log for key ${key}:`, parseError);
        return null; // or handle as needed
      }
    }).filter(item => item !== null);
  } catch (error) {
    console.error('Error retrieving offline logs:', error);
    throw error;
  }
}
