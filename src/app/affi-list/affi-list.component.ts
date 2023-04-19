import { PostsService } from './../services/posts.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affi-list',
  templateUrl: './affi-list.component.html',
  styleUrls: ['./affi-list.component.css']
})
export class AffiListComponent {

  posts: any;

  constructor(private PostsService: PostsService, private router : Router) { }

  ngOnInit(): void {
    this.refrech();
  }


  refrech() {
    this. PostsService.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      }
    );
  }

  deletePost(id: any) {

    this.PostsService.deletePost(id).subscribe(
      data => {
        this.refrech();
      }
    );
  }

  detailsPost(id: any) {
    this.router.navigate(['detailsPost/'+id]);
  }

  updatePost(id:any){
    this.router.navigate(['updatePost/'+id]);

}

}


