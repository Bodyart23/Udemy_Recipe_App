import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {RecipesModule} from './recipes/recipes.module';
import {ShopingListModule} from './shopping-list/shoping-list.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
