import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Client } from '../client';
import { ClientServiceService } from './client-service.service';
@Component({
  selector: 'app-vente',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public clients: Client[];
  public editClient: Client;
  public deleteClient: Client;

  constructor(private ClientserviceService: ClientServiceService) { }
  ngOnInit() {
    this.getClients();
  }


  public getClients(): void {
    this.ClientserviceService.getClients().subscribe(
      (response: Client[]) => {
        this.clients = response;
        console.log(this.clients);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddClient(addForm: NgForm): void {
    document.getElementById('add-client-form')!.click();
    this.ClientserviceService.addClient(addForm.value).subscribe(
      (response: Client) => {
        console.log(response);
        this.getClients();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public UpdateClient(client: Client): void {
    this.ClientserviceService.updateClient(client).subscribe(
      (response: Client) => {
        console.log(response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public DeleteClient(id: string): void {
    this.ClientserviceService.deleteClient(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getClients();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchClients(key: string): void {
    console.log(key);
    const results: Client[] = [];
    for (const client of this.clients) {
      if (
         client.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || client.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || client.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
        results.push(client);
      }
    }
    this.clients = results;
    if (results.length === 0 || !key) {
      this.getClients();
    }
  }


  public OpenModal(client: Client, mode: string): void {
    const cont = document.getElementById('main')!;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addClientModal');
    }
    if (mode === 'edit') {
      this.editClient = client;
      button.setAttribute('data-target', '#updateClientModal');
    }
    if (mode === 'delete') {
      this.deleteClient = client;
      button.setAttribute('data-target', '#deleteModal');
    }
    cont.appendChild(button);
    button.click();
  }


}
