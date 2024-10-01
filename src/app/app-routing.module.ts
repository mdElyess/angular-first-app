import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberComponent } from './components/member/member.component';
import { MemberFormComponent } from './components/member-form/member-form.component';

const routes: Routes = [
  {path: '', component: MemberComponent, pathMatch: 'full'},
  {path: 'create', component: MemberFormComponent, pathMatch: 'full'},
  {path: ':id/edit', component: MemberFormComponent, pathMatch: 'full'},
  {path: '**', component: MemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
