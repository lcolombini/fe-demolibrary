import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { UserClient } from '../clients/user.client';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

    books:BookInterface[] = []
    displayedColumns: string[] = ['author', 'title', 'readingsNumber',];

    public dataSource: MatTableDataSource<BookInterface>;

    constructor(
        private authenticationService: AuthenticationService,
        private userClient: UserClient
    ) { }

    ngOnInit(): void { 
        const userId = this.authenticationService.getUserId()
        this.getBookList(userId);
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
                this.books = JSON.parse(parsed)["user"]["Books"] as BookInterface[]
                this.dataSource = new MatTableDataSource<BookInterface>(this.books);

            });
        } catch (error) {
            console.log(error)
            throw error
        }
    }
}

export interface BookInterface {
    id: number,
    title: string,
    author: string,
    isbn: string,
    plot: string,
    readingsNumber: number,
    dateAdded: string,
    cancellationDate: string,
    createdAt: string,
    updatedAt: string,
    userId: number
}
