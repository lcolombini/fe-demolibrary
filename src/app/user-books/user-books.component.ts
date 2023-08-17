import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { UserClient } from '../clients/user.client';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

    books:BookInterface[] = []

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
                console.log("TIPO RITORNATO: " + typeof this.books)

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
