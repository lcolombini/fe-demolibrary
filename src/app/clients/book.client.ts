import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root',
})
export class BookClient {
    constructor(private http: HttpClient) {
    }

    public read(bookId: number, userId: number): Observable<any> {
        return this.http.post('/books/increaseReadings', { bookId:bookId, userId:userId }, { responseType: 'text' });
    }

    public remove(bookId: number, userId: number): Observable<any> {
        return this.http.post('/books/removeFromCatalog', { bookId: bookId, userId: userId }, { responseType: 'text' });
    }
}