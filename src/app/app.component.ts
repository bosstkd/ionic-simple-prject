import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private storage:Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.login()
    });
  }
  private login() {
    if(this.loadUser()){
      this.router.navigateByUrl('/menu/home');
    }else{
      this.router.navigateByUrl('/login');
    }
    
  }

  loadUser():boolean{
    this.storage.get('token').then(data=>{
      if(data === 'azerty'){
        return true;
      }
    })
    return false;
  }
}
