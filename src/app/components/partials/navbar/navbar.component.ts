import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userIsAuthenticated = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.userData.subscribe(user => {
      this.userIsAuthenticated = user
      console.log('is authenticated', this.userIsAuthenticated)
    })
  }

  signOut() {
    this.authService.logout()
  }

}
