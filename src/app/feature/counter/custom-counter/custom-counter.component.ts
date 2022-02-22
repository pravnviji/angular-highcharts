import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customchanneltext, customcounter } from '../../store/actions';
import { getChannelText } from '../../store/counter-selector';
import { TCounterState } from '../../store/state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent implements OnInit {
  value!: number;
  textDesc!: string;
  constructor(private store: Store<TCounterState>) {}

  ngOnInit(): void {
    console.log('CustomCounterComponent Oninit');
    this.store.select(getChannelText).subscribe((channelText) => {
      console.log('Get Channel Text Subscription');
      console.log(channelText);
      this.textDesc = channelText;
    });
  }

  onAddCounter(): void {
    console.log(this.value);
    this.store.dispatch(customcounter({ counter: +this.value }));
  }

  onChangeName(): void {
    this.store.dispatch(customchanneltext({ text: 'Updated new text' }));
  }
}
