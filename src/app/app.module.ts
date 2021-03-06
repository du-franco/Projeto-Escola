import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import localePt from '@angular/common/locales/pt';
import { CommonModule, CurrencyPipe, registerLocaleData  } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Templates/header/header.component';
import { FooterComponent } from './Templates/footer/footer.component';
import { HomeComponent } from './Templates/home/home.component';
import { ListaTurmaComponent } from './views/Turma/lista-turma/lista-turma.component';
import { CadastroTurmaComponent } from './views/Turma/cadastro-turma/cadastro-turma.component';
import { DeleteTurmaComponent } from './views/Turma/delete-turma/delete-turma.component';
import { EditarTurmaComponent } from './views/Turma/editar-turma/editar-turma.component';
import { ListaAlunoComponent } from './views/Aluno/lista-aluno/lista-aluno.component';
import { CadastroAlunoComponent } from './views/Aluno/cadastro-aluno/cadastro-aluno.component';
import { EditarAlunoComponent } from './views/Aluno/editar-aluno/editar-aluno.component';
import { DeleteAlunoComponent } from './views/Aluno/delete-aluno/delete-aluno.component';
import { ListaAlunoComTurmaComponent } from './views/Aluno/lista-aluno-com-turma/lista-aluno-com-turma.component';
import { ProfessorDaTurmaComponent } from './views/Professor/professor-da-turma/professor-da-turma.component';
import { ListaProfessorComponent } from './views/Professor/lista-professor/lista-professor.component';
import { ListaAlunosDaTurmaComponent } from './views/Aluno/lista-alunos-da-turma/lista-alunos-da-turma.component';
import { AtribuirTurmaComponent } from './views/Aluno/atribuir-turma/atribuir-turma.component';
import { AtribuirTurmaAoProfessorComponent } from './views/Professor/atribuir-turma-ao-professor/atribuir-turma-ao-professor.component';
import { CadastrarProfessorComponent } from './views/Professor/cadastrar-professor/cadastrar-professor.component';
import { ListaBoletoAlunoComponent } from './views/Boleto/lista-boleto-aluno/lista-boleto-aluno.component';
import { CadastrarBoletoComponent } from './views/Boleto/cadastrar-boleto/cadastrar-boleto.component';
import { NgxCurrencyModule } from "ngx-currency";
import { EdicaoBoletoComponent } from './views/Boleto/edicao-boleto/edicao-boleto.component';
import { ExclusaoBoletoComponent } from './views/Boleto/exclusao-boleto/exclusao-boleto.component';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListaTurmaComponent,
    CadastroTurmaComponent,
    DeleteTurmaComponent,
    EditarTurmaComponent,
    ListaAlunoComponent,
    CadastroAlunoComponent,
    EditarAlunoComponent,
    DeleteAlunoComponent,
    ListaAlunoComTurmaComponent,
    ProfessorDaTurmaComponent,
    ListaProfessorComponent,
    ListaAlunosDaTurmaComponent,
    AtribuirTurmaComponent,
    AtribuirTurmaAoProfessorComponent,
    CadastrarProfessorComponent,
    ListaBoletoAlunoComponent,
    CadastrarBoletoComponent,
    EdicaoBoletoComponent,
    ExclusaoBoletoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxCurrencyModule,
  ],
  providers: [{provide:LOCALE_ID, useValue:"pt-BR"},
               {provide:DEFAULT_CURRENCY_CODE, useValue:"BRL"},
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
