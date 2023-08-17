import { Injectable } from '@angular/core';
import { UserClient } from '../clients/user.client';

@Injectable({
  providedIn: 'root'
})
export class BookService {

    constructor(
      private userClient: UserClient
    ) { }

    public bookList(userId:any):any{
        try{
        this.userClient.bookList(userId).subscribe((res) => {
            const parsed = JSON.stringify(res)
            const bookList = JSON.parse(parsed)["user"]["Books"]
            return bookList
        });
    }catch(error){
        console.log(error)
        throw error
    }
    }
}
