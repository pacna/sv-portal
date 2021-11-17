import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { SVLayoutComponent } from './sv-layout/sv-layout.component';
import { ForestcraftComponent } from './forestcraft/forestcraft.component';
import { SwordcraftComponent } from './swordcraft/swordcraft.component';
import { RunecraftComponent } from './runecraft/runecraft.component';
import { DragoncraftComponent } from './dragoncraft/dragoncraft.component';
import { ShadowcraftComponent } from './shadowcraft/shadowcraft.component';
import { BloodcraftComponent } from './bloodcraft/bloodcraft.component';
import { HavencraftComponent } from './havencraft/havencraft.component';
import { PortalcraftComponent } from './portalcraft/portalcraft.component';
import { NeutralComponent } from './neutral/neutral.component';
@NgModule({
  declarations: [
    AppComponent,
    SVLayoutComponent,
    ForestcraftComponent,
    SwordcraftComponent,
    RunecraftComponent,
    DragoncraftComponent,
    ShadowcraftComponent,
    BloodcraftComponent,
    HavencraftComponent,
    PortalcraftComponent,
    NeutralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
