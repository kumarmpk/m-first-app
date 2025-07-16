import { Component, input, Output, 
  EventEmitter, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, 
  FormControl, Validators, AbstractControl, 
  FormArray} from '@angular/forms';
import { Vehicle } from '../vehicle';

function validate_VIN(control:AbstractControl) {
  const banned = ["I", "O", "Q"]
  if (banned.some(str => control.value.includes(str))) {
    return {
      error: "Must not contain I, O or Q"
    }
  } else {
    return null //All good
  }
}

@Component({
  selector: 'app-vehicle-form-reactive',
  imports: [ReactiveFormsModule],
  templateUrl: './vehicle-form-reactive.component.html',
  styleUrl: './vehicle-form-reactive.component.css'
})
export class VehicleFormReactiveComponent implements OnInit {
  
  vehicleForm !: FormGroup;

  vehicle = input<Vehicle>(new Vehicle( "", 0, "", "", 0, 0, false, [] ));

  @Output("on-submit")
  emitter = new EventEmitter;

  ngOnInit(): void {
    this.vehicleForm = new FormGroup({
      VIN : new FormControl( 
        this.vehicle().VIN, [validate_VIN,
          Validators.required, Validators.minLength(3)]
      ),
      year : new FormControl(
        this.vehicle().year, [Validators.required, 
          Validators.min(1990), Validators.max(2025)]
      ),
      make : new FormControl(
        this.vehicle().make, [Validators.required]
      ),
      model : new FormControl(
        this.vehicle().model, [Validators.required]
      ),
      mileage : new FormControl(
        this.vehicle().mileage, [Validators.required]
      ),
      price : new FormControl(
        this.vehicle().price, [Validators.required, Validators.min(100)]
      ),
      featured : new FormControl(
        this.vehicle().featured, [Validators.required]
      ),
    })
  }

  handleSubmit() {
    const input = this.vehicleForm.value
    const v = new Vehicle(
      input.VIN,
      input.year,
      input.make,
      input.model,
      input.mileage,
      input.price,
      input.featured == "" ? false : input.featured,
      []
    )
    this.emitter.emit(v)
  }

 

}
