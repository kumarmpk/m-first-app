import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../vehicle';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';
// import { VehicleFormComponent } from '../vehicle-form/vehicle-form.component';
import { VehicleFormReactiveComponent } from '../vehicle-form-reactive/vehicle-form-reactive.component';
import {InventoryService} from '../inventory.service';

@Component({
  selector: 'app-dealer-inventory',
  imports: [
    CommonModule,
    PhotoGalleryComponent,
    // VehicleFormComponent
    VehicleFormReactiveComponent,
  ],
  templateUrl: './dealer-inventory.component.html',
  styleUrl: './dealer-inventory.component.css'
})

export class DealerInventoryComponent implements OnInit {

  originalInventory: Vehicle[];
  showHideDelete:boolean = false;

  vehicleToEdit: Vehicle | null = null;
  inventorySvc:InventoryService = inject(InventoryService);

  inventory:Vehicle[] = [ ];

  constructor(){
    this.originalInventory = this.inventory;
  }

  ngOnInit() : void{
    this.inventory = this.inventorySvc.getInventory();
  }

  deleteVehicle( car: Vehicle ){
    window.confirm();
    this.inventorySvc.deleteVehicle( car );
    this.inventory = this.inventorySvc.getInventory();
  }

  loadFullInventory(){
    this.inventory = this.originalInventory;     
  }

  handlePhotoNavigation(_photoIndex_:number, car:Vehicle) {
    if (_photoIndex_ == car.photos.length- 1) {
      alert("Come visit us in our showroom!")
    }
  }

  addVehicle( newVehicle : Vehicle ){
    this.inventorySvc.addVehicle( newVehicle );
    this.inventory = this.inventorySvc.getInventory();
  }

  beginEditing(v:Vehicle) {
    this.vehicleToEdit = v;
  }

  commitEdit(v:Vehicle) {
    this.inventorySvc.updateVehicle( this.vehicleToEdit!.VIN, v);
    this.inventory = this.inventorySvc.getInventory();
    this.vehicleToEdit = null;
  }

}