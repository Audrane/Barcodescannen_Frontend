
/*export class RepoManager {
  private static _instance: RepoManager = null;
  private static _token : string = null;
  private static _username : string = null;
  private apiUrl :string = "http://localhost/dguv-v3-api";


  public get  loggedIn():boolean
  {
      return this.username != null && this.username.length >0 &&  this.token != null && this.token.trim().length>10;
  }
  public get token():string 
  {
      return RepoManager._token;
  }

  public get username():string 
  {
      return RepoManager._username;
  }
  public static get instance(): RepoManager
  {
    if(RepoManager._instance == null) RepoManager._instance = new RepoManager();
    return RepoManager._instance;
  }
  private constructor(){
  }


  public  LoggIn(username :string , password: string): void
  {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', "application/json");
    myHeaders.append('Accept', "application/json");
    myHeaders.append('X-Custom-Header', 'ProcessThisImmediately');
    fetch(this.apiUrl+"/login",
    {
      headers: myHeaders,
        method: "OPTIONS",
      
        body:  JSON.stringify({firmen_name : username, passwort : password})
    })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      RepoManager._token = json.token;
      RepoManager._username = json.firmenname;
       console.log(JSON.stringify(json)); // The json object is here
    })
    .catch((err) => {
      
    });
  }
  
}*/