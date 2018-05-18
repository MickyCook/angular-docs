<favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange()"></favorite>
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }
    
    onFavoriteChange() {
        console.log('hi');
    }
}
export class FavoriteComponent implements Oninit {
    @Input('is-favorite') isFavorite: boolean;
    @Output() change = new EventEmitter();
    constructor() {}
    ngOnInit() {

    }
    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit();
    }
}
//whe we are emitting this event
this.change.emit();
// we can pass some value, and this value will be available to all subscribers of this event. 
//in this case the subscriber of change event is our app component because
//that's where your handling this event
onClick() {
    this.isFavorite = !this.isFavorite;
    //so we pass this.isFavorite which is the new state of this favorite component
    this.change.emit(this.isFavorite);
}
//no back in our appcomponent we pass isFavorite as a parameter
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }
    
    onFavoriteChange(isFavorite) {
        console.log('favorite has changed ', isFavorite);
    }
}

//now in when we're handling the change event we pass the $event objects
<favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>
//$event is a built in object in angular. here this $event will be anything we pass
//when raising an event. In this case it will be a boolean value.

//if you want to pass an object
onClick() {
    this.isFavorite = !this.isFavorite;
    //so we pass this.isFavorite which is the new state of this favorite component
    this.change.emit({ newValue: this.isFavorite});
}
//now our $event represents a JS object that has the prop new value
<favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)">

// in AppComponent instead of receiving a boolean we'll receive an object
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }
    
    onFavoriteChange(eventArgs) {
        console.log('favorite has changed ', eventArgs);
    }
}
//if you dealing w/ a complex app you can declare a type on the object
interface NewValArgs {
    newValue: boolean
}
export class AppComponent {
    post = {
        title: "Title",
        isFavorite: true
    }
    
    onFavoriteChange(eventArgs: NewValArgs) {
        console.log('favorite has changed ', eventArgs);
    }
}