import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { UserService } from '../api/user.service';
@Component({
  selector: 'app-kundenformular',
  templateUrl: './kundenformular.page.html',
  styleUrls: ['./kundenformular.page.scss'],
})
export class KundenformularPage implements OnInit {
  profileForm = new FormGroup({
    firmenname: new FormControl(''),
    strasse: new FormControl(''),
    postleitzahl: new FormControl(''),
    projektnummer: new FormControl(''),
  });
  
  dataFromService: any="";
public firmenname: string;
public strasse: string;
public postleitzahl: number;
public projektnummer: number;
// die daten vom Backend gleich aufgeschrieben 
dataTosend = {
  firmenname: null,
  strasse:null,
  postleitzahl:null,
  projektnummer:null
};


private kundeFormGroup: FormGroup;

  constructor(public navCtrl: NavController,
     public userService: UserService,public httpclient: HttpClient,
    private formBuilder: FormBuilder) { 
      this.kundeFormGroup = this.formBuilder.group({
      	//name: new FormControl('', Validators.required),
        firmenname: new FormControl(this.userService.username, [Validators.required, Validators.maxLength(13)]),
        strasse: new FormControl('', Validators.required),
        postleitzahl: new FormControl('', Validators.required),
        projektnummer: new FormControl('', Validators.required),
      
    })
  }
  ngOnInit() {
  }

  private mapFormData(formData){
    let ret: any = {};
  
    ret.firmen_name = formData.firmenname;
    ret.projektnummer = formData.projektnummer;
    ret.strasse = formData.strasse;
    ret.postleitzahl = formData.postleitzahl;
    ret.token = this.userService.token;
    
  return ret;

}

isCorrect(input) {
return input != undefined && input!=null && input != "";
}

  submit(){
    
    let formData = this.mapFormData(this.kundeFormGroup.value);
 // console.log(formData);
  if(this.isCorrect(formData.firmen_name) && (this.isCorrect(formData.projektnummer))){
    this.userService.submit(formData).subscribe((dataReturnFromService)=>{
      console.log(JSON.stringify(dataReturnFromService));
      this.navCtrl.navigateForward("/kunde");
    });
  }

}

}
