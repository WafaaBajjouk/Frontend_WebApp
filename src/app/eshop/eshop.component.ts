import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Produit } from '../produit';
import { EshopserviceService } from './eshopservice.service';

@Component({
  selector: 'app-eshop',
  templateUrl: './eshop.component.html',
  styleUrls: ['./eshop.component.css']
})
export class EshopComponent implements OnInit {

  public achats: Produit[];
  public editAchat: Produit;
  public deleteAchat: Produit;

  constructor(private Eshopservice: EshopserviceService) { }
  ngOnInit() {
    this.getEshop();
  }


  public getEshop(): void {
    this.Eshopservice.getEshop().subscribe(
      (response: Produit[]) => {
        this.achats = response;
        console.log(this.achats);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

}
