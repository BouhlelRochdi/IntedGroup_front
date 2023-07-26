import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeTableModule } from 'primeng/treetable';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/features/services/global.service';
import { ButtonModule } from 'primeng/button';
import { TreeNode } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { GLOBAL_SERVICE } from 'src/app/core/constants/tokens.constants';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store';
import { deleteDemande, getAllDemandeByUser } from 'src/app/store/userFlow/user.action';
import { alldemandesSelector } from 'src/app/store/userFlow/user.selector';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TreeTableModule, ButtonModule, TableModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  _globalService = inject(GLOBAL_SERVICE);
  _store = inject(Store<AppStateInterface>);
  _route = inject(Router);

  demandes: any[] = [];

  ngOnInit() {
    this._store.dispatch(getAllDemandeByUser())
    this._store.select(alldemandesSelector).subscribe(
      (demandes) => {
        console.log('demandes : ', demandes)
        this.demandes = demandes;
      }
    )
  }

  deleteItem(id: string) {
    this._store.dispatch(deleteDemande({ demandeId: id }))
  }

}
