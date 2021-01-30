import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static _token : string = null;
  private static _username : string = null;
  public get  loggedIn():boolean
  {
      return this.username != null && this.username.length >0 &&  this.token != null && this.token.trim().length>10;
  }
  public get token():string 
  {
      return UserService._token;
  }

  public get username():string 
  {
      return UserService._username;
  }
  
  constructor(public alertCtrl: AlertController,public http :HttpClient) { }
  
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
  /*Savedata(dataTosend):Observable <any>{


    var apiUrl ="http://test.ntb-entreprise.de";
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', "application/json");
    myHeaders.append('Accept', "application/json");
    myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
    fetch(apiUrl+"/login",
    {
      headers: myHeaders,
        method: "OPTIONS",
      
        body:  JSON.stringify(dataTosend)
    })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
     
       console.log(JSON.stringify(json)); // The json object is here
    })
    .catch((err) => {
      
    });
*/




 LoginData(dataTosend):void {

      this.alertMessage("Einloggdaten : \n"+JSON.stringify(dataTosend));
         var url ="http://api.dguv-pruefung.de/login";
          this.http.post(url,dataTosend,{
            headers:new HttpHeaders({
              "Content-Type": "application/json"}),
    }).subscribe(async(dataReturnFromService)=>{
     var toPrint =JSON.stringify(dataReturnFromService);
      await this.alertMessage("Antwort : \n"+JSON.stringify(toPrint));
      var obj = JSON.parse(toPrint);
      console.log(toPrint);
      
      UserService._username = obj.firmenname;
      UserService._token = obj.token;

    }, async(error)=>{
    await  this.alertMessage("Fehler Message: \n"+error.message);

    });
   // return this.loggedIn;
  }
  sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  Signupdata(dataTosend):Observable <any>{

      
    var url ="http://api.dguv-pruefung.de/signup";
return this.http.post(url,dataTosend,{
       headers:new HttpHeaders({"content-Type": "application/json"}),
})
}




/*postData(credentials, type){
  var url ="http://test.ntb-entreprise.de/barcodescan";
  return new Promise((resolve, reject) =>{
      let headers = new Headers();
      this.http.post(url+type, JSON.stringify(credentials), { headers: headers}).
      subscribe(res =>{
        resolve(res.json());
      }, (err) =>{
      reject(err);
  });
  
  });
  
  }
  */


sendData(dataToSend : FormData):Observable <any>{  
  var url ="http://api.dguv-pruefung.de/barcodescan";
  return this.http.post(url,dataToSend);
  
  }


  submit(dataTosend : FormData):Observable <any>{  
    var url ="http://api.dguv-pruefung.de/kundenuebersicht";
    return this.http.post(url,dataTosend);
    
    }

    senddata(dataToSend : FormData):Observable <any>{  
      var url ="http://api.dguv-pruefung.de/datenerfassen";
      return this.http.post(url,dataToSend);
      
      }
countUsers(): Observable<any> {
  const url =  "http://api.dguv-pruefung.de/kundenuebersicht";
  return this.http.get(url)

}
    
}


