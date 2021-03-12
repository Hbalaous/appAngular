import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}


    intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.userData.pipe(
      take(1),
      exhaustMap((data) => {
        if (!data) {
          console.log('inside')
          return next.handle(req);
        }
        console.log('outside')
        let modifiedReq = req.clone({
          setHeaders: { 
              Authorization: `Bearer ${data.user.idToken}`
          }
      });
        return next.handle(modifiedReq);
      })
    );
  }




  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   return this.authService.userData.pipe(
  //     take(1),
  //     exhaustMap((data) => {
  //       if (!data) {
  //         console.log('inside')
  //         return next.handle(req);
  //       }
  //       console.log('outside')
  //       let modifiedReq = req.clone({
  //         params: req.params.append('auth', data.user.idToken),
  //       });
  //       return next.handle(modifiedReq);
  //     })
  //   );
  // }
}
