import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SaverouteService {
  returnroute:any;
  prevUrl: string='';
  constructor(private router:Router){

    // const url = this.router.url;
    // this.prevUrl = url;
  }
  
}
