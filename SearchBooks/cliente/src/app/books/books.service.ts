import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
@Injectable()
export class BooksService{
    Url:string='http://localhost:8080/';
    constructor(private http:HttpClient){
    }
    addBook(book) {
      console.log("Llego al servicio");
        console.log(book);
        return this.http.post(this.Url+'agregarLibros',book);
      }
    devuelveUltimo(){
        return this.http.get(this.Url+'devuelveUltimo').toPromise();
    }
    devuelveTodoslibros(){
      return this.http.get(this.Url+'todosLibros');
       }
    }