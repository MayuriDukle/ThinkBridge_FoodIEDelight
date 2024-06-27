import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './Components/tile/tile.component';
import { SvgIconsComponent } from './Components/svg-icons/svg-icons.component';
import { FormsModule } from '@angular/forms';
import { AddeditRestaurantComponent } from './Components/addedit-restaurant/addedit-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    SvgIconsComponent,
    AddeditRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
