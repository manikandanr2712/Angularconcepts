import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

   kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
  reformattedArray: any;
  
  constructor() { }

  ngOnInit(): void {
    this.reformattedArray = this.kvArray.map(({ key, value }) => ({ [key]: value }));
    console.log("",this.reformattedArray)
  }

}
