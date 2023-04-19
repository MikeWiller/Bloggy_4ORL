import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AuteursService } from '../services/auteurs.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  posts: any;
  verify : any;
  auteurs :  any;

  constructor(private PostsService: PostsService, private router : Router, private auteurService :AuteursService) { }

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

  deletePost(id: any,title:string) {
   this.verify= prompt(" \n Attention !! Vous essayer de supprimer \"" +title+ "\"\n\n Entrez le titre du post et cliquez sur le bouton OK pour continuer ou cliquez sur Annuler pour annuler l'opération \n\n ","")
   if (this.verify==title){
    this.PostsService.deletePost(id).subscribe(
      data => {

      },
      (error: HttpErrorResponse)    =>{
        alert(" Suppression Réussie !! ")
        this.ngOnInit();
        if(error.status===404){
          alert("Suppression Réussie !!")
          this.ngOnInit();
        }
      }

    );
    this.ngOnInit();
   }else{
    alert("Suppression Annuler")
    this.ngOnInit();
   }
   this.ngOnInit();

  }
  createPost() {
    this.router.navigate(['ajouter/']);
  }
  detailsPost(id: any) {
    this.router.navigate(['detailsPost/'+id]);
  }

  updatePost(id:any){
    this.router.navigate(['edit/'+id]);

}

}
