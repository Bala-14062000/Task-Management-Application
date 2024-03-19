import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent {
  @Input() id!: number | undefined;
  @Output() click = new EventEmitter;

  public onClick(): void {
    this.click.emit(this.id);
  }
}
