import { LoaderService } from './../loader/loader.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(public loader: LoaderService,private apiService: ApiService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loader.isLoading.next(true);

    return next.handle(req).pipe(
      finalize(
        () => {
          this.loader.isLoading.next(false);
        }
      )
    );
  }
}
