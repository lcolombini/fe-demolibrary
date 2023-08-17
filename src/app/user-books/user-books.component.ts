import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserClient } from '../clients/user.client';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/book';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

    books:Book[] = []
    username:any = ""
    displayedColumns: string[] = ['author', 'title', 'readingsNumber','details'];

    public dataSource: MatTableDataSource<Book>;
    public loading$ = new Subject<boolean>();

    constructor(
        private authenticationService: AuthenticationService,
        private bookService:BookService,
        private userClient: UserClient,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.loading$.next(true);
        const name = this.authenticationService.getUserName()
        const userId = this.authenticationService.getUserId()
        this.getBookList(userId);
        this.username = name;
        this.bookService.selectedBook$.subscribe((value) => {
            this.bookService.selectedBook$= value;
        })
    }

    logout(): void {
        this.authenticationService.logout();
    }

    public onSubmit() {
        this.logout()
    }

    public getBookList(userId: any): void {

        try {
            this.userClient.bookList(userId).subscribe((res) => {
                const parsed = JSON.stringify(res)
                this.books = JSON.parse(parsed)["user"]["Books"] as Book[]
                this.dataSource = new MatTableDataSource<Book>(this.books);

            });
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    public onBookSelected(book:any) {
        this.bookService.setBook(book)
        this.router.navigate(['/book/details'])
    }
}