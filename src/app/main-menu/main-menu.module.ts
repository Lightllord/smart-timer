import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainMenuRoutingModule} from './main-menu-routing.module';
import {EntryMainMenuComponent} from './entry-main-menu/entry-main-menu.component';


@NgModule({
  declarations: [
    EntryMainMenuComponent
  ],
  imports: [
    CommonModule,
    MainMenuRoutingModule
  ]
})
export class MainMenuModule {
}
