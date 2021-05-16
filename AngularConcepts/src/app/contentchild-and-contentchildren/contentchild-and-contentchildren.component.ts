import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contentchild-and-contentchildren',
  templateUrl: './contentchild-and-contentchildren.component.html',
  styleUrls: ['./contentchild-and-contentchildren.component.css']
})
export class ContentchildAndContentchildrenComponent {

  latestBook = true;
   showAllBook = false;
   homeTown = true; 	   
   showAllCity = false;	
   bestFriend = true;    
   showAllFriend = false;
   onChangeBook() {
	   this.latestBook = (this.latestBook === true)? false : true;
   }
   onShowAllBooks() {
	   this.showAllBook = (this.showAllBook === true)? false : true;
   }     
   onChangeCity() {
	   this.homeTown = (this.homeTown === true)? false : true;
   }
   onShowAllCities() {
	   this.showAllCity = (this.showAllCity === true)? false : true;
   }
   onChangeFriend() {
	   this.bestFriend = (this.bestFriend === true)? false : true;
   }
   onShowAllFriends() {
	   this.showAllFriend = (this.showAllFriend === true)? false : true;
   }

}
