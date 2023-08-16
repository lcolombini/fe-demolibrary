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

    public login(email: string): Observable<string> {
        return this.http.post('/users/login', { email: email }, {responseType: 'text',});
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