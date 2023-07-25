import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/features/services/global.service';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';

interface TypeOfDemande {
  name: string;
  value: string;
}

@Component({
  selector: 'app-create-demande',
  standalone: true,
  imports: [CommonModule, InputTextModule, ButtonModule, FormsModule, InputTextareaModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './create-demande.component.html',
  styleUrls: ['./create-demande.component.scss']
})
export class CreateDemandeComponent implements OnInit{
  _globalService = inject(GlobalService);
  _route = inject(Router);
  demandeForm!: FormGroup;
  types: TypeOfDemande[] = [
    {
    name: 'Demande',
    value: 'demande'
  },
  {
    name: 'Other',
    value: 'Other'
  },
]

  ngOnInit() {
    this.demandeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      type: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  createDemande() {
    if(this.demandeForm.invalid) {
      alert('invalid form')
      return
    } else {
      this._globalService.createDemande(this.demandeForm.value).subscribe(
        {
          next: (data: any) => {
            console.log(data);
            this._route.navigate(['/home/user-interface']);
          },
          error: (err: any) => {
            console.log(err);
          },
          complete: () => {
            console.log('complete');
          }
        })
    }
  }

}
