import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IonInput, NavController, NavParams, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UserService } from '../api/user.service';
//import {RepoManager} from '../../Classes/RepoManager'
import { PopoverController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  dataFromService:any="";
  public username: string;
  public password:string;
 
  
  constructor(public alertCtrl: AlertController,public navParams:NavParams, public popoverController : PopoverController, public modalController: ModalController, public navCtrl: NavController,public userService:UserService,public httpclient:HttpClient)  { 

   
  }
  ngOnInit() {

  }

  validation_messages = {
    'username': [
        { type: 'required', message: 'Username is required.' },
        { type: 'minlength', message: 'Username must be at least 5 characters long.' },
        { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
        { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
        { type: 'validUsername', message: 'Your username has already been taken.' }
      ],
      'name': [
        { type: 'required', message: 'Name is required.' }
      ],
    
  
    }
  
  /*getLoginData(): Observable<any>{
    return this.http.get('./json/login.json')
      .map((result: Response) => result.json())
      .catch(this.getError);
  }*/
 

  async DismissclickRegistrieren() {
    await this.popoverController.dismiss();
    
    this.navCtrl.navigateForward("/registrieren");
  }

  async DismissclickPasswortVergessen() {
    await this.popoverController.dismiss();
    
    this.navCtrl.navigateForward("/passwort-vergessen");
  }

  async DismissClickbackButton() {
    await this.popoverController.dismiss();
    
    this.navCtrl.navigateForward("/startseite");
  /*  var dataTosend ={firmen_name:this.username,passwort:this.password};
    this.userService.Savedata(dataTosend).subscribe((dataReturnFromService)=>{
      this.dataFromService=JSON.stringify(dataReturnFromService);
      
     
      console.log(this.dataFromService);

    });*/

      }

      async alertMessage(message)
      {
        const alert = await this.alertCtrl.create({ 
          header: 'Alert', 
          subHeader: 'New Alert Message', 
          message: message, 
          buttons: ['OK'] 
          }); 
          await alert.present(); 
          //const result = await alert.onDidDismiss();
      }

    /*  async LoginData(){
        var dataTosend ={firmen_name:this.username,passwort:this.password};
        this.userService.LoginData(dataTosend);
     
       // this.sleep(3000); //1 ms while data being gathered
     
         if(this.userService.loggedIn)
         {
           await this.popoverController.dismiss();
           this.navCtrl.navigateForward("/"+this.navParams.get('NextPath'));
         }
         else{
     
         }
     
       }
     */
  async LoginData(){
   var dataTosend ={firmen_name:this.username,passwort:this.password};
   var stringData = JSON.stringify(dataTosend);
   
    await this.alertMessage("Daten werden gesendet "+stringData);
  
   await this.userService.LoginData(dataTosend);

  // this.sleep(3000); //1 ms while data being gathered

    if(this.userService.loggedIn)
    {
      await this.popoverController.dismiss();
      this.navCtrl.navigateForward("/"+this.navParams.get('NextPath'));
    }
   

  }
  /*
   sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  */
}


  /*private repoManager : RepoManager;
  username : string = null;
  password : string  = null;
  LogMessage : string;

  //, private repoManager: RepoManager)
  constructor(public navCtrl: NavController)  { 
    this.repoManager = RepoManager.instance;
  }

  ngOnInit() {
    this.LogMessage = "";
  }
  startseite(){
  
    if(this.username == null || this.username.trim().length == 0 || 
      this.password == null || this.password.trim().length < 6)
      {
        this.LogMessage = "Benutzername muss angegeben werden und/oder Passwort mindestens 6 Ziffer sein";
        return ;
      }
     this.repoManager.LoggIn(this.username, this.password);
     if(this.repoManager.loggedIn)
     this.navCtrl.navigateForward("/startseite");
     else  this.LogMessage = "Passwort oder Benutzername falsch";

  }

}*/
