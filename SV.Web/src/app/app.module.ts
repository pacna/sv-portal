// Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Shared
import { SVLayoutComponent } from './shared/components/sv-layout/sv-layout.component';
import { TopNavComponent } from './shared/components/top-nav/top-nav.component';

// Self
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    // Standalone
    SVLayoutComponent,
    TopNavComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
