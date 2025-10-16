import { createMachine } from 'xstate';
import { analyzeAsthma, sendEmpatheticAlert } from './actions';

export const asthmaMachine = createMachine({
  id: 'asthma',
  initial: 'idle',
  context: {
    peakFlow: null,
    airQuality: null,
    triggers: [],
    mood: null,
  },
  states: {
    idle: {
      on: { LOG: 'logging' },
    },
    logging: {
      on: {
        SUBMIT: 'analyzing',
        CANCEL: 'idle',
      },
    },
    analyzing: {
      entry: 'analyzeAsthma',
      on: {
        DONE: 'idle',
        ALERT: 'alerting',
      },
    },
    alerting: {
      entry: 'sendEmpatheticAlert',
      on: { ACK: 'idle' },
    },
  },
});
