import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './../produit';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EshopserviceService {

private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getEshop(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiServerUrl}/products`);
  }



}
