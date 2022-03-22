import { AlunoService } from './../../../servicos/aluno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BoletoService } from './../../../servicos/boleto.service';
import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/models/boletoModel';


@Component({
  selector: 'app-lista-boleto-aluno',
  templateUrl: './lista-boleto-aluno.component.html',
  styleUrls: ['./lista-boleto-aluno.component.css']
})
export class ListaBoletoAlunoComponent implements OnInit {

  ra_aluno:any

  nomeAluno:String = ''

  boletos:Boleto[] = []

  constructor(
    private boletoService:BoletoService,
    private route:ActivatedRoute,
    private router:Router,
    private alunoService:AlunoService,
    ) { }

  ngOnInit(): void {

    this.ra_aluno = this.route.snapshot.paramMap.get('ra_aluno');
    this.listarBoletos();
    this.buscarAluno();

  }

  listarBoletos(){
    this.boletoService.listarBoletosDoAluno(this.ra_aluno).subscribe(resultado => {
      this.boletos = resultado
    })
  }

  buscarAluno(){
    this.alunoService.buscarUmAluno(this.ra_aluno).subscribe(resultado => {
      this.nomeAluno = resultado.al_nome
    })
  }

  quitarBoleto(boleto:Boleto, codigo:any){
    this.boletoService.pagarBoleto(boleto, codigo).subscribe({
      complete: () => {alert("Boleto quitado com sucesso!")
                    this.listarBoletos()},
      error: () => {alert("Erro: Boleto não quitado!")}
    })
  }

  cancelarBoleto(boleto:Boleto, codigo:any){
    this.boletoService.cancelarBoleto(boleto, codigo).subscribe({
      complete: () => {alert("Boleto cancelado com sucesso!")
                    this.listarBoletos()},
      error: () => {alert("Erro: Boleto não cancelado!")}
    })
  }

}
