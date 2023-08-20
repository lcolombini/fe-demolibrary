import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


  @Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    constructor(private http: HttpClient) {
     }

    public login(email: string): Observable<string> {
        return this.http.post('/api/v1/users/login', { email: email }, {responseType: 'text'});
    }
}