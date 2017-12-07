import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Http, Response, Request, Headers, RequestMethod, RequestOptions, RequestOptionsArgs} from '@angular/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm : FormGroup;
  authenticated: boolean;

  constructor(private router:Router,fb: FormBuilder, public http: Http){
    // if(localStorage.getItem('jwt')){
    //   this.authenticated = true;
    //   this.profile = JSON.parse(localStorage.getItem('profile'));
    // }
    this.loginForm = fb.group({
      'email' : [null, Validators.required],
      'password': [null, Validators.required],
    })
  }

  ngOnInit() {
  }
  submitForm(value: any){
    console.log('email -> ' + value.email + ' | password -> ' + value.password );
    let form = {
      'userName' : value.email,
      'password' : value.password
    }

    // let headersObj  = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' 
    // ,'Access-Control-Allow-Origin': 'http://localhost:4200/'
    // ,'Access-Control-Allow-Methods':'POST,GET,PUT,DELETE,OPTIONS'
    // , 'Access-Control-Allow-Headers': 'Authorization,Lang' });

    // let requestArg: RequestOptionsArgs = {  method: "POST", headers: headersObj  };
    // let options = new RequestOptions( requestArg );

    // this.http.post('http://localhost:8080/demo/login', form, options).subscribe(
    this.http.post('http://localhost:8080/demo/login', form).subscribe(
      (res:any)=>{
        console.log('response -> ' + res);
        console.log('response status -> ' + res.status);
        console.log('response ok -> ' + res.ok);
        console.log('headers -> ' + res.headers);
        console.log('authorization -> ' + res.headers.get('Authorization'));        
        console.log('headers -> ' + res.headers.get('cache-control'));
        if(res.ok){
          if(res.headers.get('Authorization')){
            localStorage.setItem('jwt',  res.headers.get('Authorization'));
            // this.getUserInfo(data);
            this.router.navigate(['customer']);
          }
          else{

          }
        }
        else{
          
        }
      }
    )
  }
}
