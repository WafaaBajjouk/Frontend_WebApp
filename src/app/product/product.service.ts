import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Produit } from '../produit';
import { Commande } from '../commande';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiServerUrl = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  public getEshop(): Observable <Produit[]> {
    return this.http.get<Produit[]>(`${this.apiServerUrl}/products`);
  }

  public getCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.apiServerUrl}/commandes`);
  }

  public addCommande(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(`${this.apiServerUrl}/addcommande`, commande);
  }

  public updateCommande(commande: Commande): Observable<Commande> {
    return this.http.put<Commande>(`${this.apiServerUrl}/updatecommande/${commande.id}`, commande);
  }

  public deleteCommande(commandeId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deletecommande/${commandeId}`);
  }


}
