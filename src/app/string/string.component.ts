import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {
  products!: any;

  img = ['../../assets/string/at.PNG','../../assets/string/checkat.PNG','../../assets/string/charcode.PNG','../../assets/string/codepointat.PNG','../../assets/string/endswith.PNG', '../../assets/string/fromcharcode.PNG','../../assets/string/fromCodePoint.PNG','../../assets/string/includes.PNG','../../assets/string/indexof.PNG','../../assets/string/lastindexof.PNG','../../assets/string/match.PNG','../../assets/string/matchall.PNG','../../assets/string/padend.PNG','../../assets/string/padstart.PNG','../../assets/string/repeat.PNG', '../../assets/string/replace.PNG','../../assets/string/replaceall.PNG','../../assets/string/search.PNG','../../assets/string/slice.PNG','../../assets/string/split.PNG','../../assets/string/startswith.PNG','../../assets/string/subString.PNG','../../assets/string/tolowercase.PNG','../../assets/string/topupper.PNG','../../assets/string/trim.PNG','../../assets/string/trimend.PNG','../../assets/string/trimstart.PNG'  ]
  constructor(private httpClient: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.httpClient.get("assets/string.json").subscribe(data =>{
      this.products = data;
      this.products = this.products.map((e:any,i:any) =>({...e,'imageUrl': this.img.map((p:any,i:any) => p)[i]}))
  })
}
  back() {
    this.router.navigate(['/dashboard']);
  }
  
}