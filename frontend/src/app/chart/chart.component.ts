import { Chart, registerables } from 'chart.js';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartData } from '@finup/types';

import { ApiService } from '../shared/api.service';

@Component({
  selector: 'finup-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  chartRawData!: ChartData[];
  chart: any;
  constructor(private apiSvc: ApiService) {}
  ngOnInit(): void {
    this.apiSvc.getAllChartData().subscribe((data: any) => {
      this.chartRawData = data;
      console.log(this.chartRawData);
      this.createChart();
    });
    Chart.register(...registerables);
  }

  createChart() {
    const dates = this.chartRawData.map((chartRawData: ChartData) =>
      new Date(chartRawData.date).toLocaleTimeString('de-DE')
    );
    const amount = this.chartRawData.map(
      (chartRawData: ChartData) => chartRawData.amount
    );
    const canvas: any = document.getElementById('chart');
    const ctx = canvas.getContext('2d');
    //TODO: global variable for chart manipulation
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Amount',
            data: amount,
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 600,
          },
        },
      },
    });
  }
}
