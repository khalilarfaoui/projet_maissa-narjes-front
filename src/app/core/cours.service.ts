import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http : HttpClient) { }

  getAllCoursService(){
    return this.http.get("http://localhost:8081/cours/getAll")
  }

  createCoursService(dataCours : any){
    return this.http.post("http://localhost:8081/cours/addCours" , dataCours)
  }

  updateCoursService(newDataCours : any) {
    return this.http.put("http://localhost:8081/cours/updateCours" , newDataCours)
  }



  deleteCoursService(id:any){
    return this.http.delete("http://localhost:8081/cours/deleteCours/"+id)
  }
}