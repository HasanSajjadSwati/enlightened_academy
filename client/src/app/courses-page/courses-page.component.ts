import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent {
  @Input() courseBackground:any;
  @Input() courseDescription:any;
  @Input() courseName:any;
  @Input() courseFee:any;

}
