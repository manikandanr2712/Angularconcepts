import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products!: any;

  img = ['../../assets/array/concat.PNG','../../assets/array/filter.PNG','../../assets/array/flat.PNG','../../assets/array/flatmap.PNG','../../assets/array/map.PNG', '../../assets/array/slice.PNG','../../assets/array/splice.PNG','../../assets/array/unshift.PNG','../../assets/array/shift.PNG','../../assets/array/some.PNG','../../assets/array/sort.PNG','../../assets/array/reduce.PNG','../../assets/array/reduceright.PNG','../../assets/array/push.PNG','../../assets/array/pop.PNG', '../../assets/array/every.PNG','../../assets/array/fill.PNG','../../assets/array/enteries.PNG','../../assets/array/find.PNG',  ]
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/db.json").subscribe(data =>{
      this.products = data;
      this.products = this.products.map((e:any,i:any) =>({...e,'imageUrl': this.img.map((p:any,i:any) => p)[i]}))
  })
  }

}
