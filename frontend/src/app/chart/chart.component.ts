import { registerables } from 'chart.js';
import Chart from 'chart.js/auto';

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input } from '@angular/core';
import { ITransaction } from '@finup/types';

import { ApiService } from '../shared/api.service';
import { MathService } from '../shared/math.service';

@Component({
  selector: 'finup-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements AfterViewInit {
  @Input() chartTitle = 'default';
  @Input() chartRawData!: ITransaction[];
  chart!: any;
  constructor(private apiSvc: ApiService, private mathSvc: MathService) {}
  ngAfterViewInit(): void {
    console.log(this.chartRawData);
    this.createChart();

    Chart.register(...registerables);
  }

  createChart() {
    const dates = this.chartRawData.map((chartRawData: ITransaction) =>
      new Date(chartRawData.date).toLocaleTimeString('de-DE')
    );
    const amount = this.chartRawData.map(
      (chartRawData: ITransaction) => chartRawData.amount
    );
    const canvas: any = document.getElementById(this.chartTitle);
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
            borderWidth: 2,
            tension: 0.05,
          },
        ],
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => {
                const label = this.chartRawData[tooltipItem.dataIndex].name;
                const value = tooltipItem.formattedValue;
                return `${label}: ${value}`;
              },
            },
          },
          legend: {
            labels: {
              font: {
                family: 'Nunito',
              },
            },
          },
        },
        responsive: true,
        scales: {
          y: {},
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
