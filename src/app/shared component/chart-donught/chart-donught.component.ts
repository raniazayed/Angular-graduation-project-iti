import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-donught',
  templateUrl: './chart-donught.component.html',
  styleUrls: ['./chart-donught.component.scss']
})
export class ChartDonughtComponent implements OnInit {
  data: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };

  constructor() { 
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  ngOnInit() {
  }

}
