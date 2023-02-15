// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {
  registerForm! : FormGroup;
    submitted = false;


    constructor(private formBuilder: FormBuilder , private userService : UserService ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    register() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.valid) {
            console.log("register function is called",this.registerForm.value);
            let data = {
                firstName : this.registerForm.value.firstName ,
                lastName : this.registerForm.value.lastName ,
                email : this.registerForm.value.email ,
                password : this.registerForm.value.password ,
                service : 'advance'
            }
            this.userService.registration(data).subscribe((response:any)=>{
                console.log("response from backend", response);

        })
    }

}
}