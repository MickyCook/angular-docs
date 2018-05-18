//giving input prop a nickname
<favorite [is-favorite]="post.isFavorite"></favorite>
//so if we wanted to change isFavorite to is-favorite in the input component
//you can supply an alias string:
export class FavoriteComponent implements Oninit {
    @Input('is-favorite') isFavorite: boolean;

    constructor() {

    }
    ngOnInit() {

    }
}
//using an alias for a prop has the benefit of keeping the api stable.
//for exampe: if we decide to change the isFavorite to isSelected
@Input() isSelected: boolean;
//our app is now broken
//but if you have an alias and change the field everything works correctly
@Input('isFavorite') isSelected: boolean;
