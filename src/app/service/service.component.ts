import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Service } from '../service';
import { ServserviceService } from './servservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public services: Service[];
  public editService: Service;
  public deleteService: Service;

  constructor(private Servservice: ServserviceService) { }
  ngOnInit() {
    this.getServices();
  }


  public getServices(): void {
    this.Servservice.getServices().subscribe(
      (response: Service[]) => {
        this.services = response;
        console.log(this.services);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddService(addForm: NgForm): void {
    document.getElementById('add-service-form')!.click();
    this.Servservice.addService(addForm.value).subscribe(
      (response: Service) => {
        console.log(response);
        this.getServices();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public UpdateService(service: Service): void {
    this.Servservice.updateService(service).subscribe(
      (response: Service) => {
        console.log(response);
        this.getServices();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public DeleteService(id: string): void {
    this.Servservice.deleteService(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getServices();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchServices(key: string): void {
    console.log(key);
    const results: Service[] = [];
    for (const service of this.services) {
      if (
         service.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || service.info.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || service.nomclient.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || service.nomresponsable.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
        results.push(service);
      }
    }
    this.services = results;
    if (results.length === 0 || !key) {
      this.getServices();
    }
  }


  public OpenModal(service: Service, mode: string): void {
    const cont = document.getElementById('main')!;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addServiceModal');
    }
    if (mode === 'edit') {
      this.editService = service;
      button.setAttribute('data-target', '#updateServiceModal');
    }
    if (mode === 'delete') {
      this.deleteService = service;
      button.setAttribute('data-target', '#deleteModal');
    }
    cont.appendChild(button);
    button.click();
  }

}
