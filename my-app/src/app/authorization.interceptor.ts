import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from './app.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public appService: AppService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
    //  //   let currentUser = this.authenticationService.currentUserValue;
    //     if (currentUser && currentUser.token) {
    //         request = request.clone({
    //             setHeaders: { 
    //                 Authorization: `Bearer ${currentUser.token}`
    //             }
    //         });
    //     }

    
      request = request.clone({
                     setHeaders: { 
                        'Content-Type':  'application/json',
                         'Authorization':  this.appService.loginToken
                     }
                 });
      

        return next.handle(request);
    }
}