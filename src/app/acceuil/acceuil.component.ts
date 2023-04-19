import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { AuteursService } from '../services/auteurs.service';




@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})

export class AcceuilComponent {

  posts: any;
  auteurs: any;

  constructor(private PostsService: PostsService, private auteurService :AuteursService , private router : Router) { }

  ngOnInit(): void {
    this.refrech();
    this.auteurService.getAuthors().subscribe(
      data=>{
        this.auteurs=data
        console.log(this.auteurs)
      }
    )

}


refrech() {
  this. PostsService.getPosts().subscribe(
    data => {
      this.posts = data;
      console.log(this.posts);
    }
  );
}


detailsPost(id: any) {
  this.router.navigate(['detail/'+id]);
}

}
