import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  email = '';
  isAuthenticated = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userData.subscribe(data => {
      
      if(data) {
         let { user, isAuthenticated } = data
   
         let { email } = user;
         this.email = email;
         this.isAuthenticated = isAuthenticated
       }else {
        this.email = '';
        this.isAuthenticated = false
       }
    })
  }

  signOut() {
    this.authService.logout()
  }

}
