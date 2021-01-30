import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../api/user.service';
//import {RepoManager} from '../../Classes/RepoManager'
import { PopoverController } from '@ionic/angular';
import { IonInput, NavController, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-passwort-vergessen',
  templateUrl: './passwort-vergessen.page.html',
  styleUrls: ['./passwort-vergessen.page.scss'],
})
export class PasswortVergessenPage implements OnInit {

  constructor(public popoverController : PopoverController ,  public navCtrl: NavController) { }

  ngOnInit() {
  }


  
  async Dismissclick() {
    await this.popoverController.dismiss();
    
    this.navCtrl.navigateForward("/startseite");
  }
}
