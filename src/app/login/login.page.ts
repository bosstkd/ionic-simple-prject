import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private auth:AuthenticationService, private router:Router, private storage:Storage) { }

  ngOnInit() {
  }
  onLogin(value:any){
    if(this.auth.login(value.username, value.password)){
      this.router.navigateByUrl('menu/home');
      this.saveToken();
    }else{
      this.router.navigateByUrl('login');
    }
    
  }
  saveToken() {
    let token="azerty";
    this.storage.set('token', token);
  }
}
