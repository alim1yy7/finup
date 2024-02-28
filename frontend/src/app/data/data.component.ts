import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ChartComponent } from '../chart/chart.component';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'finup-data',
  standalone: true,
  imports: [CommonModule, StatisticsComponent, ChartComponent],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss',
})
export class DataComponent {}
