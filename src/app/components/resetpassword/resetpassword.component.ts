import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetPassword! : FormGroup ;
  submitted = false ;

  constructor(private formBuilder : FormBuilder , private userService : UserService) {}

  ngOnInit() {
    this.resetPassword = this.formBuilder.group({
    
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
}

get f() { return this.resetPassword.controls; }

reset() {
  this.submitted = true;
  if (this.resetPassword.valid) {
    console.log("resetPassword function is called",this.resetPassword.value);
    let data = {
    
      newPassword : this.resetPassword.value.password ,
      confirmPassword : this.resetPassword.value.confirmPassword
  }
  this.userService.resetPassword(data).subscribe((response:any)=>{
      console.log("response from backend", response);


})

}
}
}
