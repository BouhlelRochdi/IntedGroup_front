import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/store';
import { CLOSE } from 'src/app/store/dialogs/dialogs.action';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { demandeIdSelector } from 'src/app/store/userFlow/user.selector';
import { updateDemande } from 'src/app/store/userFlow/user.action';

@Component({
  selector: 'app-comment-agent',
  standalone: true,
  imports: [CommonModule, DialogModule, ButtonModule, DropdownModule, InputTextareaModule, FormsModule],
  templateUrl: './comment-agent.component.html',
  styleUrls: ['./comment-agent.component.scss']
})
export class CommentAgentComponent {
  _store = inject(Store<AppStateInterface>);
  @ViewChild('myModal', { static: false }) myModal!: Dialog;

  comment: string = '';
  visible: boolean = false;
  selectedId: string = '';

  constructor() {
    this._store.select(demandeIdSelector).subscribe(res => {
      console.log('demandeIdSelector: ', res)
      this.selectedId = res;
    })
  }

  ngOnInit() {
  }

  closeModal() {
    this._store.dispatch(CLOSE({ dialogName: 'commentDialog' }));
    this.visible = false;
  }

  confirmValue() {
    if(this.comment.length > 0) {
      this.visible = false;
      this._store.dispatch(updateDemande( {_id: this.selectedId, agentResponse: this.comment} ));
      this._store.dispatch(CLOSE({ dialogName: 'commentDialog' }));
    }else{
      alert('Please enter a comment to submit')
    }
  }

}
