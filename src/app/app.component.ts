import { Component } from '@angular/core';
import { DealerInventoryComponent } from './dealer-inventory/dealer-inventory.component';

@Component({
  selector: 'app-root',
  imports: [DealerInventoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Angular Developer';
}
