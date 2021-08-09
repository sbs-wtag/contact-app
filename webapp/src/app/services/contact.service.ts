import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';
import { environment as env } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ContactService {
    constructor(private http: HttpClient) { }
    
    public async getAll(): Promise<Array<Contact>> {
        try {
            return await this.http.get<Array<Contact>>(`${env.host}/contacts`).toPromise();
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    public async save(contact: Contact): Promise<Contact> {
        try {
            return await this.http.post<Contact>(`${env.host}/contacts`, contact).toPromise();
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    public async delete(contact: Contact): Promise<void> {
        try {
            return await this.http.delete<void>(`${env.host}/contacts/${contact.id}`).toPromise();
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}