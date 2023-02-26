export type StateType = {
  Pomodoro: number;
  'Short Break': number;
  'Long Break': number;
  frequency: number;
  push: boolean;
  popup: boolean;
  sound: boolean;
  history: number[];
};

export const initialState: StateType = {
  Pomodoro: 25,
  'Short Break': 5,
  'Long Break': 15,
  frequency: 4,
  push: false,
  popup: false,
  sound: false,
  history: [],
};
