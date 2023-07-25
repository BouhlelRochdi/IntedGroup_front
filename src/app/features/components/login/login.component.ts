import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { GlobalService } from '../../services/global.service';
import { LoginDto } from 'src/app/core/dtos/login.dto';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, PasswordModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  _globalService = inject(GlobalService);
  _route = inject(Router);

  password: string = '';
  email: string = '';

  submitForm() {
    console.log('submit');
    const FormData: LoginDto = {
      email: this.email,
      password: this.password
    };
    this._globalService.login(FormData).subscribe(
      {
        next: (data: LoginDto) => {
          console.log(data);
          this._route.navigate(['/home']);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      }
    );
  }
}
