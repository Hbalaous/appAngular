import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCF__i6TqaKywvAcT56yRkyXKHK-Reh170"
  
  constructor(private http: HttpClient) { }

  signUp(credential: {email: string, password: string, returnSecureToken: boolean}) {
    return this.http.post(this.apiUrl, credential)
  }

  signIn(credential: {email: string, password: string, returnSecureToken: boolean}) {
    return this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCF__i6TqaKywvAcT56yRkyXKHK-Reh170", credential)
  }
}
