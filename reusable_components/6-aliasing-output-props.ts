<favorite [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></favorite>

export class FavoriteComponent implements Oninit {
    @Input('is-favorite') isFavorite: boolean;
    @Output('change') change = new EventEmitter();
    constructor() {}
    ngOnInit() {

    }
    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit();
    }
}