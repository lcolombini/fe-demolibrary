import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{

    book:Book

    constructor(
        private authenticationService: AuthenticationService,
        private bookService: BookService,
    ){}
    ngOnInit(): void {
        this.book = this.bookService.getBook()
        console.log("LIBRO DOPO MODIFICA: " + JSON.stringify(this.book))
    }

}
