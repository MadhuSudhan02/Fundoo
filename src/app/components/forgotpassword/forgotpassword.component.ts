import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';


@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  forgotPassword! : FormGroup;
  submitted = false;


  constructor(private formBuilder : FormBuilder , private userService : UserService) {}

  ngOnInit() {
    this.forgotPassword = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });
}
forgot() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.forgotPassword.valid) {
      console.log("forgot function is called",this.forgotPassword.value);

      let data = {
        email : this.forgotPassword.value.email ,
    }
    this.userService.forgotPassword(data).subscribe((response:any)=>{
        console.log("response from backend", response);

})
}

}
}
