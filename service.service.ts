import { Injectable } from '@angular/core';
//import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
//import { map } from 'rxjs/operators';
import "rxjs/add/operator/map"
import "rxjs/Rx"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  post(arg0: string, create: any) {
    throw new Error("Method not implemented.");
  }
  put(arg0: string, forUPdate: any) {
    throw new Error("Method not implemented.");
  }
 
baseAPI='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/users'
loginn='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/authenticate'
addmovie='https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/add_movies'
fav='https://7tjr6gucuecute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/:name'
  public value;
  loc: any;

  constructor(private http: HttpClient) { }
  registerUser(values) {
    let body = {
      name: values.name,
      password: values.pass,
      confirmpassword: values.npass
    }
    return this.http.post(this.baseAPI, body).map(data  => {
     console.log("1", data)
   })
  }
  loginuser(values) {
    let body1 = {
      name: values.name,
      pass: values.pass
       }
    return this.http.post(this.loginn, body1).map(data => {
      localStorage.setItem("logindata",JSON.stringify(data))
     console.log("1", data )
   })
  }
  
  movies(value){
    let movies={
      id:'5d72272cc79df20007be6006',
      name:value.name,
      language:value.language,
      genre:value.genre
    }
    return this.http.post(this.addmovie,movies).map(data =>{
      console.log("1",data)
    })
  }
  moviealbum(){
    return this.http.get('https://7tjr6gucu2.execute-api.us-east-2.amazonaws.com/new/api/v1/favourite_album/').map(data =>{
      console.log("1",data)
    })
​
 } 
  
}
