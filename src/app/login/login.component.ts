import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm!: FormGroup;
    
    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            email: new FormControl('', Validators.required),
        });
    }

    public onSubmit() {
        this.authenticationService.login(
            this.loginForm.get('email')!.value,
        );
    }
}
