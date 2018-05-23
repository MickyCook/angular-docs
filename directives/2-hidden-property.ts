//hidden property
//keep in mind hidden elements will still be monitored for changes by Angular
<div [hidden]="courses.length == 0">
    List of Courses
</div>
<div [hidden]="courses.length > 0">
    No Courses
</div>