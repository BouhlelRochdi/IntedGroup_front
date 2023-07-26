import { Component, Inject, ViewEncapsulation, inject } from '@angular/core';
import { GLOBAL_SERVICE } from './core/constants/tokens.constants';
import { GlobalService } from './features/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'intedGroup';

  constructor(@Inject(GLOBAL_SERVICE) private _globalService: GlobalService) {
  }
}
