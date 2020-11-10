import { CursoService } from './../curso.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

	cursos : any = []
	displayedColumns: string[] = [ 'nome', 'carga_horaria', 'nivel', 'valor_curso', 'editar', 'excluir']
    constructor(
    private cursoSrv: CursoService,
    private snackBar : MatSnackBar
  ) { }

  async ngOnInit(){

		this.cursos =	await this.cursoSrv.listar()
		console.log(this.cursos)
  }
  async excluir(id:string){
      if(confirm("Deseja Excluir?")){
          try {
              await this.cursoSrv.excluir(id)
              //recarregar os dados da tabela
              this.ngOnInit()
              this.snackBar.open('Item excluído com sucesso.', 'OK', {
              duration: 3000 // 3 segundos
            })

          } catch (error) {
              this.snackBar.open('Erro: Não foi possivel excluir o item', 'OK', {
              duration: 3000 // 3 segundos
            })
              console.log(error)
          }
      }
  }
}
