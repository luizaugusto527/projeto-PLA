import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { CalcComponent } from './calc/calc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path:'',component:MainComponent
    },{path:'calc',component:CalcComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
