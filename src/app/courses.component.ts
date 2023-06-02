import {Component} from '@angular/core'

import {CoursesService } from './course/courses.service';

@Component( {
    selector: 'courses',
    template: `<h2>{{title}}</h2>
                <img [src]= imageURL/>
               <button class="btn btn-primary">Save</button>
              `,

})
export class CoursesComponent{
 title="List of courses";
 courses;
 imageURL= "https://picsum.photos/200/300"
 constructor(service:CoursesService){
    this.courses=service.getCourses();
    
 }
}