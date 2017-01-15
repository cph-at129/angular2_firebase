import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home screen';

  constructor(private angularFire: AngularFire) {
    // const courses: FirebaseListObservable<any> = angularFire.database.list('courses');

    // courses.subscribe(console.log);

    // const course = angularFire.database.object('courses/-KaXx6kCU6cBvfXcRMZj');
    // course.subscribe(console.log);
  }
}
