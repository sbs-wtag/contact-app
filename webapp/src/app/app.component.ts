import { AfterViewInit, Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Contact } from './models/contact.model';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  contacts: Array<Contact> = [];
  modal: BsModalRef = {} as BsModalRef;
  fg: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl()
  });

  constructor(private contactService: ContactService, private modalService: BsModalService) {}

  ngAfterViewInit(): void {
    this.fetchData();
  }

  async fetchData(): Promise<void> {
    this.contacts = await this.contactService.getAll();
  }

  async save(contact: Contact): Promise<void> {
    const resp = await this.contactService.save(contact);
    this.contacts = this.contacts.filter((c: Contact) => c.id != resp.id);
    this.contacts.push(resp);
  }

  async delete(contact: Contact): Promise<void> {
    await this.contactService.delete(contact);
    this.contacts = this.contacts.filter((c: Contact) => c.id != contact.id);
  }

  newContactModal(template : TemplateRef<BsModalRef>): void {
    this.fg.reset();
    this.modal = this.modalService.show(template);
  }

 editContactModal(contact: Contact, template : TemplateRef<BsModalRef>): void {
    this.fg.patchValue({
      id: contact.id,
      name: contact.name,
      email: contact.email
    });
    this.modal = this.modalService.show(template);
  }

  onSubmit(): void {
    this.save({
      id: this.fg.get('id')?.value,
      name: this.fg.get('name')?.value,
      email: this.fg.get('email')?.value
    } as Contact);
    this.modal.hide();
  }

  deleteContact(contact: Contact): void {
    this.delete(contact);
  }
}