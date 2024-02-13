import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  Event,
  GuardsCheckEnd,
  GuardsCheckStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { ObSpinnerService } from '@oblique/oblique';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'angular-routing-examples-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Guard Example';

  navigation = [
    { url: 'without-resolver', label: 'Without Resolver' },
    { url: 'with-resolver', label: 'With Resolver' },
    { url: 'protected', label: 'Protected' },
  ];

  readonly destroyed = new Subject<void>();

  constructor(
    private readonly router: Router,
    private readonly spinner: ObSpinnerService
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(takeUntil(this.destroyed))
      .subscribe((event: Event) => {
        // list of router events: https://angular.io/api/router/RouterEvent
        switch (true) {
          case event instanceof NavigationStart:
          case event instanceof GuardsCheckEnd:
            this.spinner.activate();
            break;

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError:
          case event instanceof GuardsCheckStart:
            this.spinner.deactivate();
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
