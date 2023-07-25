import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableModule } from 'primeng/treetable';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/features/services/global.service';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TreeTableModule, ButtonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  _globalService = inject(GlobalService);
  _route = inject(Router);

  demandes!: TreeNode[];

  ngOnInit() {
    this._globalService.getDemandeDetails().subscribe(
      {
        next: (data: any) => {
          console.log(data.data);
          this.demandes = data.data.map((elem: any) => {
            return {
              label: elem.name,
              data: elem,
              children: [
                {
                  label: 'elem.agentResponse',
                  data: 'elem.agentResponse',
                }
              ]

            }
          })
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete');
        }
      })
  }

  deleteItem(id: string) {
    console.log('id', id)
    this._globalService.deleteDemande(id).subscribe(
      {
        next: (data: any) => {
          console.log(data);
          this.demandes = this.demandes.filter((elem: any) => elem.data._id !== id);
          // this._route.navigate(['/home/user-interface']);
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
