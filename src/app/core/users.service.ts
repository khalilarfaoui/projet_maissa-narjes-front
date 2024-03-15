import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  createUserService(dataUser : any){
    return this.http.post("http://localhost:8081/users/addUser" , dataUser)
  }

  getAllUsersService(){
    return this.http.get("http://localhost:8081/users/getAll")
  }
}
