import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class EmailInterceptor implements HttpInterceptor{

    constructor() {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req.clone({
            setHeaders: {
                Authorization : 'Bearer' + localStorage.getItem('token')
            }
        })
        return next.handle(req)
    }

    
}