import { Component, EventEmitter, Input, Optional, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.scss'],
  viewProviders: [
    { provide: ControlContainer, useFactory: ControlContainer, deps: [[new Optional(), NgForm]] }
]
})
export class RegisterButtonComponent {
  @Input() title: string = "";
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter;

  public onClickButton(): void {
    this.onClick.emit();
  }
}
