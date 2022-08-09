import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { RemoverPost } from '../store/posts.actions';
import { PostState } from '../store/posts.state';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {
 /*  listPost: Post[] = [
    {
      id: 'ddad242-dada',
      nombre: 'Angular',
      descripcion: 'Es un framework creado por Google'
    },
    {
      id: 'dada24dadada-dada',
      nombre: 'Bootstrap',
      descripcion: 'Es una libreria CSS con un poderoso sistema de regillas'
    }
  ] */
  @Select(PostState.getPosts) posts$!: Observable<Post[]>;
  /* posts$: Observable<Post[]>;  */

  constructor(private toastr: ToastrService, private store: Store) {
   /*  this.posts$ = this.store.select<Post[]>(state => state.posts.listPosts) */
   }

  ngOnInit(): void {
  }

  eliminarPost(postSelec: Post) {
    /* this.listPost = this.listPost.filter(post => post.id !== postSelec.id); */
    this.store.dispatch(new RemoverPost(postSelec.id))
    this.toastr.error(`El post ${postSelec.nombre} fue elimininado con exito`, 'Registro eliminado');
  }
}
