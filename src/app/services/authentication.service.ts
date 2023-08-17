import { Injectable } from '@angular/core';
import { AuthenticationClient } from '../clients/authentication.client';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private userIdKey = 'userId';

    constructor(
        private authenticationClient: AuthenticationClient,
        private router: Router
    ) { }

    public login(email: string): void {
        this.authenticationClient.login(email).subscribe((res) => {
            const userId = (JSON.parse(res)['user']['id'])
            localStorage.setItem(this.userIdKey, userId);
            this.router.navigate(['/']);
        });
    }

    public logout() {
        localStorage.removeItem(this.userIdKey);
        this.router.navigate(['/login']);
    }

    public isLoggedIn(): boolean {
        let userId = localStorage.getItem(this.userIdKey);
        return userId != null && userId.length > 0;
    }

    public getUserId(): string | null {
        return this.isLoggedIn() ? localStorage.getItem(this.userIdKey) : null;
    }
}
