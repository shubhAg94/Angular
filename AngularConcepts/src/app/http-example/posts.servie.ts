import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {

  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    // Send Http request
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>('https://httpclient-809b5.firebaseio.com/posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    //Ex: Adding multiple  params:
    // let searchParams = new HttpParams();
    // searchParams = searchParams.append('print', 'pretty');
    // searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://httpclient-809b5.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: new HttpParams().set('print', 'pretty')
          //Ex: Adding multiple  params:
          //params: searchParams
        }
      )
      .pipe(
        map(resposeData => {
          const postArray: Post[] = [];
          for (const key in resposeData) {
            if (resposeData.hasOwnProperty(key)) {
              postArray.push({ ...resposeData[key], id: key });
            }
          }
          return postArray;
        }),
        catchError(errorRes => {
          // Send to analytica server
          /*Here, you could do stuff like send to analytics server, some generic error handling task you might want to do. Maybe not related to the UI, though of course you could use the subject. But maybe you have some behind the scenes stuff you want to do when an error occurs, log it somewhere, send it to your own server, your analytics server, anything like that. */

          /*This of course doesn't do anything useful here but it's just an idea that you could consider using catch error if you have some generic error handling task you also want to execute. */
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete('https://httpclient-809b5.firebaseio.com/posts.json');
  }
}