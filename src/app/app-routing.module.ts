import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './helpers/auth.guard';
import { UserBooksComponent } from './user-books/user-books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
    { path: '', component: UserBooksComponent, canActivate: [AuthGuard], },
    { path: 'login',component: LoginComponent},
    { path: 'book/details', component:BookDetailComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
