import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';



@Component({
  selector: 'finup-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
/**
 * Container for one block of information e.g. a chart or a table
 */
export class StatisticsComponent {
  @Input() title = 'Hello World';
}
