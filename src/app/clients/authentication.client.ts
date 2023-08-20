import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';


  @Injectable({
    providedIn: 'root',
})
export class AuthenticationClient {
    constructor(private http: HttpClient) {
     }

    public login(email: string): Observable<string> {
        return this.http.post(environment.apiUrl + '/api/v1/users/login', { email: email }, {responseType: 'text'});
    }
}