import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AuteursService } from '../services/auteurs.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private postService: PostsService,private aRoute : ActivatedRoute, private auteurService :AuteursService){};
  id :any;
  post: any ;
  auteurs :any;

  ngOnInit(){
    this.aRoute.paramMap.subscribe(
      params=>{
        this.id = params.get('id')
      }

    );

this.postService.getPost(this.id).subscribe(
data =>{
  this.post=data;})

  this.auteurService.getAuthors().subscribe(
    data=>{
      this.auteurs=data
      console.log(this.auteurs)
    }
  )
}
}
