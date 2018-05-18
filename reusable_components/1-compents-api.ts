<img [src]="imgUrl">
//think of the src as an input into the img dom objects

<favorite [isFavorite]="post.isFavorite" (change)="onFavoriteChange()"></favorite>
//the isFavorite property binding doesn't work, in order to use property binding you need to define that property or field
//as an input property.
//the change propery has to be defined as an output property.
//in order to make a component more reusable, you need to add a bunch of input and output properties
//input properties pass input or state to a component. 
//output properites are use to raise events from this custom components. 
// the combination of input and output props make the public api of that component. 
