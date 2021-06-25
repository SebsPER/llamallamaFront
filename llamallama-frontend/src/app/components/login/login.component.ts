import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginUserForm = this.fb.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    })
  }

  loginUser(){
    console.log(this.loginUserForm.get('usuario')?.value)
    console.log(this.loginUserForm.get('password')?.value)
  }

}
