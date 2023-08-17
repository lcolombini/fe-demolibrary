import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable()
export class BookService {

  private book$ = new BehaviorSubject<any>({})
  selectedBook$ = this.book$.asObservable();

  constructor() { }

  setBook(book:Book)
  {
    this.book$.next(book)
  }
  getBook():Book
  {
    return this.book$.value as Book
  }
}
