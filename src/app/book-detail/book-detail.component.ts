import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';
import { BookClient } from '../clients/book.client';

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
        private bookClient: BookClient
    ){}
    ngOnInit(): void {
        this.book = this.bookService.getBook()
    }

    public actionRead(book:any)
    {
        console.log("Read action called!")
        const bookToRead = book as Book
        const userId = this.authenticationService.getUserId()

        try {
            this.bookClient.read(bookToRead.id, Number(userId)).subscribe((res) => {
                console.log(res)
            });
        } catch (error) {
            throw error
        }
    }

    public actionRemove(book:any)
    {
        console.log("Remove action called!")
        const bookToRead = book as Book
        const userId = this.authenticationService.getUserId()
        try {
            this.bookClient.remove(bookToRead.id, Number(userId)).subscribe((res) => {
                console.log(res)
            });
        } catch (error) {
            throw error
        }
    }

}
