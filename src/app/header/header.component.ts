import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  @Output() onFeatureSeleted: EventEmitter<string> = new EventEmitter<string>();

  onClick(feature: string) {
    this.onFeatureSeleted.emit(feature);
  }

}