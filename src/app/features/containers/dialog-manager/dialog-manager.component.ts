import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable, Subject, combineLatest, map, takeUntil } from 'rxjs';
import { GlobalService } from '../../services/global.service';
import { AppStateInterface } from 'src/app/store/app.state';
import { CLOSE, OPEN } from 'src/app/store/dialogs/dialogs.action';
import { commentDialogSelector } from 'src/app/store/dialogs/dialogs.selector';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-dialog-manager',
  templateUrl: './dialog-manager.component.html',
  styleUrls: ['./dialog-manager.component.scss'],
})
export class DialogManagerComponent implements OnDestroy {

  commentDialog$$: Observable<boolean> = this.store.select(commentDialogSelector);

  observables: Observable<boolean>[] = [
    this.commentDialog$$,
  ];

  commentDialog: boolean = false;
  Destroy: Subject<boolean> = new Subject();

  constructor(
    private store: Store<AppStateInterface>,
    private _globalService: GlobalService
  ) {
    console.log('we are in dialog manager constructor')
    this.initialize();
    // this.store.select(commentDialogSelector).pipe(
    //   map((state: boolean) => console.log('commentDialog$$', state)
    // ))
  }

  initialize() {
    this.store.select(commentDialogSelector).subscribe(
      (state: boolean) => {
        console.log('commentDialog$$', state)
        this.commentDialog = state;
      }
    )
    // combineLatest(this.observables)
    //   .pipe(takeUntil(this.Destroy))
    //   .subscribe(([commentDialog$$]): boolean[] | void => {
    //       console.log('commentDialog$$', commentDialog$$)
    //       this.commentDialog = commentDialog$$;
    //     }
    //   );
    console.log('commentDialog after affectation', this.commentDialog)
  }
  // open(dialogName: string) {
  //   this.store.dispatch(OPEN({ dialogName: dialogName }));
  // }
  close(dialogName: string) {
    this.store.dispatch(CLOSE({ dialogName: dialogName }));
  }

  ngOnDestroy(): void {
    this.Destroy.next(true);
    this.Destroy.complete();
  }
}
