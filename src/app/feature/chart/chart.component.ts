import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ChartService } from '..';
import * as Highcharts from 'highcharts';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  public highcharts = Highcharts;
  public xAxisData: any[] = [];
  public yAxisData: any = [];
  chartOptions!: Highcharts.Options;

  public stockName!: string;
  public chartData$: Observable<any> = this.chartService.chartData$;
  constructor(
    private activatedRoute: ActivatedRoute,
    private chartService: ChartService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.stockName = this.activatedRoute.snapshot.paramMap.get(
      'stockname'
    ) as string;
    console.log(this.stockName);
    this.chartService.getStockData(this.stockName).subscribe((data) => {
      for (let chartData of data) {
        this.yAxisData.push(chartData.yaxisData);
        this.xAxisData.push(chartData.xaxisData);
      }
      this.chartOptions = {
        chart: {
          type: 'line',
        },
        title: {
          text: `Intraday 5 mins data of ${this.stockName}`,
        },
        xAxis: {
          categories: this.xAxisData,
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Companies',
          },
        },
        series: [
          {
            type: 'line',
            data: this.yAxisData,
          },
        ],
      };
      console.log('xAxis' + this.xAxisData);
      console.log('yAxis' + this.yAxisData);
    });
  }

  gohome() {
    this.location.back();
  }
}
