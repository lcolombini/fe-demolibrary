import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class BookService {

  private book$ = new BehaviorSubject<any>({})
  selectedBook$ = this.book$.asObservable();

  constructor() { }

  setBook(book:any)
  {
    this.book$.next(book)
    console.log(this.book$.value)
  }

}
