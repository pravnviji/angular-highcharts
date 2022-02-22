import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TCounterState } from '../../store/state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  constructor(private store: Store<{ counterStore: TCounterState }>) {}

  ngOnInit(): void {
    this.store.select('counterStore').subscribe((res: TCounterState) => {
      this.counter = res.counter;
    });
  }
}
