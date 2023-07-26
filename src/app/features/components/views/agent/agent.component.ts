import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store';
import { OPEN } from 'src/app/store/dialogs/dialogs.action';
import { setSelectedDemandeId } from 'src/app/store/userFlow/user.action';
import { GLOBAL_SERVICE } from 'src/app/core/constants/tokens.constants';



@Component({
  selector: 'app-agent',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {
  _store = inject(Store<AppStateInterface>);
  _globalService = inject(GLOBAL_SERVICE);

  selectedDemande!: any;
  demands: any[] = [ ];

  ngOnInit(): void {
    this._globalService.getProductsWithOrdersSmall().then((data) => {
      this.demands = data
    })
  }

  selectDemande(demande: any) {
    console.log('selected demande', demande);
  }

  openDialog(demandeId: any) {
    this._store.dispatch(OPEN({ dialogName: 'commentDialog' }));
    this._store.dispatch(setSelectedDemandeId({ demandeId: demandeId }));
  }
}
