import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private storage:Storage) { }

  public login(username:string, password:string):boolean{
    return (username === 'admin' && password === '1234');
  }
  public logout(){
    this.storage.clear();
  }
}
