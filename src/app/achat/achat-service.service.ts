import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from './../produit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AchatServiceService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getAchats(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.apiServerUrl}/products`);
  }

  public addAchat(achat: Produit): Observable<Produit> {
    return this.http.post<Produit>(`${this.apiServerUrl}/addproduct`, achat);
  }

  public updateAchat(produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.apiServerUrl}/updateproduct/${produit.ref}`, produit);
  }

  public deleteAchat(achatId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteproduct/${achatId}`);
  }

  public downloadFile(): any {
		return this.http.get('http://localhost:8080/products/download', {responseType: 'blob'});
  }

}
