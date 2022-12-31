// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Self
import { routes } from './app.routing';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
