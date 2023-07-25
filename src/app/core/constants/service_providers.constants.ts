
import { GlobalService } from 'src/app/features/services/global.service';
import {
  GLOBAL_SERVICE,
} from './tokens.constants';


export const ServicesProviders = [
  // SERVICES
  { provide: GLOBAL_SERVICE, useClass: GlobalService },
];
