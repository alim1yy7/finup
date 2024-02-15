import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChartComponent } from './chart/chart.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ChartComponent],
  selector: 'finup-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
}
