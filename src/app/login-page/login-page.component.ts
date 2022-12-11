import { Component, OnInit } from '@angular/core';
import * as angular from 'angular';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: string;
  password: string;
  
  
  
  constructor() { }

  ngOnInit(): void {
    
  }

  loginUser() {
    if(this.username === 'Admin' && this.password === '12345') {
      console.log('wellf dsop');
      
    }
  }

}
