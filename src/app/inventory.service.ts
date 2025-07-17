import { Injectable, inject } from '@angular/core';
import { Vehicle } from './vehicle';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  httpClient = inject(HttpClient);
  private baseURL = "http://localhost:3000/vehicle";

  constructor() { }

  public getInventory() : Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(`${this.baseURL}`);
  }

  public addVehicle( v : Vehicle) : Observable<Object> {
    return this.httpClient.post<Object>( `${this.baseURL}`, v);
  }

  public updateVehicle(oldVIN:string, newVehicle:Vehicle) : Observable<Object> {
    return this.httpClient.put<Object>( `${this.baseURL}/${oldVIN}`, newVehicle );
  }
 
  public deleteVehicle(vehicleToDelete:Vehicle) : Observable<Object> {
    return this.httpClient.delete<Object>( `${this.baseURL}/${vehicleToDelete.VIN}` )
  }
}
