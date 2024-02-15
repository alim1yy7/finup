import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChartComponent } from './chart/chart.component';

@Component({
  standalone: true,
  imports: [RouterModule, ChartComponent],
  selector: 'finup-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
