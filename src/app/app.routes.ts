import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ListagemCategoriasComponent } from './views/categorias/listar/listagem-categorias.component';
import { CadastroCategoriaComponent } from './views/categorias/cadastrar/cadastro-categoria.component';
import { EdicaoCategoriaComponent } from './views/categorias/editar/edicao-categorias.component';
import { ExclusaoCategoriasComponent } from './views/categorias/excluir/exclusao-categorias.component';
import { notasRoutes } from './views/notas/notas.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  {
    path: 'categorias', children:
    [
      { path: '', redirectTo: 'listar', pathMatch: 'full' },
      { path: 'listar', component: ListagemCategoriasComponent },
      { path: 'cadastrar', component: CadastroCategoriaComponent },
      { path: 'editar/:id', component: EdicaoCategoriaComponent },
      { path: 'excluir/:id', component: ExclusaoCategoriasComponent },
    ],
  },

  { path: 'notas', children: notasRoutes },
];
