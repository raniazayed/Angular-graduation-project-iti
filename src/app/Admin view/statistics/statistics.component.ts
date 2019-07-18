import { Component, OnInit } from '@angular/core';
import { StatisticsService } from 'src/app/services/statistics.service';
// import {chart} from "chart.js"
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
data :any;
  // statistics: { "totalCustomers": number; "totalFreelancers": number; "customersToFreelancers": number; "freelancersToCustomers": number; "services": { "serviceName": string; "totalFreelancers": number; }[]; };
  statistics:any;
  options: { title: { display: boolean; text: string; fontSize: number; }; legend: { position: string; }; };
  width: {};
  service: { labels: string[]; datasets: { label: string; backgroundColor: string; borderColor: string; data: number[]; }[]; };
  constructor(private staticService :StatisticsService) {
    // this.statistics={"totalCustomers":4.0,"totalFreelancers":2.0,"customersToFreelancers":0.6666667,"freelancersToCustomers":33.3333359,"services":[{"serviceName":"French","totalFreelancers":1},{"serviceName":"Dessert","totalFreelancers":5},{"serviceName":"photography","totalFreelancers":0}]};
  //   this.data = {
  //     labels: ['Total Customers','Total Freelancers'],
  //     datasets: [
  //         {
  //             data: [this.statistics.totalCustomers, this.statistics.totalFreelancers],
  //             backgroundColor: [
  //                 "#FF6384",
  //                 "#36A2EB",
  //                 "#FFCE56"
  //             ],
  //             hoverBackgroundColor: [
  //                 "#FF6384",
  //                 "#36A2EB",
  //                 "#FFCE56"
  //             ]
  //         }]    
  //     };
  //     this.options = {
  //       title: {
  //           display: true,
  //           text: 'My Title',
  //           fontSize: 16
  //       },
  //       legend: {
  //           position: 'bottom'
  //       }
  //   };
  //   this.width={
  //     width : 500
  //   }
  //   this.service = {
  //     labels: [this.statistics.services[0].serviceName, this.statistics.services[1].serviceName, this.statistics.services[2].serviceName],
  //     datasets: [
  //         {
  //             label: 'Total Freelancers',
  //             backgroundColor: '#42A5F5',
  //             borderColor: '#1E88E5',
  //             data: [this.statistics.services[0].totalFreelancers,this.statistics.services[1].totalFreelancers,this.statistics.services[2].totalFreelancers]
  //          }
      
  //     ]
  // }
}
  
   
  
  ngOnInit() {
  
    this.getStatistics()
    // this.getRecentRegisterdUsers()
    // this.staticService.getStatistics().subscribe(data=>{
    //   console.log(data);
    //   this.statistics = data;
    // }
    // );
    this.staticService.getRecentUsers().subscribe(
      a=>console.log(a)
    );

  }
  getStatistics()
  {
    this.staticService.getStatistics().subscribe(data=>{
      console.log(data);
      this.statistics = data;
      console.log(this.statistics)
    }
    );
 
  }

  // getRecentRegisterdUsers()
  // {
  //   this.staticService.getRecentUsers().subscribe(
  //     a=>console.log(a)
  //   );
  // }
}


