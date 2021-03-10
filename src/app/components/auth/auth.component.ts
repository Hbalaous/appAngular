import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  switch = true;

  constructor(private authService: AuthService) { 
    this.authForm = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null)
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    let data = {
      ...this.authForm.value,
      returnSecureToken: true
    }

    if(this.switch) {

      this.authService.signUp(data)
          .subscribe(response => console.log('signUp', response))
    }
    else{
      this.authService.signIn(data)
          .subscribe((response: any) => localStorage.setItem('token', response.idToken))
    }
  }

}
