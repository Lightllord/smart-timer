import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { EntryTimerComponent } from './entry-timer/entry-timer.component';


@NgModule({
  declarations: [EntryTimerComponent],
  imports: [
    CommonModule,
    TimerRoutingModule
  ]
})
export class TimerModule { }
