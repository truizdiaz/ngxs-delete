import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Post } from 'src/app/interfaces/post';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { AgregarPost } from '../store/posts.actions';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';

  constructor(private toastr: ToastrService, private store: Store) { }

  ngOnInit(): void {
  }

  agregarPost() {

    // Validamos campos
    if(this.nombre == '' || this.descripcion == '') {
      console.log('entre');
      this.toastr.error('El campo texto y descripcion son obligatorios','Error');
      return;
    }

    // Creamos objeto
    const post: Post = {
      id: uuidv4(),
      nombre: this.nombre,
      descripcion: this.descripcion
    }
    this.store.dispatch(new AgregarPost(post))
    // Mensaje de exito
    this.toastr.success(`El post ${this.nombre.toLocaleUpperCase()} fue agregado con exito!`, 'Post registrado!');
    
    // Reset formulario
    this.resetForm();
  }

  resetForm() {
    this.nombre = '';
    this.descripcion = '';
  }

}
