import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './containers/core/core.component';
import { AsideLeftComponent } from './containers/aside-left/aside-left.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { MainContentComponent } from './containers/main-content/main-content.component';

@NgModule({
  declarations: [CoreComponent, AsideLeftComponent, TopNavBarComponent, MainContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
