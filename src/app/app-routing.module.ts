import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchCharacterComponent } from './components/search-character/search-character.component';
import { AuthGuard } from './services/guards/auth.guard';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {path: '', canActivate: [AuthGuard],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'login'},
      {path: 'login', component: LoginComponent},
      {path: 'rickAndMorty', component: SearchCharacterComponent},
      {path: 'pokemon', component: PokemonComponent},
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
