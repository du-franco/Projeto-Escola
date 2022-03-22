import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boleto } from '../models/boletoModel';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  baseUrl:String = 'http://localhost:8080/escola'

  constructor(private http:HttpClient) { }

  buscarUmBoleto(codigo:string):Observable<Boleto>{
    const url = `${this.baseUrl}/aluno/boleto/${codigo}`
    return this.http.get<Boleto>(url)
  }

  listarBoletosDoAluno(ra_aluno: String):Observable<Boleto[]>{
    const url = `${this.baseUrl}/aluno/boleto-aluno/${ra_aluno}`
    return this.http.get<Boleto[]>(url)
  }

  cadastrarBoleto(boleto:Boleto, ra_aluno:String):Observable<Boleto>{
    const url = `${this.baseUrl}/aluno/boleto/${ra_aluno}`
    return this.http.post<Boleto>(url, boleto)
  }

  pagarBoleto(boleto:Boleto, codigo:string):Observable<Boleto>{
    const url = `${this.baseUrl}/aluno/pagarBoleto/${codigo}`
    return this.http.put<Boleto>(url, boleto)
  }

  cancelarBoleto(boleto:Boleto, codigo:string):Observable<Boleto>{
    const url = `${this.baseUrl}/aluno/cancelarBoleto/${codigo}`
    return this.http.put<Boleto>(url, boleto)
  }

  editarUmBoleto(boleto:Boleto , codigo: String , ra_aluno:String):Observable<Boleto>{
    const url = `${this.baseUrl}/aluno/boleto/${codigo}/${ra_aluno}`
    return this.http.put<Boleto>(url,boleto)
  }

  excluirBoleto(codigo:string):Observable<void>{
    const url = `${this.baseUrl}/aluno/boleto/${codigo}`
    return this.http.delete<void>(url)
  }

}
