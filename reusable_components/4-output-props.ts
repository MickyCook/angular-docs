//output props
//so we want to be notified when the user clicks on this component raising a custom event
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
//to make this output happen 
//now when the isFavorite event is toggle we want to raise the event
//so we use .emit() to raise the custom event. 
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