import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

menus=[
  {titre:'Home', url:'/menu/home', icon:'home'},
  {titre:'Meteo', url:'/menu/meteo', icon:'snow'},
  {titre:'Gallery', url:'/menu/gallery', icon:'school'},
  {titre:'Locations', url:'/menu/locations', icon:'sync'},
  {titre:'developers', url:'/menu/developers', icon:'code-working-outline'},
  {titre:'Logout', url:'/login', icon:'log-out'},
  {titre:'Exit', url:'/login', icon:'power'}
]

  constructor( private router:Router, private auth:AuthenticationService) { }

  ngOnInit() {
  }

  onMenuAction(m){
    if(m.titre === 'Logout'){
      this.auth.logout();
    }else if(m.titre === 'Exit'){
      this.auth.logout();
      navigator['app'].exitApp();
    }else{
      this.router.navigateByUrl(m.url);
    }
  }

}
