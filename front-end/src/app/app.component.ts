import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-main-toolbar [appName]="title"></app-main-toolbar>
    <div id=content>
    <app-main-footer></app-main-footer>
    <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Escola Agora Vai';

}
