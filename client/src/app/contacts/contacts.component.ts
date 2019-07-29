import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {contact} from '../contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']  
})
export class ContactsComponent implements OnInit {
contacts:contact[];
contact:contact;
first_name:String;
last_name:String;
phone:String;
  constructor(private contactService:ContactService) {}
 //constructor(){}
  ngOnInit() {
   this.contactService.getContacts()
    .subscribe(data =>       
      {
        //debugger;
        this.contacts = data;        
      });      
  }

}
