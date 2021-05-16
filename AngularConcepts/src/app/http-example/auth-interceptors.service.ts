import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptors implements HttpInterceptor{
  /*next is a function which will forward the request because the interceptor will
    basically run code before your request leaves your app, so before it really sent and right before the response is forwarded to subscribe,
    so it steps into that request flow and next is a function you need to call to let the request continue its journey */

  /*Now this intercept method allows us to run code right before the request leaves our application. */

  intercept(req: HttpRequest<any>, next: HttpHandler){
    //if(req.url)

    /*If you want to restrict the requests for which this executes, you have to do that here in the interceptor. You got that request object and that request object has information like the URL to which it sent.
    So if you know you don't want TO send this to a certain URL, then you can use the URL here in and scheck and compare it and so on, so you can control that all in here in the interceptor. */
    
     console.log('Auth Interceptors: Request on the way');
    // console.log(req.url);
    /*next is a function or actually an object with an important method that will
    allow us to let the request continue its journey, to be precise
    that's the handle method which you have to call to which you should pass that request object and by calling this, you let the request continue and you should actually return the result to really let it continue. */

    /*If you don't return next.handle() and pass the request, then the request will not continue and therefore your app will basically break, you definitely have to return this here. */
    //return next.handle(req); ////Handle gives us an observable


    /*Inside of an interceptor, you can not only log data, you can also modify the request object. However, the request object itself is immutable.

    So, if you want to modify the request, you have to create a new one, like modified request, where you call request.clone and inside of clone, you pass in
    a Javascript object where you now can overwrite all the core things. You could set a new URL here or you could add new headers, if you want to keep the old headers by the way, then you simply do that by(req.headers.append()) */

    const modifiedReq = req.clone({
      headers: req.headers.append('Auth', 'xyz') //Handle gives us an observable
    });

    return next.handle(modifiedReq).pipe(
      /*You're not limited to interacting with the request in an interceptor, you can also interact with the response.
      You do this by adding something here to handle because handle actually gives you an observable, which I guess makes sense because in the end, your request is an observable to which you subscribe in the end. 
      
      You could add the map operator here, to change the response for example.
      you use tap which you need to import from rxjs/operators to simply look into the response. Now here in tap, you get an event and that's important, you always get events here.

      Remember I showed you that you can observe different kinds of responses with the Angular HttpClient, no matter what you chose there, here in the interceptor,
      you always get an event so that you have the most granular access to the response you could possibly have.

      So, here we can check if event type is response then we can perfom our operations.
      */
      tap(event => {
        //console.log(event);
        if(event.type === HttpEventType.Response){
          // console.log('Response arrived, body data: ');
          // console.log(event.body);
        }
      })
    );
  }
}