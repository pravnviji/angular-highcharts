import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  map,
  Observable,
  pluck,
  throwError,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  public serviceUrl: string = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&interval=5min&apikey=LJ8HN2GDU76V4C8M&symbol=`;
  public chartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public chartData$: Observable<any[]> = this.chartSubject.asObservable();

  constructor(private http: HttpClient) {}

  getStockData(stockName: string): Observable<any[]> {
    console.log('********* getStockData *************');
    /* return this.http.get('./assets/mock.json').pipe(
      pluck('Time Series (5min)'),
      map((result) => this.mapStockData(result) as any),
      catchError((err) => this.handleError(err))
    );*/
    return this.http.get(this.serviceUrl + stockName).pipe(
      pluck('Time Series (5min)'),
      map((result) => this.mapStockData(result) as any),
      catchError((err) => this.handleError(err))
    );
  }

  mapStockData(data: any) {
    console.log('********* mapStockData *************');
    console.log(data);
    console.log(data);
    let formatChartData: Array<any> = [];
    let yAxisData: Array<any> = [];
    let xAxisData: Array<any> = [];
    console.log(Object.values(data));
    let stockData = Object.values(data);
    let stockKeys = Object.keys(data);
    let chartData: any;
    for (chartData of stockData) {
      console.log(chartData);
      yAxisData.push(parseFloat(chartData['1. open']));
    }
    for (let keys of stockKeys) {
      console.log('---- Stock keys ----');
      console.log(keys);
      xAxisData.push(new Date(keys));
    }
    console.log('Stock keys');
    console.log(xAxisData);
    formatChartData.push({ xaxisData: stockKeys, yaxisData: yAxisData });
    console.log(formatChartData);
    this.chartSubject.next(formatChartData);
    return formatChartData;
  }

  handleError(error: any) {
    console.log('Error');
    console.log(error);
    return throwError(() => error);
  }
}
