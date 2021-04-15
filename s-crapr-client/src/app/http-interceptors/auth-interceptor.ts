import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const sanitizedRequest = req.clone();
    if (sanitizedRequest?.body && this.authService.currentUserValue) {
      sanitizedRequest.body['userId'] = String(this.authService.currentUserValue.id);
    }
    return next.handle(sanitizedRequest);
  }
}
