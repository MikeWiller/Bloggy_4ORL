import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
basePostUrl =" http://103502.bloggy.ecole-it.devigne.space/posts/"
  constructor(private http :HttpClient) { }
  //1)get Posts
  getPosts() {
    return this.http.get(this.basePostUrl);
  }

  //2) add post
  addPost(post: any) {
    return this.http.post(this.basePostUrl , post);
  }

  //3) get post
  getPost(id: number) {

    return this.http.get(this.basePostUrl + id);
  }

  //4) delete post
  deletePost(id: number) {
    return this.http.delete(this.basePostUrl + id);
  }

  //5) update post
  updatePost(id: number, new_post: any) {
    return this.http.put(this.basePostUrl + id, new_post);
  }



}
