import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  { path: 'vocabulary', loadChildren: () => import('./pages/vocabulary/vocabulary.module').then(m => m.VocabularyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
