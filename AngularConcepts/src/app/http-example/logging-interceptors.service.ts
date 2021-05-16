import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorsService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler){
    console.log('Logging Interceptors:  Outgoing request');
    console.log(`Logging Interceptors url: ${req.url}`);
    //console.log(`Logging Interceptors Headers: ${req.headers}`);
    console.log('Logging Interceptors Headers:', req.headers);
    return next.handle(req).pipe(tap(event => {
      if(event.type === HttpEventType.Response){
        console.log('Logging Interceptors: Incoming request');
        console.log(`Logging Interceptors: ${event.body}`)
      }
    }));
  }
}