import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categorie } from '../models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private httpClient:HttpClient) { }

  save(data:Categorie){
   return this.httpClient.post<Categorie>(environment.server_url+'/categories',data)
  }

  update(data:Categorie){
    return this.httpClient.put<Categorie>(environment.server_url+'/categories',data)
   }

   delete(data:number){
    return this.httpClient.delete<Categorie>(environment.server_url+'/categories/'+data)
   }

   getAll(){
    return this.httpClient.get<Categorie[]>(environment.server_url+'/categories')
   }

   get(data:number){
    return this.httpClient.get<Categorie>(environment.server_url+'/categories/'+data)
   }
}
