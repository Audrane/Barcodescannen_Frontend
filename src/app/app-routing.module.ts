import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { File } from '@ionic-native/file';
const routes: Routes = [
  {
    path: '',
    //loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    //loadChildren: () => import('./registrieren/registrieren.module').then( m => m.RegistrierenPageModule)
    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    //loadChildren: () => import('./barcodscannen/barcodscannen.module').then(m => m.BarcodscannenPageModule)
 loadChildren:() => import('./startseite/startseite.module').then(m => m.StartseitePageModule)
    //loadChildren: () => import('./kundenformular/kundenformular.module').then(m => m.KundenformularPageModule)
 //   loadChildren:() => import('./kunde/kunde.module').then(m => m.KundePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'startseite',
    loadChildren: () => import('./startseite/startseite.module').then( m => m.StartseitePageModule)
  },
  {
    path: 'registrieren',
    loadChildren: () => import('./registrieren/registrieren.module').then( m => m.RegistrierenPageModule)
  },
  {
    path: 'passwort-vergessen',
    loadChildren: () => import('./passwort-vergessen/passwort-vergessen.module').then( m => m.PasswortVergessenPageModule)
  },
  {
    path: 'barcodscannen',
    loadChildren: () => import('./barcodscannen/barcodscannen.module').then( m => m.BarcodscannenPageModule)
  },
  {
    path: 'datenerfassen',
    loadChildren: () => import('./datenerfassen/datenerfassen.module').then( m => m.DatenerfassenPageModule)
  },
  {
    path: 'kunde',
    loadChildren: () => import('./kunde/kunde.module').then( m => m.KundePageModule)
  },
  {
    path: 'kundenformular',
    loadChildren: () => import('./kundenformular/kundenformular.module').then( m => m.KundenformularPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
