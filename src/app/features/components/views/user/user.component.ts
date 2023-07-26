import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableModule } from 'primeng/treetable';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/features/services/global.service';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { TableModule } from 'primeng/table';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TreeTableModule, ButtonModule, TableModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  _globalService = inject(GlobalService);
  // _route = inject(Router);

  // demandes!: TreeNode[];

  // ngOnInit() {
  //   // this._globalService.getDemandeDetails().subscribe(
  //   //   {
  //   //     next: (res: any) => {
  //   //       console.log('reeeeeeeeeees : ', res.data);
  //   //       // this.demandes = res.data.map((elem: any) => {
  //   //       //   return [
  //   //       //     {
  //   //       //       children : [
  //   //       //         {
  //   //       //           data: elem,
  //   //       //           children: [],
  //   //       //           parent: null
  //   //       //         }
  //   //       //       ],
  //   //       //       data: elem,
  //   //       //       parent: null
  //   //       //     }
  //   //       //   ]
  //   //       // })
  //   //     },
  //   //     error: (err: any) => {
  //   //       console.log(err);
  //   //     },
  //   //     complete: () => {
  //   //       console.log('complete');
  //   //     }
  //   //   })

  //   this._globalService.getDemandeDetails().toPromise().then((files) => {
  //     console.log('files ==============> ', files)
  //     this.demandes = files
  //   });

  // }

  // deleteItem(id: string) {
  //   console.log('id', id)
  //   this._globalService.deleteDemande(id).subscribe(
  //     {
  //       next: (data: any) => {
  //         console.log(data);
  //         this.demandes = this.demandes.filter((elem: any) => elem.data._id !== id);
  //         // this._route.navigate(['/home/user-interface']);
  //       },
  //       error: (err: any) => {
  //         console.log(err);
  //       },
  //       complete: () => {
  //         console.log('complete');
  //       }
  //     })
  // }
  demandes!: any[];

  ngOnInit() {
    this._globalService.getProductsWithOrdersSmall().then((data) => {
      this.demandes = data
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
