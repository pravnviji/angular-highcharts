import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FeatureRoutingModule } from './feature-routing.module';
import { StockComponent, ChartService } from '.';
import { ChartComponent } from './chart/chart.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CustomCounterComponent } from './counter/custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StockComponent,
    ChartComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule,
  ],
  providers: [ChartService],
})
export class FeatureModule {}
