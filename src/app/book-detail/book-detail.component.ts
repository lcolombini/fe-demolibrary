import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';
import { BookClient } from '../clients/book.client';
import { Router } from '@angular/router';

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
        private bookClient: BookClient,
        private router: Router
    ){}
    ngOnInit(): void {
        this.book = this.bookService.getBook()
    }

    public actionRead(book:any)
    {
        const bookToRead = book as Book
        const userId = this.authenticationService.getUserId()

        try {
            this.bookClient.read(bookToRead.id, Number(userId)).subscribe((res) => {
                alert("Book Readed!");
                this.router.navigate(['/'])
            });
        } catch (error) {
            throw error
        }
    }

    public actionRemove(book:any)
    {
        const bookToRead = book as Book
        const userId = this.authenticationService.getUserId()
        try {
            this.bookClient.remove(bookToRead.id, Number(userId)).subscribe((res) => {
                alert("Book Removed! You will no longer be able to add more reads to this book ;-(");
                this.router.navigate(['/'])
            });
        } catch (error) {
            throw error
        }
    }

}
