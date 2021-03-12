import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData = new BehaviorSubject<any>(null);

  apiUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCF__i6TqaKywvAcT56yRkyXKHK-Reh170"
  
  constructor(private http: HttpClient, private router: Router) { }

  signUp(credential: {email: string, password: string, returnSecureToken: boolean}) {
    return this.http.post(this.apiUrl, credential)
  }

  signIn(credential: {email: string, password: string, returnSecureToken: boolean}) {
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCF__i6TqaKywvAcT56yRkyXKHK-Reh170", credential)
               .pipe(
                 tap(data => {
                   let myData = {
                     user: {
                       ...data
                     },
                     isAuthenticated: true
                    }
                    this.userData.next(myData)
                    console.log('telio : ', myData)
                    localStorage.setItem('userData', JSON.stringify(myData))
                  })
               )
  }

  autoLogin() {
    let localUser = JSON.parse(localStorage.getItem('userData'))
    console.log('behivior: ', localUser)
    if(localUser) {
      this.userData.next(localUser)
    }
  }

  logout() {
    this.userData.next(null)
    localStorage.removeItem('userData')
    this.router.navigate(['/auth'])
  }

}
