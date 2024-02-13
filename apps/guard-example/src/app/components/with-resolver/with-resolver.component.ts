import { User } from '@angular-routing-examples/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-with-resolver',
  templateUrl: './with-resolver.component.html',
  styleUrls: ['./with-resolver.component.css'],
})
export class WithResolverComponent implements OnInit {
  users: User[] = [];

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.users = this.activeRoute.snapshot.data['users'] as User[];
  }
}
