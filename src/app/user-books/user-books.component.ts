import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.css']
})
export class UserBooksComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void { }

    logout(): void {
        this.authenticationService.logout();
    }
}