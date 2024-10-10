import { ListagemNotasComponent } from "./listar/listagem-notas.component";
import { Routes } from "@angular/router";

export const notasRoutes: Routes = [
  { path: '', redirectTo: 'listar', pathMatch: 'full', },
  { path: 'listar', component: ListagemNotasComponent },
];
