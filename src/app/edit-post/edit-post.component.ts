import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AuteursService  } from '../services/auteurs.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent {

  constructor(private postService: PostsService, private router : Router,private auteurService :AuteursService,private aRoute : ActivatedRoute){


  }
  auteurs: any;
  auteur: any;
  post :any;
  postEdit :any;
  id :any;
  image: any;
  title: any;
  resume: any;
  content: any;
  ngOnInit(){
      this.aRoute.paramMap.subscribe(
        params=>{
          this.id = params.get('id')
        }

      );

this.postService.getPost(this.id).subscribe(
  data =>{
    this.post=data;
    this.title= this.post.title;
    this.image = this.post.image_url;
    this.auteur = this.post.author_id;
    this.resume = this.post.resume;
    this.content = this.post.content;

  }

)
    this.auteurService.getAuthors().subscribe(
      data=>{
        this.auteurs=data
        console.log(this.auteurs)
      }
    )

  }

  editPost()
  {
    this.postEdit={
    "id" : this.id,
    "title" : this.title,
    "author_id" : this.auteur,
    "resume" : this.resume,
    "content" : this.content,
    "image_url" : this.image ,
  }
  console.log(this.postEdit)

    this.postService.updatePost(this.id,this.postEdit).subscribe(
      data=>{

           console.log(data);
           this.router.navigate(['admin']);
      }
    );

  }

}
