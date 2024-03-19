import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getAllUsersService(){
    return this.http.get("http://localhost:8081/users/getAll")
  }

  createUserService(dataUser : any){
    return this.http.post("http://localhost:8081/users/addUser" , dataUser)
  }

  updateUserService(newDataUser : any) {
    return this.http.put("http://localhost:8081/users/updateUser" , newDataUser)
  }



  deleteUserService(id:any){
    return this.http.delete("http://localhost:8081/users/deleteUser/"+id)
  }
}
