import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-main-toolbar [appName]="title"></app-main-toolbar>
    <app-main-footer></app-main-footer>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Escola Agora Vai';

}
