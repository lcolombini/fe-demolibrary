import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class UserClient {
    constructor(private http: HttpClient) {
    }

    public bookList(userId: string): Observable<any> {
        return this.http.get('/users/'+userId+'/books');
    }
}