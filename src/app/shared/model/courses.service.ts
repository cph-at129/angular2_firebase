import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { AngularFireDatabase } from 'angularfire2';

import { Observable } from 'rxjs/Rx';
import { Lesson } from './lesson';

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]> {
    return this.db.list('courses')
      .map(Course.fromJsonArray);
  }

  findLessonsForCourse(courseUrl: string): Observable<Lesson[]>{
    
    console.log(courseUrl);
    const course$ = this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
    .do(console.log)

    course$.subscribe();
    
    return Observable.of([]);
  }

}
