import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  stockNames: string[] = ['MSFT', 'IBM', 'AAPL'];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getStockName(stock: string): void {
    this.router.navigate([`chart/${stock}`]);
  }
}
