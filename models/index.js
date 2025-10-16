import { Model } from '@aws-amplify/datastore';

export const LogEntry = Model.define({
  name: 'LogEntry',
  fields: {
    id: { type: 'ID', required: true },
    disease: { type: 'String', required: true },
    mood: { type: 'String' },
    vital1: { type: 'String' },
    vital2: { type: 'String' },
    timestamp: { type: 'AWSDateTime', required: true },
  },
});
