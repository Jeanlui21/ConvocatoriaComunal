import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComunalNavbarComponent} from './comunal-navbar/comunal-navbar.component';
import {ComunalFooterComponent} from './comunal-footer/comunal-footer.component';


@NgModule({
  declarations: [ComunalNavbarComponent, ComunalFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ComunalNavbarComponent,
    ComunalFooterComponent
  ]
})
export class SharedModule {
}
