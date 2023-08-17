import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

    bookList:any[] = []
    constructor(
        private authenticationService: AuthenticationService,
        private bookService:BookService
    ) { }

    ngOnInit(): void { 
        const userId = this.authenticationService.getUserId()
        this.bookList = this.bookService.bookList(userId);
        console.log("LISTA: " + JSON.stringify(this.bookList))
    }

    logout(): void {
        this.authenticationService.logout();
    }

    public onSubmit() {
        this.logout()
    }
}
