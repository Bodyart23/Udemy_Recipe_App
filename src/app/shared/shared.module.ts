import {NgModule} from '@angular/core';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {AlertComponent} from './alert/alert.component';
import {PlaceholderDirective} from './placeholder/placeholder.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  entryComponents: [AlertComponent]
})
export class SharedModule {
}
