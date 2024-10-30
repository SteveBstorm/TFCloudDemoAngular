import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrl: './child-output.component.scss'
})
export class ChildOutputComponent {

  @Output() studentNameEvent: EventEmitter<string> = new EventEmitter<string>();

  studentName: string = "";

  onEmit() {
    this.studentNameEvent.emit(this.studentName);
  }

}
