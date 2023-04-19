
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { AuteursService } from '../services/auteurs.service';

@Component({
  selector: 'app-ajout-post',
  templateUrl: './ajout-post.component.html',
  styleUrls: ['./ajout-post.component.css']
})
export class AjoutPostComponent {


  constructor(private postService: PostsService, private router : Router,private auteurService :AuteursService){


  }
  auteurs: any;
  ngOnInit(){
    this.auteurService.getAuthors().subscribe(
      data=>{
        this.auteurs=data
        console.log(this.auteurs)
      }
    )

  }

  createPost(postform:any)
  {
    let  titre= postform.value.titre;
    let image = postform.value.image;
    let auteur = postform.value.auteur;
    let resume = postform.value.resume;
    let content = postform.value.contenu;

    let post={
      "title": titre,
      "resume":resume,
      "content": content,
      "image_url": image,
      "author_id": auteur,


    }
    console.log(post);

    this.postService.addPost(post).subscribe(
      data=>{
           alert("Post Ajouté avec Succès !");
           console.log(data);
           this.router.navigate(['admin']);
      }
    );

  }
}
