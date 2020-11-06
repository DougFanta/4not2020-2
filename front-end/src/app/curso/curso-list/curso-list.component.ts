import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

	cursos : any = []
	displayedColumns: string[] = [ 'nome', 'carga_horaria', 'nivel', 'valor_curso', 'editar', 'excluir']
  constructor(private cursoSrv: CursoService) { }

  async ngOnInit(){

		this.cursos =	await this.cursoSrv.listar()
		console.log(this.cursos)
  }
  excluir(id:string){
      if(confirm("Deseja Excluir?")){
          alert('vai excluir o registro com id=' + id)
      }
  }
}
