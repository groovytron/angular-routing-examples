import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User, UserService } from '@angular-routing-examples/http';
import { Observable } from 'rxjs';
import { ObSpinnerService } from '@oblique/oblique';

@Component({
  selector: 'app-without-resolver',
  templateUrl: './without-resolver.component.html',
  styleUrls: ['./without-resolver.component.css'],
})
export class WithoutResolverComponent implements OnInit, AfterViewInit {
  users!: Observable<User[]>;
  readonly spinnerChannel = 'without-resolver';

  constructor(
    private readonly userService: UserService,
    private readonly spinner: ObSpinnerService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.listUsers();

    this.users.subscribe(() => {
      this.spinner.deactivate(this.spinnerChannel);
    });
  }

  ngAfterViewInit(): void {
    this.spinner.activate(this.spinnerChannel); // https://github.com/oblique-bit/oblique/issues/11
  }
}
