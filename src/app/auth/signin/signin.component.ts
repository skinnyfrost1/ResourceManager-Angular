import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validator, Validators} from '@angular/forms'


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  
  constructor(private authService:AuthService,private fb:FormBuilder) { }
  loginForm: FormGroup;
  password:string;
  username:string;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required],
    })
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }

}
