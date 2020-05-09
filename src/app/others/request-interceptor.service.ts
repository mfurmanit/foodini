import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '~/assets/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.includes(environment.apiUrl))
            request = request.clone({url: request.url + `${RequestInterceptor.sign(request.url)}apiKey=${environment.apiKey}`});

        return next.handle(request);
    }

    private static sign(url: string): string {
        return url.includes('?') ? '&' : '?';
    }
}
