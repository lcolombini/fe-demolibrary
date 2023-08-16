import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


  @Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    constructor(private http: HttpClient) {
     }

    public login(email: string): Observable<any> {
        const httpHeaders = new HttpHeaders({
            'Access-Control-Allow-Origin': "*",
            "Content-Type": "application/json",
            "Access-Control-Expose-Headers": "Content-Length"}); 
        console.log("INTESTATIONE: " + JSON.stringify(httpHeaders))
        return this.http.post(environment.apiUrl + '/users/login', { email: email }, {
            headers: httpHeaders,
            observe: 'response'
        });
    }

    public register(
        email: string,
    ): Observable<string> {
        return this.http.post(
            environment.apiUrl + '/user/register',
            {
                email: email,
            },
            { responseType: 'text' }
        );
    }
}