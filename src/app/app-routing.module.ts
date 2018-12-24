import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesViewComponent }   from './views/routes/routes-view/routes-view.component';

const routes: Routes = [
  { path: 'routes', component: RoutesViewComponent },
  { path: '',   redirectTo: '/routes', pathMatch: 'full' },
  { path: '**', component: RoutesViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
