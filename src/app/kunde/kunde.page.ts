import { Component, OnInit } from '@angular/core';
import { IonInput, NavController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { UserService } from '../api/user.service';


@Component({
  selector: 'app-kunde',
  templateUrl: './kunde.page.html',
  styleUrls: ['./kunde.page.scss'],
})
export class KundePage implements OnInit {
static counter : number = 0;
 
  constructor(public navCtrl: NavController, public popoverController: PopoverController, public userservice : UserService) {
  
    this.setCountUser();
   }

  ngOnInit() {
  }

   public data :string ;
 
 async test(){
 
 await this.popoverController.dismiss();
      this.navCtrl.navigateForward("/startseite");
  }

  formularAbfrage(){
    //await this.popoverController.dismiss();
    this.navCtrl.navigateForward("/kundenformular");
  }


  setCountUser(){
    this.userservice.countUsers().subscribe((counter)=>{
      console.log(counter);
      KundePage.counter = Number(counter);
    });
    console.log( KundePage.counter);
  this.data  = KundePage.counter.toString();
  }


 
  }




