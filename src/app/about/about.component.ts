import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  cars = [
    {
      "color": "purple",
      "type": "minivan",
      "registration": new Date('2017-01-03'),
      "capacity": 7
    },
    {
      "color": "red",
      "type": "station wagon",
      "registration": new Date('2018-03-03'),
      "capacity": 5
    }
  ]
  carso: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.carso = this.cars.filter((e:any,i:any) => {
    return (e.capacity <= 5) ? e : ''
      
    });
    console.log(this.carso)
  }

  back() {
    this.router.navigate(['/dashboard']);
  }
}
