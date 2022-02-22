import { Action, createReducer, on } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
  customcounter,
  customchanneltext,
} from './actions';
import { initialState, TCounterState } from './state';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customcounter, (state, actions) => {
    return {
      ...state,
      counter: state.counter + actions.counter,
    };
  }),
  on(customchanneltext, (state, actions) => {
    return {
      ...state,
      text: actions.text,
    };
  })
);

export function counterReducer(
  state: TCounterState | undefined,
  action: Action
) {
  return _counterReducer(state, action);
}
