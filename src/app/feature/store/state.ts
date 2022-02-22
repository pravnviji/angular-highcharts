export const initialState: TCounterState = {
  counterStore: 'storeid#1',
  counter: 0,
  text: 'Praveen Practice with Counter',
};

export type TCounterState = {
  counterStore: string;
  counter: number;
  text: string;
};
