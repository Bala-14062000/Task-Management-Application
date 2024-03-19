import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  @Output() valueChange = new EventEmitter;

  public onClick(): void {
    this.valueChange.emit();
  }
}
