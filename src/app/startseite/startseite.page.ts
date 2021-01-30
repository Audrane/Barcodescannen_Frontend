import { Component, OnInit } from '@angular/core';
import { ModalController, NavController} from  '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.page.html',
  styleUrls: ['./startseite.page.scss'],
})
export class StartseitePage implements OnInit {

  constructor(public userService:UserService, public navController: NavController, private modalController : ModalController , private popoverController : PopoverController) { }

  ngOnInit() {
  }


 async loginSeite(nextPath){
  
  /*const modalCtrl = await this.modalController.create({
    component: LoginPage
   
  });
 return await modalCtrl.present();*/
  if(!this.userService.loggedIn)
  {
    const popover = await this.popoverController.create({
      component: LoginPage,
      componentProps:{
        NextPath : nextPath
      }/*,
      event: ev,
      translucent: true,
      backdropDismiss: true*/
    
    });
      return await popover.present();
  }
  else 
  {
    this.navController.navigateForward("/"+nextPath);
  }
 }

}
