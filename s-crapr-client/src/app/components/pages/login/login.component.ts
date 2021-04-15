import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginIn = false;
  invalidCredential = false
  returnUrl: string;

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.loginIn = true;
    const body = this.loginForm.value;
    this.authService.login(body).subscribe(res => {
      this.loginIn = false;
      this.router.navigate([this.returnUrl]);
    }, err => {
      this.invalidCredential = true;
      this.loginIn = false;
    })
  }

}
