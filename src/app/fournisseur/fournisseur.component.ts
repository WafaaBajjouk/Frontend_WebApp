import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../fournisseur';
import {FournServiceService} from './fourn-service.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {

  public fournisseurs: Fournisseur[];
  public editFournisseur: Fournisseur;
  public deleteFournisseur: Fournisseur;

  constructor(private fournService: FournServiceService) { }
  ngOnInit() {
    this.getFournisseurs();
  }


  public getFournisseurs(): void {
    this.fournService.getFournisseurs().subscribe(
      (response: Fournisseur[]) => {
        this.fournisseurs = response;
        console.log(this.fournisseurs);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddFournisseur(addForm: NgForm): void {
    document.getElementById('add-fournisseur-form')!.click();
    this.fournService.addFournisseur(addForm.value).subscribe(
      (response: Fournisseur) => {
        console.log(response);
        this.getFournisseurs();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public UpdateFournisseur(employee: Fournisseur): void {
    this.fournService.updateFournisseur(employee).subscribe(
      (response: Fournisseur) => {
        console.log(response);
        this.getFournisseurs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public DeleteFournisseur(id: string): void {
    this.fournService.deleteFournisseur(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getFournisseurs();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchFournisseurs(key: string): void {
    console.log(key);
    const results: Fournisseur[] = [];
    for (const fournisseur of this.fournisseurs) {
      if (
         fournisseur.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || fournisseur.societe.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || fournisseur.ville.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
        results.push(fournisseur);
      }
    }
    this.fournisseurs = results;
    if (results.length === 0 || !key) {
      this.getFournisseurs();
    }
  }


  public OpenModal(fournisseur: Fournisseur, mode: string): void {
    const cont = document.getElementById('main')!;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addFournisseurModal');
    }
    if (mode === 'edit') {
      this.editFournisseur = fournisseur;
      button.setAttribute('data-target', '#updateFournisseurModal');
    }
    if (mode === 'delete') {
      this.deleteFournisseur = fournisseur;
      button.setAttribute('data-target', '#deleteModal');
    }
    cont.appendChild(button);
    button.click();
  }


}
