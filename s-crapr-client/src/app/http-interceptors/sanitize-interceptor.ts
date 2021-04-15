import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class SanitizeInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const sanitizedRequest = req.clone();
    if (sanitizedRequest?.body) {
      Object.keys(sanitizedRequest.body).forEach(key => {
        if (typeof sanitizedRequest.body[key] !== 'boolean' && !sanitizedRequest.body[key])
          delete sanitizedRequest.body[key]
      });
    }
    return next.handle(sanitizedRequest);
  }
}
