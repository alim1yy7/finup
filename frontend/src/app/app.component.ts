import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { StatisticsComponent } from './statistics/statistics.component';

@Component({
  standalone: true,
  imports: [RouterModule, ChartComponent, StatisticsComponent],
  selector: 'finup-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
