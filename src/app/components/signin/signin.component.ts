import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  username! : FormGroup ;
  submitted = false ;

  requestUrl:string ="http:fundoonotes.incubation.bridgelabz.com/api/user/login ";


  constructor (private formBuilder :FormBuilder, private userService :UserService ,
    private router : Router) {}

  ngOnInit() {
    this.username =this.formBuilder.group({
      email: ['',[Validators.required,Validators.email]],
      password :['',[Validators.required,Validators.minLength(6)]]

    })
    
  }
  login(){
    if (this.username.valid) 
    {
      console.log("Login function called", this.username.value) ;
      let data = {
        email :this.username.value.email,
        password : this.username.value.password
  
      }
      this.userService.LoginService(data).subscribe((res:any)=>{
        console.log("response from the backend" ,res) ;
        // this.route.navigation 
        this.router.navigateByUrl('/home') ;
        localStorage.setItem ('token' , res.id) ;
        localStorage.setItem ('userId' , res.userId)

            }) 
    }

  }
 
 

}
