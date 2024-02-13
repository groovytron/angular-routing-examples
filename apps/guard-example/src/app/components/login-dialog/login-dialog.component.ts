import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
})
export class LoginDialogComponent {
  form = new FormGroup({
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  constructor(private readonly dialog: MatDialogRef<LoginDialogComponent>) {}

  authenticate() {
    this.dialog.close(this.form.valid && this.form.value.password === 'secret');
  }
}
