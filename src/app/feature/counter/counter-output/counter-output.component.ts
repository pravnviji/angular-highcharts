import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from '../../store/counter-selector';
import { TCounterState } from '../../store/state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  constructor(private store: Store<TCounterState>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((counter) => {
      console.log('Get Counter Subscription');
      console.log(counter);
      this.counter = counter;
    });
  }
}
