import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../commande';

@Injectable({
  providedIn: 'root'
})
export class ValiderserviceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }



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
