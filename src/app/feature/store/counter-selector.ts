import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TCounterState } from './state';

const getCounterState = createFeatureSelector<TCounterState>('counterStore');

export const getCounter = createSelector(
  getCounterState,
  (state: TCounterState) => {
    console.log('getCounter');
    console.log(state.counter);
    return state.counter;
  }
);

export const getChannelText = createSelector(
  getCounterState,
  (state: TCounterState) => {
    console.log('getText');
    console.log(state);
    return state.text;
  }
);
