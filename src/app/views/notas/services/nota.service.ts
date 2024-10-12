import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CadastroNota, DetalhesNota, EdicaoNota, ListagemNota, NotaCriada, NotaEditada, NotaExcluida } from '../models/nota.models';

@Injectable({
  providedIn: 'root'
})

export class NotaService {
  private readonly url = `${environment.API_URL}/notas`;

  constructor(private http: HttpClient) { }

  cadastrar(novaNota: CadastroNota): Observable<NotaCriada> {
    return this.http.post<NotaCriada>(this.url, novaNota);
  }

  selecionarTodos(): Observable<ListagemNota[]> {
    const urlCompleto = `${this.url}?_expand=categoria`;

    return this.http.get<ListagemNota[]>(urlCompleto);
  }

  selecionarPoId(id: number): Observable<DetalhesNota> {
    const urlCompleto = `${this.url}/${id}?_expand=categoria`;

    return this.http.get<DetalhesNota>(urlCompleto);
  }

  editar(id: number, notaEditada: EdicaoNota): Observable<NotaEditada> {
    const urlCompleto = `${this.url}/${id}`;

    return this.http.put<NotaEditada>(urlCompleto, notaEditada);
  }

  excluir(id: number): Observable<NotaExcluida> {
    const urlCompleto = `${this.url}/${id}`;

    return this.http.delete<NotaExcluida>(urlCompleto);
  }
}
