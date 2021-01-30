import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IonInput, NavController, NavParams } from '@ionic/angular';
import { Observable } from 'rxjs';
import { UserService } from '../api/user.service';
import { PopoverController } from '@ionic/angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
//import { File} from '@ionic-native/file';
//import { Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: "app-barcodscannen",
  templateUrl: "./barcodscannen.page.html",
  styleUrls: ["./barcodscannen.page.scss"],
})
export class BarcodscannenPage implements OnInit {
  dataFromService:any="";
  imgURL;
  myphoto: any;
  orderBy:string;
  photos: any=[];
  //les donnees qui sont dans le input du html
  public barcodeScannen: any=null;
  public pruefung: any=null;
  public sichtpruefung: any=null;
  public geraeteArt: any=null;
  public schutzklasse: any=null;
  public heizkoerperVorhanden: any=null;
  public metall: any=null;
  public selv: any=null;
  public funktionsPruefung: any=null;
  public prjktNummer: any = null;
  public kdNummer: any = null;
  public kommentar: any=null;
  public image: any=null;
  public pruefungsort : any=null;
  public raumnummer: any=null;


  public barNr_isDisabled: boolean=false;
  public alterNr_isDisabled: boolean=false;
  public prjktNr_isDisabled: boolean=false;
  public kdNr_isDisabled: boolean=false;

  constructor(public barcodeScanner: BarcodeScanner,public navCtrl: NavController,public popoverController : PopoverController,public userService:UserService,public httpclient:HttpClient)  { 
   
  }
  ngOnInit() {

  }

  async DismissClick() {
    await this.popoverController.dismiss();
      }

  barNrChanged(data) : void {
   var _data : string = <string> data;
   this.alterNr_isDisabled = _data.trim().length>0;
  }
  alterNrChanged(data) : void {
    var _data : string = <string> data;
    this.barNr_isDisabled = _data.trim().length>0;
  }
  prjktNrChanged(data) : void {
    var _data : string = <string> data;
    this.kdNr_isDisabled = _data.trim().length>0;
   }
   kdNrChanged(data) : void {
     var _data : string = <string> data;
     this.prjktNr_isDisabled = _data.trim().length>0;
   }

  sendData(){
 //database-->ngmodel
    var data: FormData = new FormData();
    var dataToSend= {
      firmen_name : this.userService.username,
      token : this.userService.token,
      barcodenummer: this.barcodeScannen,
      erste_wiederholungspruefung: this.pruefung,
      sichtPruefung: this.sichtpruefung,
       geraetArt: this.geraeteArt,
       schutzklasse: this.schutzklasse,
      heizkoerperVorhanden: this.heizkoerperVorhanden,
      selv_pelv: this.selv,
      funktionsPruefung: this.funktionsPruefung,
      kommentarFeld: this.kommentar,
      projektNummer: this.prjktNummer,
      kundenNummer : this.kdNummer,
      beruehbaresMetal: this.metall,
      raumNummer: this.raumnummer,
      pruefungsOrt: this.pruefungsort,
   
     };
   
   var jsondData= JSON.stringify(dataToSend);
    data.append("data",jsondData);
    data.append('image', this.image, this.image.name);
    this.userService.sendData(data).subscribe((dataReturnFromService)=>{
      console.log(JSON.stringify(dataReturnFromService));
      this.navCtrl.navigateForward("/startseite"); 
     
      
      });
      console.log("erfolg 1");
    //  this.navCtrl.navigateForward("/startseite"); 
console.log("erfolg 2");
}
   // });
 
  selectedFile(event) {

    this.image = event.target.files[0];
  }

 /* onClick() {
    const formData = new FormData();
    formData.append("image", this.image);
  }
  */

 
 takePicture(){
  this.barcodeScanner.scan().then(barcodeData => {
    if(!barcodeData.cancelled)
    this.barcodeScannen = barcodeData.text;
    //console.log('Barcode data', barcodeData);
   }).catch(err => {
       console.log('Error', err);
   });
 /* const options : CameraOptions={
    quality: 100,
    mediaType: this.camera.MediaType.PICTURE,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG

  }
  this.camera.getPicture(options).then((ImageData)=>{
    this.myphoto = 'data:image/jpeg;base64' +ImageData;
  }, (err)=>{

  });*/
  }
}


 /*this.camera.getPicture().then((ImageData)=>{
   let filename = ImageData.substring(ImageData.lastIndexOf('/')+1);
   let path= ImageData.substring(0,ImageData.lastIndexOf('/')+1);
   this.file.readAsDataURL(path,filename).then((base64data)=>{
     this.photos.push(base64data);
   })
 })

}*/
 /*getCamera() {
  this.camera.getPicture({
  sourceType: this.camera.PictureSourceType.CAMERA,
  destinationType: this.camera.DestinationType.FILE_URI
}).then((res) => {
  this.imgURL = res;
}).catch(e=> {
  console.log(e)
})
  } 
  
  getGallery(){

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI
    }).then((res) => {
      this.imgURL = 'data:image/jpeg:base64' +res;
    }).catch(e=> {
      console.log(e)
    })
  }*/



 

  

