import { DataStore } from 'aws-amplify';
import { LogEntry } from '../models/index';

export async function syncLog(disease, form) {
  await DataStore.save(
    new LogEntry({
      disease,
      mood: form.mood,
      vital1: form.vital1,
      vital2: form.vital2,
      timestamp: new Date().toISOString(),
    })
  );
}
