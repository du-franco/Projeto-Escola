import { ActivatedRoute, Router } from '@angular/router';
import { BoletoService } from './../../../servicos/boleto.service';
import { Component, OnInit } from '@angular/core';
import { Boleto } from 'src/app/models/boletoModel';

@Component({
  selector: 'app-edicao-boleto',
  templateUrl: './edicao-boleto.component.html',
  styleUrls: ['./edicao-boleto.component.css']
})
export class EdicaoBoletoComponent implements OnInit {

  codigo:any
  ra_aluno:any

  boleto:Boleto ={
    codigo:'',
    bo_descricao:'',
    bo_dataVencimento:'',
    bo_status:'',
    bo_valor:0,
  }

  constructor(
    private boletoService:BoletoService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.codigo = this.route.snapshot.paramMap.get('codigo');
    this.ra_aluno = this.route.snapshot.paramMap.get('ra_aluno');
    this.buscarBoleto();

  }

  buscarBoleto(){
    this.boletoService.buscarUmBoleto(this.codigo).subscribe(resultado => {
      this.boleto = resultado
    })
  }

  editarBoleto(){
    this.boletoService.editarUmBoleto(this.boleto, this.codigo, this.ra_aluno).subscribe({
      complete: () => {alert("Boleto editado com sucesso!"),
      this.router.navigate([`/alunosComTurma`])},
      error: () => { alert("Erro: Boleto não editado")
                      this.router.navigate(['/alunosComTurma']) },
    })
  }

  cancelarEdicao(){
    this.router.navigate(['/alunosComTurma'])
  }

}
