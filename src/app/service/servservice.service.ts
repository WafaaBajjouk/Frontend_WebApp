import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service} from './../service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServserviceService {

  private apiServerUrl = environment.apiBaseUrl;


  constructor(private http: HttpClient) { }

  public getServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiServerUrl}/services`);
  }

  public addService(service: Service): Observable<Service> {
    return this.http.post<Service>(`${this.apiServerUrl}/addservice`, service);
  }

  public updateService(service: Service): Observable<Service> {
    return this.http.put<Service>(`${this.apiServerUrl}/updateservice/${service.id}`, service);
  }

  public deleteService(serviceId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/deleteservice/${serviceId}`);
  }
}
