import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-input-output',
  templateUrl: './demo-input-output.component.html',
  styleUrl: './demo-input-output.component.scss'
})
export class DemoInputOutputComponent {

  studentsFromParent: string[] = ["Bilal", "Kévin", "Louis"];

  receiveStudentName(studentName: string) {
    this.studentsFromParent.push(studentName);
  }

}
