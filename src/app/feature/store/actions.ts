import { createAction, props } from '@ngrx/store';
import { TCounterState } from './state';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const customcounter = createAction(
  'customcounter',
  props<{ counter: TCounterState['counter'] }>()
);

export const customchanneltext = createAction(
  'customchanneltext',
  props<{ text: TCounterState['text'] }>()
);
