import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';


@Injectable({
    providedIn: 'root',
})
export class UserClient {
    constructor(private http: HttpClient) {
    }

    public bookList(userId: string): Observable<any> {
        return this.http.get(environment.apiUrl+'/api/v1/users/'+userId+'/books');
    }
}