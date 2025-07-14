import { Component } from '@angular/core';
// import './experiments'
import { TapCounterComponent } from './tap-counter/tap-counter.component';

@Component({
  selector: 'app-root',
  imports: [TapCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Angular Developer';
}
