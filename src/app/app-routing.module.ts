import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch:'full', redirectTo: 'login'
  },
  {
    path: 'login', loadComponent: () => import('./features/components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'home', loadComponent: () => import('./features/containers/home/home.component').then(m => m.HomeComponent),
    children: [
      {
        path: '', pathMatch:'full', redirectTo: 'user-interface'
      },
      {
        path: 'user-interface', loadComponent: () => import('./features/components/views/user/user.component').then(m => m.UserComponent)
      },
      {
        path: 'create-demande', loadComponent: () => import('./features/components/views/create-demande/create-demande.component').then(m => m.CreateDemandeComponent)
      },
      {
        path: 'agent-interface', loadComponent: () => import('./features/components/views/agent/agent.component').then(m => m.AgentComponent)
      },
    ]
  },
  { path: '**', loadComponent: () => import('./features/containers/not-found/not-found.component').then((m) => m.NotFoundComponent) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
