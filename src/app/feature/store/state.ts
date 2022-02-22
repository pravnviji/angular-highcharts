export const initialState: TCounterState = {
  counterStore: 'storeid#1',
  counter: 0,
  text: 'Counter Example From State',
};

export type TCounterState = {
  counterStore: string;
  counter: number;
  text: string;
};
