import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrieren',
  templateUrl: './registrieren.page.html',
  styleUrls: ['./registrieren.page.scss'],
})
export class RegistrierenPage implements OnInit{
  dataFromService:any="";
  public username: string;
  public password:string;
  public name_pruefer :string;
  public strasse:string;
  public postleitzahl:number;
  public telefon :number;
  public telefax:number;
  public email:string;
  public herstelle_von_messgeraet:string;
  public messgeraet_typ:string;
  

 passwordToggleIcon='eye';
  showPassword: boolean=false;
  dataTosend ={
    firmen_name:null,
    name_pruefer:null,
    strasse:null,
    postleitzahl:null,
    telefon:null,
    telefax:null,
    email:null,
    herstelle_von_messgeraet:null,
    messgeraet_typ:null,
    passwort:null
   };





private signUpFormGroup: FormGroup;



 constructor(public navCtrl: NavController,
  public userService: UserService,
  public httpclient: HttpClient,
  private formBuilder: FormBuilder) { 
    this.signUpFormGroup = this.formBuilder.group({
      	//name: new FormControl('', Validators.required),
      firmenName: new FormControl('', Validators.required),
      namePruefer:new FormControl('', Validators.required),
      strasse:new FormControl('', Validators.required),
      postleitzahl:new FormControl('', Validators.required),
      telefon:new FormControl('', Validators.required),
      telefax:new FormControl('', Validators.required),
      email:new FormControl('', Validators.required),
      herstelleVonMessgeraet:new FormControl('', Validators.required),
      messgeraetTyp:new FormControl('', Validators.required),
      passwort:new FormControl('', Validators.required),
    })
  }
    
  ngOnInit() {
  }

   togglePassword():void{

this.showPassword=!this.showPassword;
}

private mapFormData(formData){
  let ret: any = {};

  ret.firmen_name = formData.firmenName;
  ret.name_pruefer = formData.namePruefer;
  ret.strasse = formData.strasse;
  ret.postleitzahl = formData.postleitzahl;
  ret.telefon = formData.telefon;
  ret.telefax = formData.telefax;
  ret.email = formData.email;
  ret.hersteller_von_messgeraet = formData.herstelleVonMessgeraet;
  ret.messgeraet_typ = formData.messgeraetTyp;
  ret.passwort = formData.passwort;

  return ret;

}

Signupdata(){
let formData = this.mapFormData(this.signUpFormGroup.value);
  console.log(formData);
  
  this.userService.Signupdata(formData).subscribe((dataReturnFromService)=>{
    this.dataFromService=JSON.stringify(dataReturnFromService);

  this.navCtrl.navigateForward("/startseite");
});
}
}


