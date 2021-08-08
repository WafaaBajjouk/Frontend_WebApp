import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Commande } from '../commande';
import {ValiderserviceService} from './validerservice.service'
@Component({
  selector: 'app-valider',
  templateUrl: './valider.component.html',
  styleUrls: ['./valider.component.css']
})
export class ValiderComponent implements OnInit {

  public commandes: Commande[];
  public editCommande: Commande;
  public deleteCommande: Commande;

  constructor(private ValiderserviceService: ValiderserviceService) { }
  ngOnInit() {
    this.getCommandes();
  }
  public getCommandes(): void {
    this.ValiderserviceService.getCommandes().subscribe(
      (response: Commande[]) => {
        this.commandes = response;
        console.log(this.commandes);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddCommande(addForm: NgForm): void {
    document.getElementById('add-commande-form')!.click();
    this.ValiderserviceService.addCommande(addForm.value).subscribe(
      (response: Commande) => {
        console.log(response);
        this.getCommandes();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }
  public UpdateCommande(commande: Commande): void {
    this.ValiderserviceService.updateCommande(commande).subscribe(
      (response: Commande) => {
        console.log(response);
        this.getCommandes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public DeleteCommande(id: string): void {
    this.ValiderserviceService.deleteCommande(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getCommandes();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
 public searchCommandes(key: string): void {
    console.log(key);
    const results: Commande[] = [];
    for (const commande of this.commandes) {
      if (
        commande.id.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || commande.Qty.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || commande.price.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
        results.push(commande);
      }
    }
    this.commandes = results;
    if (results.length === 0 || !key) {
      this.getCommandes();
    }
  }
  public OpenModal(commande: Commande, mode: string): void {
    const cont = document.getElementById('main')!;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCommandeModal');
    }
    if (mode === 'edit') {
      this.editCommande= commande;
      button.setAttribute('data-target', '#updateCommandeModal');
    }
    if (mode === 'delete') {
      this.deleteCommande = commande;
      button.setAttribute('data-target', '#deleteModal');
    }
    cont.appendChild(button);
    button.click();
  }



}
