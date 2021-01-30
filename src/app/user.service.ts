/*import {Injectable} from  '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class Userservice{
    constructor(public http :HttpClient){

    }

    Savedata(dataTosend){
        var url ="http://localhost/dguv-v3-api/login";
        return this.http.post(url,dataTosend,{headers:new HttpHeaders({"content-Type": "application/json"})});
    }
}*/