export class FavoriteComponent implements Oninit {
    @Input() isFavorite: boolean;

    constructor() {

    }
    ngOnInit() {

    }
}

//we want to mark the isFavorite field as an input property, so we can use it
//in property binding expressions. 

//the @Input() decorator exposes the field to the outside. 
//so now our component has an input
<favorite [isFavorite]="post.isFavorite"></favorite>