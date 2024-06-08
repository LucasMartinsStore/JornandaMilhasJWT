import { AutenticaoService } from './../../core/services/autenticao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticaoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, Validators.required],
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.senha;

    this.autenticacaoService.auth(email, password).subscribe({
      next: (value) => {
        console.log('Login relizado com sucesso', value);
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        console.error('Error login', err);
      },
    });
  }
}
