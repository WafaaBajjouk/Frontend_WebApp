import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as fileSaver from 'file-saver';
import { Produit } from '../produit';
import { AchatServiceService } from './achat-service.service';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {

  public achats: Produit[];
  public editAchat: Produit;
  public deleteAchat: Produit;

  constructor(private achatService: AchatServiceService) { }
  ngOnInit() {
    this.getAchats();
  }


  public getAchats(): void {
    this.achatService.getAchats().subscribe(
      (response: Produit[]) => {
        this.achats = response;
        console.log(this.achats);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public onAddAchat(addForm: NgForm): void {
    document.getElementById('add-achat-form')!.click();
    this.achatService.addAchat(addForm.value).subscribe(
      (response: Produit) => {
        console.log(response);
        this.getAchats();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public UpdateAchat(achat: Produit): void {
    this.achatService.updateAchat(achat).subscribe(
      (response: Produit) => {
        console.log(response);
        this.getAchats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public DeleteAchat(id: string): void {
    this.achatService.deleteAchat(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getAchats();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  public searchAchats(key: string): void {
    console.log(key);
    const results: Produit[] = [];
    for (const achat of this.achats) {
      if (
         achat.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || achat.price.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || achat.info.toLowerCase().indexOf(key.toLowerCase()) !== -1
    ) {
        results.push(achat);
      }
    }
    this.achats = results;
    if (results.length === 0 || !key) {
      this.getAchats();
    }
  }


  public OpenModal(achat: Produit, mode: string): void {
    const cont = document.getElementById('main')!;
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addAchatModal');
    }
    if (mode === 'edit') {
      this.editAchat = achat;
      button.setAttribute('data-target', '#updateAchatModal');
    }
    if (mode === 'delete') {
      this.deleteAchat = achat;
      button.setAttribute('data-target', '#deleteModal');
    }
    cont.appendChild(button);
    button.click();
  }


  public download() {
   //this.fileService.downloadFile().subscribe(response => {
		this.achatService.downloadFile().subscribe((response: any) => { //when you use stricter type checking
			let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
			const url = window.URL.createObjectURL(blob);
			//window.open(url);
			//window.location.href = response.url;
			fileSaver.saveAs(blob, 'produits.pdf');
		//}), error => console.log('Error downloading the file'),
		}), (error: any) => console.log('Error downloading the file'), //when you use stricter type checking
                 () => console.info('File downloaded successfully');
  }


}
