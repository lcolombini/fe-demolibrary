import { Injectable } from '@angular/core';
import { AuthenticationClient } from '../clients/authentication.client';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private userIdKey = 'userId';
    private userNameKey = 'userName';

    constructor(
        private authenticationClient: AuthenticationClient,
        private router: Router
    ) { }

    public login(email: string): void {
        this.authenticationClient.login(email).subscribe((res) => {
            const userId = (JSON.parse(res)['user']['id'])
            const userName = (JSON.parse(res)['user']['firstName'])
            localStorage.setItem(this.userIdKey, userId);
            localStorage.setItem(this.userNameKey, userName);
            this.router.navigate(['/']);
        });
    }

    public logout() {
        sessionStorage.removeItem('book');
        sessionStorage.clear();
        localStorage.removeItem(this.userIdKey);
        localStorage.removeItem(this.userNameKey);
        this.router.navigate(['/login']);
    }

    public isLoggedIn(): boolean {
        let userId = localStorage.getItem(this.userIdKey);
        return userId != null && userId.length > 0;
    }

    public getUserId(): string | null {
        return this.isLoggedIn() ? localStorage.getItem(this.userIdKey) : null;
    }
    public getUserName(): string | null {
        return this.isLoggedIn() ? localStorage.getItem(this.userNameKey) : null;
    }
}
