import { Component } from '@angular/core';

@Component({
  selector: 'app-tap-counter',
  imports: [],
  templateUrl: './tap-counter.component.html',
  styleUrl: './tap-counter.component.css'
})
export class TapCounterComponent {
  tapCounter : number = 0;

  handleClick(){
    this.tapCounter++;
  }
}
