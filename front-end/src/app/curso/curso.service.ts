import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
    
    private apiServer = environment.apiServer
    private apiUri : string = this.apiServer + 'curso'
	constructor(private http: HttpClient) { }
	
	listar(){
	    return this.http.get(this.apiUri).toPromise()
	}
    
    excluir(id:string){
        return this.http.request('DELETE', this.apiUri, {body: {_id: id}}).toPromise()

    }
}
