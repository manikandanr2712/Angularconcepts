import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  loginForm = this.fb.group({
    username: [null],
    password: [null]
  });
  CONDITION = true;
  constructor(private fb: FormBuilder,private router: Router) {}

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }

}
