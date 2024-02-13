import { Component } from '@angular/core';

@Component({
  selector: 'angular-routing-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Resolver Example';

  navigation = [
    { url: 'without-resolver', label: 'Without Resolver' },
    { url: 'with-resolver', label: 'With Resolver' },
  ];
}
