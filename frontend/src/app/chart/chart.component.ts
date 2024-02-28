import { Chart, registerables } from 'chart.js';

import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from '@finup/types';

import { ApiService } from '../shared/api.service';
import { MathService } from '../shared/math.service';

@Component({
  selector: 'finup-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  @Input() chartTitle = 'default';
  chartRawData!: ChartData[];
  chart!: Chart;
  constructor(private apiSvc: ApiService, private mathSvc: MathService) {}
  ngOnInit(): void {
    this.apiSvc.getAllChartData().subscribe((data: any) => {
      this.chartRawData = data;
      console.log(this.chartRawData);
      this.createChart();
      // console.log(this.getMaxVal());
      console.log(this.getAverage());
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
    const canvas: any = document.getElementById(this.chartTitle);
    const ctx = canvas.getContext('2d');
    //TODO: global variable for chart manipulation

    this.chart = new Chart(ctx, {
      type: 'line',

      data: {
        labels: dates,
        datasets: [
          {
            label: 'Amount',
            data: amount,
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            tension: 0.05,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            max: this.getMaxVal() + this.getMaxVal() * 0.1,
          },
        },
      },
    });
  }
  getAverage(): number {
    return this.mathSvc.getAverage(
      this.chartRawData.map((el) => {
        return el.amount;
      })
    );
  }

  getMaxVal(): number {
    return this.mathSvc.getMax(
      this.chartRawData.map((el) => {
        return el.amount;
      })
    );
  }
  getMinVal(): number {
    return this.mathSvc.getMin(
      this.chartRawData.map((el) => {
        return el.amount;
      })
    );
  }
}
