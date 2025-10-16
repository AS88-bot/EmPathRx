import { createMachine } from 'xstate';
import { analyzePCOS, sendEmpatheticAlert } from './actions';

export const pcosMachine = createMachine({
  id: 'pcos',
  initial: 'idle',
  context: {
    cycleDay: null,
    weight: null,
    fatigue: null,
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
      entry: 'analyzePCOS',
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
