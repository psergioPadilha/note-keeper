import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { DetalhesCategoria } from '../models/categoria.models';
import { CategoriaService } from '../services/categoria.service';
import { NotificacaoService } from '../../../core/notificacao/notificacao.service';

@Component({
  selector: 'app-exclusao-categorias',
  standalone: true,
  imports: [
    NgIf,
    RouterLink,
    AsyncPipe,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './exclusao-categorias.component.html',
  styleUrl: './exclusao-categorias.component.scss'
})

export class ExclusaoCategoriasComponent implements OnInit {
  id?: number;
  categoria$?: Observable<DetalhesCategoria>;

  constructor
  (
    private route: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriaService,
    private notificacao: NotificacaoService
  ) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if(!this.id) {
      this.notificacao.erro('Não foi possível recuperar o ID requisitado!');

      return;
    }
    this.categoria$ = this.categoriaService.selecionarPoId(this.id);
  }

  excluir(){
    if(!this.id) {
      this.notificacao.erro('Não foi possível recuperar o ID requisitado!');

      return;
    }

    this.categoriaService.excluir(this.id).subscribe((res) => {
      this.notificacao.sucesso(`O registro ID [${ this.id }] foi excluído com sucesso!`);

      this.router.navigate(['/categorias'])
    });
  }
}
