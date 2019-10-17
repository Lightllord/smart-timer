import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntryMainMenuComponent} from './entry-main-menu/entry-main-menu.component';

const routes: Routes = [
  {
    path: '',
    component: EntryMainMenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'timer'
      },
      {
        path: 'timer',
        loadChildren: () => import('../timer/timer.module').then(m => m.TimerModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainMenuRoutingModule {
}
