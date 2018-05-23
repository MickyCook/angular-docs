//Directives.
//There are 2 types of directives
//Structural: Modify the structure of the DOM
//use ngIf for large element trees
//ex:

<div *ngIf="courses.length > 0"></div>
//Attribute: Modify the attributes of DOM elements
<div *ngClass="boolean here"></div>

//if else statement
<div *ngIf="courses.length > 0; then coursesList else noCourses"></div>
<ng-template #coursesList>
    List of Courses
</ng-template>
<ng-template #noCourses>
    No Courses
</ng-template>