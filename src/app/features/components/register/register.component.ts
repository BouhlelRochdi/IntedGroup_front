import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { GLOBAL_SERVICE } from 'src/app/core/constants/tokens.constants';
import { Router, RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { Roles } from 'src/app/core/constants/enums';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, PasswordModule, FormsModule, InputTextModule, ButtonModule, ReactiveFormsModule, DropdownModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  _globalService = inject(GLOBAL_SERVICE);
  _route = inject(Router);
  registerForm!: FormGroup;

  rolesType = [Roles.AGENT, Roles.USER]

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      role: new FormControl(this.rolesType[0], Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signup() {
    if (this.registerForm.invalid) {
      alert('invalid form')
      return
    } else {
      this._globalService.signup(this.registerForm.value).subscribe(
        {
          next: (data: any) => {
            this._route.navigate(['/login']);
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


}
