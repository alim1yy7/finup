import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ICategory, ITransaction } from '@finup/types';

import { ChartComponent } from '../chart/chart.component';
import { ApiService } from '../shared/api.service';
import { StatisticsComponent } from '../statistics/statistics.component';

@Component({
  selector: 'finup-data',
  standalone: true,
  imports: [CommonModule, StatisticsComponent, ChartComponent],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss',
})
export class DataComponent implements OnInit {
  categories!: ICategory[];
  transactions!: ITransaction[];
  constructor(private apiSvc: ApiService) {}

  ngOnInit() {
    this.apiSvc.getAllCategories().subscribe((res: any) => {
      this.categories = res;
      console.log(res);
    });
  }
}
