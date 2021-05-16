import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Post } from './post.model';
import { PostsService } from './posts.servie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'http-example',
  templateUrl: './http-example.component.html',
  styleUrls: ['./http-example.component.css']
})
export class HttpExampleComponent implements OnInit, OnDestroy {

  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub : Subscription;

  constructor(private postsService: PostsService) { }
 
  ngOnInit() {
    this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.isFetching = true;
    this.postsService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, 
      error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      });
  }

  onCreatePost(postData: Post){
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onClearPosts() {
    this.postsService.deletePosts()
      .subscribe((response) => {
        this.loadedPosts = [];
      });
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts()
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      }, 
      error => {
        this.isFetching = false;
        this.error = error.message;
      });
  }

  onHandleError(){
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
