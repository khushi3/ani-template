import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class UsersService {

  constructor(private http: Http) {}

addNew(usercreds:any) {
  var headers = new Headers();
        var creds = 'name=' + usercreds.username + '&password=' + usercreds.password;
        var emailid = 'name=' + usercreds.username;
        
        headers.append('Content-Type', 'application/X-www-form-urlencoded');
        
        this.http.post('http://localhost:5555/adduser', creds, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
                this.http.post('http://localhost:5555/sendmail', emailid, {headers: headers}).subscribe((data) => {
            if(data.json().success) {
              console.log('Sent successfully');
            }
         })
       }
    })
  }        
}