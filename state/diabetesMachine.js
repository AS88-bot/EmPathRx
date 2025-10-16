import { createMachine } from 'xstate';
import { analyzeDiabetes, sendEmpatheticAlert } from './actions';

export const diabetesMachine = createMachine({
  id: 'diabetes',
  initial: 'idle',
  context: {
    glucose: null,
    mood: null,
    insulin: null,
    carbIntake: null,
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
      entry: 'analyzeDiabetes',
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
