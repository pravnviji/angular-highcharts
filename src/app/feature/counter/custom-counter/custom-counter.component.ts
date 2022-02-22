import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { customcounter } from '../../store/actions';
import { TCounterState } from '../../store/state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.scss'],
})
export class CustomCounterComponent implements OnInit {
  value!: number;
  textDesc!: string;
  constructor(private store: Store<{ counterStore: TCounterState }>) {}

  ngOnInit(): void {
    this.store.select('counterStore').subscribe((res: TCounterState) => {
      this.textDesc = res.text;
    });
  }

  onAddCounter(): void {
    console.log(this.value);
    this.store.dispatch(customcounter({ counter: +this.value }));
  }
}
