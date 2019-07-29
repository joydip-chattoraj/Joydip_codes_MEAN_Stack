import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {contact} from './contact';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContacts():Observable<contact[]>
    {
      return this.http.get<contact[]>('http://localhost:3000/api/contacts');
    }  


}
