import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../shared/model/lessons.service';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'app-lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  lesson: Lesson;

  constructor(
    private route: ActivatedRoute, 
    private lessonsService: LessonsService) { }

  ngOnInit() {
    const lessonUrl = this.route.snapshot.params['id'];

    const lesson$ = this.lessonsService.findLessonByUrl(lessonUrl);

    lesson$.subscribe(lesson => this.lesson = lesson);
  }

}
