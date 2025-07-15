import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehicle } from '../vehicle';
import { PhotoGalleryComponent } from '../photo-gallery/photo-gallery.component';

@Component({
  selector: 'app-dealer-inventory',
  imports: [
    CommonModule,
    PhotoGalleryComponent
  ],
  templateUrl: './dealer-inventory.component.html',
  styleUrl: './dealer-inventory.component.css'
})

export class DealerInventoryComponent {

  originalInventory: Vehicle[];
  showHideDelete:boolean = false;

  constructor(){
    this.originalInventory = this.inventory;
  }

    inventory:Vehicle[] = [
        {
            VIN: "Y123",
            year: 2012,
            make: "HONDA",
            model: "Civic",
            mileage: 70000,
            price: 5900.00,
            featured: false,
            photos: [],
        },
        {
            VIN: "P1023",
            year: 2019,
            make: "BMW",
            model: "328i",
            mileage: 42000,
            price: 12000.00,
            featured: true,
            photos: ["/assets/b-1.png", "/assets/b-2.png", "/assets/b-3.png", "/assets/b-4.png"],
        },
        {
            VIN: "NM182",
            year: 2018,
            make: "KIA",
            model: "Niro",
            mileage: 31000,
            price: 7900.00,
            featured: false,
            photos: ["/assets/k-1.png", "/assets/k-2.png", "/assets/k-3.png"],
        },
        {
            VIN: "Y187",
            year: 2014,
            make: "HONDA",
            model: "Accord",
            mileage: 40000,
            price: 8900.00,
            featured: false,
            photos: [],
        },
    ]

    deleteVehicle( car: Vehicle ){
      window.confirm();
      this.inventory = this.inventory.filter(c => c.VIN != car.VIN)
    }

    loadFullInventory(){
      this.inventory = this.originalInventory;     
    }

    handlePhotoNavigation(_photoIndex_:number, car:Vehicle) {
      if (_photoIndex_ == car.photos.length- 1) {
      alert("Come visit us in our showroom!")
    }
 }
}