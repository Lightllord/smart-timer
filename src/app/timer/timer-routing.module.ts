import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EntryTimerComponent} from './entry-timer/entry-timer.component';


const routes: Routes = [
  {
    path: '',
    component: EntryTimerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimerRoutingModule {
}
