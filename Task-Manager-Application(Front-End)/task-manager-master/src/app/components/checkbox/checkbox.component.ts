import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() id!: number | undefined;
  @Input() checked: boolean | undefined = false;
  @Output() click = new EventEmitter;

  public onClick(): void {
    this.click.emit(this.id);
  }
}
