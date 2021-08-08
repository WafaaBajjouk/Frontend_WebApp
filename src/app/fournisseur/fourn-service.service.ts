import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fournisseur} from './../fournisseur';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FournServiceService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getFournisseurs(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(`${this.apiServerUrl}/fournisseurs`);
  }

  public addFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.post<Fournisseur>(`${this.apiServerUrl}/addfournisseur`, fournisseur);
  }

  public updateFournisseur(fournisseur: Fournisseur): Observable<Fournisseur> {
    return this.http.put<Fournisseur>(`${this.apiServerUrl}/updatefournisseur/${fournisseur.id}`, fournisseur);
  }

  public deleteFournisseur(fournisseurId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deletefournisseur/${fournisseurId}`);
  }
}
