import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store';
import { OPEN } from 'src/app/store/dialogs/dialogs.action';

@Component({
  selector: 'app-comment-agent',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, DropdownModule],
  templateUrl: './comment-agent.component.html',
  styleUrls: ['./comment-agent.component.scss']
})
export class CommentAgentComponent {
  _store = inject(Store<AppStateInterface>);

  visible: boolean = false;

  ngOnInit() {
  }

  openDialog() {
    this._store.dispatch(OPEN({ dialogName: 'commentDialog' }));
  }

}
