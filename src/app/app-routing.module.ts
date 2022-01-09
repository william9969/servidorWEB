import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'validar-cliente',
    loadChildren: () => import('./validar-cliente/validar-cliente.module').then( m => m.ValidarClientePageModule)
  },
  {
    path: 'l-prod-bodega',
    loadChildren: () => import('./l-prod-bodega/l-prod-bodega.module').then( m => m.LProdBodegaPageModule)
  },
  {
    path: 'l-prod-cat',
    loadChildren: () => import('./l-prod-cat/l-prod-cat.module').then( m => m.LProdCatPageModule)
  },
  {
    path: 'editarcliente',
    loadChildren: () => import('./editarcliente/editarcliente.module').then( m => m.EditarclientePageModule)
  },
  {
    path: 'addcliente',
    loadChildren: () => import('./addcliente/addcliente.module').then( m => m.AddclientePageModule)
  },
  {
    path: 'elicliente',
    loadChildren: () => import('./elicliente/elicliente.module').then( m => m.EliclientePageModule)
  },
  {
    path: 'listar-cliente',
    loadChildren: () => import('./listar-cliente/listar-cliente.module').then( m => m.ListarClientePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
