import { Component, OnInit, input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  imports: [],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.css'
})
export class PhotoGalleryComponent {
  
  // @Input("photos")
  // imageList: string[] = []

  imageList = input<string[]>([], {
    alias: 'photos'
  });
 
  @Output("on-navigate")
  emitter = new EventEmitter
 
  currentIndex = 0

  moveNext() {
    if (this.currentIndex < this.imageList().length- 1) {
      this.currentIndex += 1
      //Raise event with index as payload
      this.emitter.emit(this.currentIndex)
    }
  }

  movePrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1
      //Raise event with index as payload
      this.emitter.emit(this.currentIndex)
    }
  }

}
