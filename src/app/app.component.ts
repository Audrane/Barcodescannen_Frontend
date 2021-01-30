import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {LoginPage} from './login/login.page';
import {HttpClient} from '@angular/common/http';
import { File } from '@ionic-native/file';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  rootPage:any=LoginPage;



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http :HttpClient,

  ) {
    
 }
  

  username : string

  password: string
  resul: string


  startseite(){
    let url ="http://localhost/dguv-v3-api/login"
    this.http.post(url,{
      username:this.username,
      password:this.password
    }).toPromise().then((data:any)=>{
      console.log(data)
      console.log(JSON.stringify(data.json.username))
      this.resul= JSON.stringify(data.json)
    })

  }
}
