import { Component } from '@angular/core';
import {Student} from './student/student.model';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students: Student[] = [
      {name: 'Luan', isJedi: true, temple: 'Coruscant'},
      {name: 'Agda', isJedi: true, temple: 'Coruscant'},
      {name: 'Lucas', isJedi: false},
      {name: 'Rafael', isJedi: false},
      {name: 'Cecilia', isJedi: false},
  ];

}
