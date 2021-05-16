import { Component, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'favourite-friends',
  template: `
	<b>All Favourite Friends</b>
	<br/> {{allFriends}}	
  `
})
export class FavouriteFriendsComponent implements AfterContentInit {
        @ContentChildren('name') allFriendsRef: QueryList<ElementRef> ;
	
	get allFriends(): string {
	   return this.allFriendsRef ? this.allFriendsRef.map(f =>f.nativeElement.innerHTML).join(', ') : '';
	}
	ngAfterContentInit() {
	   console.log(this.allFriends);
	}	
} 