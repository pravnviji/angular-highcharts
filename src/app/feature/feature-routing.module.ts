import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent, ChartComponent } from '.';

const routes: Routes = [
  {
    path: '',
    component: StockComponent,
  },
  {
    path: 'chart/:stockname',
    component: ChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}
